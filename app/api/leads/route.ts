import { NextResponse } from "next/server";

function getHubSpotAuthHeaders(): Record<string, string> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  const headers: Record<string, string> = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

function getHubSpotUrl(path: string) {
  const key = process.env.HUBSPOT_API_KEY;
  const baseUrl = `https://api.hubapi.com${path}`;
  if (!process.env.HUBSPOT_ACCESS_TOKEN && key) {
    return `${baseUrl}?hapikey=${key}`;
  }
  return baseUrl;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(/\s+/);
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    const headers = getHubSpotAuthHeaders();

    // 1. Search for existing contact by email
    const searchUrl = getHubSpotUrl("/crm/v3/objects/contacts/search");
    const searchResponse = await fetch(searchUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                propertyName: "email",
                operator: "EQ",
                value: email,
              },
            ],
          },
        ],
      }),
    });

    let contactId = "";

    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      if (searchData.results && searchData.results.length > 0) {
        contactId = searchData.results[0].id;
      }
    }

    if (contactId) {
      // 2a. Update existing contact
      const updateUrl = getHubSpotUrl(`/crm/v3/objects/contacts/${contactId}`);
      const updateResponse = await fetch(updateUrl, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          properties: {
            firstname,
            lastname,
            phone: phone || "",
          },
        }),
      });

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error("HubSpot update error:", errorData);
      }
    } else {
      // 2b. Create new contact
      const createUrl = getHubSpotUrl("/crm/v3/objects/contacts");
      const createResponse = await fetch(createUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          properties: {
            email,
            firstname,
            lastname,
            phone: phone || "",
          },
        }),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        return NextResponse.json(
          { error: errorData.message || "Failed to create contact in HubSpot." },
          { status: createResponse.status }
        );
      }

      const createData = await createResponse.json();
      contactId = createData.id;
    }

    return NextResponse.json({ success: true, contactId });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
