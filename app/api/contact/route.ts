import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("Discord webhook URL not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Format the message for Discord
    const discordMessage = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0x6366f1, // Indigo color
          fields: [
            {
              name: "Name",
              value: name,
            },
            {
              name: "Email",
              value: email,
            },
            {
              name: "Message",
              value: message,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "mdesk.tech Contact Form",
          },
        },
      ],
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending message to Discord:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

