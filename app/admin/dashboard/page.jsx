"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ImageIcon, Users, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([])
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    confirmedBookings: 0,
    totalRevenue: 0,
  })

  useEffect(() => {
    // Fetch bookings
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.bookings)
          setStats({
            totalBookings: data.bookings.length,
            pendingBookings: data.bookings.filter((b) => b.status === "pending").length,
            confirmedBookings: data.bookings.filter((b) => b.status === "confirmed").length,
            totalRevenue: 45000, // Mock value
          })
        }
      })
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-serif text-4xl text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage bookings, albums, and settings</p>
          </div>
          <Button asChild variant="outline" className="border-border bg-transparent">
            <Link href="/">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Link>
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif text-primary">{stats.totalBookings}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif text-primary">{stats.pendingBookings}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif text-primary">{stats.confirmedBookings}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Revenue (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif text-primary">${stats.totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="bookings">
                <Calendar className="h-4 w-4 mr-2" />
                Bookings
              </TabsTrigger>
              <TabsTrigger value="albums">
                <ImageIcon className="h-4 w-4 mr-2" />
                Albums
              </TabsTrigger>
              <TabsTrigger value="clients">
                <Users className="h-4 w-4 mr-2" />
                Clients
              </TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Manage and track all booking requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking.booking_id}
                        className="flex items-center justify-between p-4 bg-background border border-border rounded-sm"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{booking.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {booking.event_type.charAt(0).toUpperCase() + booking.event_type.slice(1)} •{" "}
                            {new Date(booking.preferred_date).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{booking.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 text-xs rounded-full ${
                              booking.status === "confirmed"
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "bg-muted text-muted-foreground border border-border"
                            }`}
                          >
                            {booking.status}
                          </span>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Albums Tab */}
            <TabsContent value="albums">
              <Card>
                <CardHeader>
                  <CardTitle>Album Manager</CardTitle>
                  <CardDescription>Organize and manage photo albums</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Album management coming soon</p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Create Album</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clients Tab */}
            <TabsContent value="clients">
              <Card>
                <CardHeader>
                  <CardTitle>Client Directory</CardTitle>
                  <CardDescription>View and manage client information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Client directory coming soon</p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Add Client</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
