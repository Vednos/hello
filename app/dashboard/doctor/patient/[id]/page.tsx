"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Activity, Droplet, Brain, MessageCircle, Edit, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { HealthChart } from "@/components/dashboard/health-chart"
import { InsightCard } from "@/components/dashboard/insight-card"

// Mock data
const heartRateData = [
  { name: "Mon", value: 72 },
  { name: "Tue", value: 75 },
  { name: "Wed", value: 78 },
  { name: "Thu", value: 74 },
  { name: "Fri", value: 76 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 72 },
]

const bloodPressureData = [
  { name: "Mon", systolic: 120, diastolic: 78 },
  { name: "Tue", systolic: 122, diastolic: 80 },
  { name: "Wed", systolic: 125, diastolic: 82 },
  { name: "Thu", systolic: 118, diastolic: 76 },
  { name: "Fri", systolic: 121, diastolic: 79 },
  { name: "Sat", systolic: 119, diastolic: 77 },
  { name: "Sun", systolic: 120, diastolic: 78 },
]

const sleepData = [
  { name: "Mon", value: 7.2 },
  { name: "Tue", value: 6.8 },
  { name: "Wed", value: 7.5 },
  { name: "Thu", value: 8.1 },
  { name: "Fri", value: 6.5 },
  { name: "Sat", value: 7.8 },
  { name: "Sun", value: 7.4 },
]

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const [notes, setNotes] = useState(
    "Patient has been showing improved vitals since the medication adjustment. Sleep patterns still need monitoring. Follow up in 2 weeks.",
  )
  const [isEditing, setIsEditing] = useState(false)

  // In a real app, you would fetch patient data based on the ID
  const patientName = "Ayaan Khan"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/dashboard/doctor" className="mb-4 flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary-700">{patientName}</h1>
              <p className="text-muted-foreground">Patient ID: {params.id}</p>
            </div>
            <Button className="bg-primary hover:bg-primary-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Patient
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Age:</div>
                <div>31 years</div>
                <div className="text-muted-foreground">Gender:</div>
                <div>Male</div>
                <div className="text-muted-foreground">Height:</div>
                <div>175 cm</div>
                <div className="text-muted-foreground">Weight:</div>
                <div>72 kg</div>
                <div className="text-muted-foreground">BMI:</div>
                <div>23.5</div>
                <div className="text-muted-foreground">Blood Type:</div>
                <div>O+</div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Medical History</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>No diabetes</li>
                  <li>No hypertension</li>
                  <li>No asthma</li>
                  <li>No heart conditions</li>
                </ul>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-medium">Doctor's Notes</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                  </Button>
                </div>
                {isEditing ? (
                  <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[100px]" />
                ) : (
                  <p className="text-sm text-muted-foreground">{notes}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:col-span-2">
            <Tabs defaultValue="vitals">
              <TabsList>
                <TabsTrigger value="vitals">Vitals & Trends</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
                <TabsTrigger value="history">Visit History</TabsTrigger>
              </TabsList>

              <TabsContent value="vitals" className="space-y-6 pt-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <HealthChart
                    title="Heart Rate"
                    description="Weekly trend of heart rate"
                    data={heartRateData}
                    dataKey="value"
                    color="#0a5f9e"
                    unit="bpm"
                  />
                  <HealthChart
                    title="Sleep Duration"
                    description="Weekly trend of sleep duration"
                    data={sleepData}
                    dataKey="value"
                    color="#3c92d1"
                    unit="hours"
                  />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Vitals</CardTitle>
                    <CardDescription>Last updated 2 hours ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-center">
                        <Heart className="mx-auto mb-1 h-5 w-5 text-primary" />
                        <div className="text-lg font-bold">78 bpm</div>
                        <div className="text-xs text-muted-foreground">Heart Rate</div>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-3 text-center">
                        <Activity className="mx-auto mb-1 h-5 w-5 text-primary" />
                        <div className="text-lg font-bold">120/78</div>
                        <div className="text-xs text-muted-foreground">Blood Pressure</div>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-3 text-center">
                        <Droplet className="mx-auto mb-1 h-5 w-5 text-primary" />
                        <div className="text-lg font-bold">97%</div>
                        <div className="text-xs text-muted-foreground">SpO2</div>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-3 text-center">
                        <Brain className="mx-auto mb-1 h-5 w-5 text-primary" />
                        <div className="text-lg font-bold">36.8°C</div>
                        <div className="text-xs text-muted-foreground">Temperature</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insights" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Health Summary</CardTitle>
                    <CardDescription>Based on wearable data from the last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Patient's heart rate shows elevated patterns during evening hours (8-10 PM), consistently 15-20%
                        above baseline. This correlates with reported stress from work deadlines.
                      </p>
                      <p>
                        Sleep quality has declined by 30% over the past week, with frequent awakenings between 2-4 AM.
                        This pattern often precedes periods of fatigue reported by the patient.
                      </p>
                      <p>
                        Blood pressure readings remain within normal range but show increased variability compared to
                        last month's data. Recommend continued monitoring and possible lifestyle modifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <InsightCard
                    title="Sleep Pattern Change"
                    description="Sleep quality drops on weekdays"
                    icon={Brain}
                    severity="medium"
                  />
                  <InsightCard
                    title="Heart Rate Variability"
                    description="Reduced HRV detected during work hours"
                    icon={Heart}
                    severity="high"
                  />
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Visit History</CardTitle>
                    <CardDescription>Recent consultations and follow-ups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium">March 15, 2025</h3>
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">Follow-up</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Follow-up on medication adjustment. Patient reported improved sleep and reduced fatigue. Blood
                          pressure readings stable.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium">February 28, 2025</h3>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                            Regular Check
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Regular check-up. Adjusted medication dosage. Recommended stress management techniques and
                          sleep hygiene practices.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium">January 10, 2025</h3>
                          <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-700">Emergency</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Patient reported chest discomfort and elevated heart rate. ECG normal. Diagnosed with
                          anxiety-related symptoms. Prescribed short-term medication.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button className="bg-primary hover:bg-primary-700">Schedule Follow-up Appointment</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
