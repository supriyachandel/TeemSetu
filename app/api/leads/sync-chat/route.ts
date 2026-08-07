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
    const { contactId, noteId, transcript } = body;

    if (!contactId || !transcript) {
      return NextResponse.json(
        { error: "ContactId and transcript are required." },
        { status: 400 }
      );
    }

    const headers = getHubSpotAuthHeaders();
    let finalNoteId = noteId || "";

    if (finalNoteId) {
      // Update existing note
      const updateUrl = getHubSpotUrl(`/crm/v3/objects/notes/${finalNoteId}`);
      const updateResponse = await fetch(updateUrl, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          properties: {
            hs_note_body: transcript,
          },
        }),
      });

      if (!updateResponse.ok) {
        console.warn(`Failed to update note ${finalNoteId}. Will attempt to create a new one.`);
        finalNoteId = "";
      }
    }

    if (!finalNoteId) {
      // Create new note with association to the contact (associationTypeId = 202)
      const createUrl = getHubSpotUrl("/crm/v3/objects/notes");
      const createResponse = await fetch(createUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          properties: {
            hs_note_body: transcript,
            hs_timestamp: new Date().toISOString(),
          },
          associations: [
            {
              to: {
                id: contactId,
              },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 202, // Note to Contact
                },
              ],
            },
          ],
        }),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        return NextResponse.json(
          { error: errorData.message || "Failed to create note in HubSpot." },
          { status: createResponse.status }
        );
      }

      const createData = await createResponse.json();
      finalNoteId = createData.id;
    }

    return NextResponse.json({ success: true, noteId: finalNoteId });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
