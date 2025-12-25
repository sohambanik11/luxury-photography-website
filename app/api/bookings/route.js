import { NextResponse } from "next/server"

// Mock API endpoint for bookings
export async function POST(request) {
  try {
    const body = await request.json()

    console.log("[v0] Booking received:", body)

    // In a real implementation, this would:
    // 1. Validate the booking data
    // 2. Insert into PostgreSQL database
    // 3. Send confirmation email
    // 4. Create calendar event

    // Mock successful response
    return NextResponse.json(
      {
        success: true,
        booking: {
          booking_id: body.booking_id,
          name: body.name,
          email: body.email,
          phone: body.phone,
          event_type: body.eventType,
          preferred_date: body.date,
          message: body.message,
          status: "pending",
          created_at: body.created_at,
        },
        message: "Booking request received successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return NextResponse.json({ success: false, error: "Failed to process booking" }, { status: 500 })
  }
}

// Get all bookings (for admin panel)
export async function GET() {
  try {
    // Mock bookings data
    const mockBookings = [
      {
        booking_id: "BK-1735134000000",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        phone: "+1 (555) 123-4567",
        event_type: "wedding",
        preferred_date: "2025-02-14",
        message: "Looking for a full day wedding coverage",
        status: "pending",
        created_at: "2025-01-15T10:00:00.000Z",
      },
      {
        booking_id: "BK-1735047600000",
        name: "Michael Chen",
        email: "michael@example.com",
        phone: "+1 (555) 987-6543",
        event_type: "portrait",
        preferred_date: "2025-02-01",
        message: "Executive portrait for LinkedIn",
        status: "confirmed",
        created_at: "2025-01-14T14:30:00.000Z",
      },
    ]

    return NextResponse.json({ success: true, bookings: mockBookings }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get bookings error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch bookings" }, { status: 500 })
  }
}
