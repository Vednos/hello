"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Search, User, Calendar, FileText, Settings, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientRow } from "@/components/dashboard/patient-row"
import { AppointmentCard } from "@/components/dashboard/appointment-card"
import { AlertCard } from "@/components/dashboard/alert-card"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar" // This is using the shadcn sidebar component [^1]

// Mock data
const patients = [
  {
    id: "p1",
    name: "Ayaan Khan",
    age: 31,
    gender: "Male",
    lastUpdate: "10:30 AM",
    alerts: {
      status: "critical" as const,
      message: "Heart Rate",
    },
  },
  {
    id: "p2",
    name: "Priya Sharma",
    age: 26,
    gender: "Female",
    lastUpdate: "09:00 AM",
    alerts: {
      status: "stable" as const,
    },
  },
  {
    id: "p3",
    name: "Rohan Gupta",
    age: 42,
    gender: "Male",
    lastUpdate: "Yesterday",
    alerts: {
      status: "warning" as const,
      message: "Blood Pressure",
    },
  },
  {
    id: "p4",
    name: "Meera Verma",
    age: 35,
    gender: "Female",
    lastUpdate: "Yesterday",
    alerts: {
      status: "stable" as const,
    },
  },
]

const appointments = [
  {
    id: "a1",
    patientName: "Rohan Gupta",
    preferredTime: "11 April, 5 PM",
    reason: "Fatigue & High HR",
  },
  {
    id: "a2",
    patientName: "Meera Verma",
    preferredTime: "12 April, 3 PM",
    reason: "Sleep issues",
  },
]

const alerts = [
  {
    id: "al1",
    name: "Ravi Singh",
    alert: {
      severity: "critical" as const,
      message: "SpO2 dropped below 90% last night",
    },
  },
  {
    id: "al2",
    name: "Anjali Kumari",
    alert: {
      severity: "warning" as const,
      message: "BP fluctuating for 3 days",
    },
  },
]

export default function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPatients, setFilteredPatients] = useState(patients)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredPatients(patients)
    } else {
      const filtered = patients.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase()))
      setFilteredPatients(filtered)
    }
  }

  const handleAcceptAppointment = (id: string) => {
    // In a real app, this would call an API
    console.log(`Accepted appointment ${id}`)
  }

  const handleRescheduleAppointment = (id: string, date: Date) => {
    // In a real app, this would call an API
    console.log(`Rescheduled appointment ${id} to ${date.toLocaleDateString()}`)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold">Dr. Sarah Johnson</h2>
                <p className="text-xs text-muted-foreground">Cardiologist</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <User className="h-4 w-4" />
                  <span>My Patients</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Calendar className="h-4 w-4" />
                  <span>Appointment Requests</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart className="h-4 w-4" />
                  <span>AI Health Insights</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText className="h-4 w-4" />
                  <span>Consultation Notes</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Profile Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <Button variant="outline" className="w-full">
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100">
          <header className="sticky top-0 z-10 border-b bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-primary-700">Doctor Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                    3
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Dr. Sarah</span>
                </div>
              </div>
            </div>
          </header>

          <main className="container mx-auto p-6">
            <Tabs defaultValue="patients">
              <TabsList className="mb-6">
                <TabsTrigger value="patients">My Patients</TabsTrigger>
                <TabsTrigger value="appointments">Appointment Requests</TabsTrigger>
                <TabsTrigger value="alerts">Critical Alerts</TabsTrigger>
              </TabsList>

              <TabsContent value="patients" className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search patients..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary-700">Add New Patient</Button>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-primary-700">Patient Overview</h2>
                  <p className="text-sm text-muted-foreground">
                    Here's a list of all your current patients. Click on a patient to view detailed health insights.
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredPatients.map((patient) => (
                    <PatientRow key={patient.id} patient={patient} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="appointments" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-primary-700">Appointment Requests</h2>
                  <p className="text-sm text-muted-foreground">
                    Here are patients who requested an appointment. Accept or Reschedule.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {appointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onAccept={handleAcceptAppointment}
                      onReschedule={handleRescheduleAppointment}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="alerts" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-primary-700">AI-Flagged Critical Alerts</h2>
                  <p className="text-sm text-muted-foreground">
                    These patients require attention based on AI-analyzed health data.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {alerts.map((alert) => (
                    <AlertCard key={alert.id} patient={alert} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
