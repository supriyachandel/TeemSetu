import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/email";

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
    const { name, email, phone, source } = body;

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

    // Build HubSpot properties
    const properties: Record<string, string> = {
      firstname,
      lastname,
      phone: phone || "",
      hs_marketable_status: "true",
    };

    if (source) {
      properties["website_interaction_source"] = source.toLowerCase();
    }

    if (contactId) {
      // 2a. Update existing contact
      const updateUrl = getHubSpotUrl(`/crm/v3/objects/contacts/${contactId}`);
      let updateResponse = await fetch(updateUrl, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ properties }),
      });

      // Fallback: If custom properties or marketing status are rejected, retry with standard properties
      if (!updateResponse.ok) {
        const fallbackProps = { ...properties };
        delete fallbackProps["website_interaction_source"];
        delete fallbackProps["hs_marketable_status"];
        updateResponse = await fetch(updateUrl, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ properties: fallbackProps }),
        });
      }

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error("HubSpot update error:", errorData);
      }
    } else {
      // 2b. Create new contact
      const createUrl = getHubSpotUrl("/crm/v3/objects/contacts");
      // Add email to properties since it's a new contact
      const createProperties: Record<string, string> = { ...properties, email };
      let createResponse = await fetch(createUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ properties: createProperties }),
      });

      // Fallback: If custom properties or marketing status are rejected, retry with standard properties
      if (!createResponse.ok) {
        const fallbackProps = { ...createProperties };
        delete fallbackProps["website_interaction_source"];
        delete fallbackProps["hs_marketable_status"];
        createResponse = await fetch(createUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({ properties: fallbackProps }),
        });
      }

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

    // Trigger automated email sending directly from the website server via SMTP
    const emailSubject = "Thank you for visiting TeamSetu";
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #334155; line-height: 1.6;">
        <div style="margin-bottom: 24px; text-align: center;">
          <img src="https://statute-cosigner-library.ngrok-free.dev/logo.png" alt="TeamSetu" style="height: 40px; width: auto;" onerror="this.style.display='none';" />
        </div>
        <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">
          Hi ${firstname},
        </h2>
        <p style="font-size: 15px; margin-bottom: 16px; color: #475569;">
          Thank you for visiting our website. We appreciate your interest in <strong>TeamSetu</strong>.
        </p>
        <p style="font-size: 15px; margin-bottom: 16px; color: #475569;">
          Our platform helps organizations manage employees, attendance, leaves, payroll, projects, and daily workforce operations from one centralized, easy-to-use system.
        </p>
        <p style="font-size: 15px; margin-bottom: 24px; color: #475569;">
          If you have any questions or would like to schedule a personalized walkthrough, our team is always here to help. Feel free to explore our platform or reply directly to this message.
        </p>
        <div style="margin-bottom: 24px; text-align: center;">
          <a href="https://statute-cosigner-library.ngrok-free.dev" style="background-color: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);">
            Visit TeamSetu
          </a>
        </div>
        <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
        <p style="font-size: 14px; color: #64748b; margin: 0;">
          Regards,<br />
          <strong>TeamSetu Team</strong>
        </p>
      </div>
    `;

    // Dispatch background email send to contact (and developer BCC copy)
    sendEmail({
      to: email,
      subject: emailSubject,
      html: emailHtml,
    }).catch((err) => {
      console.error("Failed to trigger direct email send in background:", err);
    });

    return NextResponse.json({ success: true, contactId });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
