import { Heart, Activity, Droplet, Moon, Utensils, Brain, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthChart } from "@/components/dashboard/health-chart"
import { InsightCard } from "@/components/dashboard/insight-card"
import { StatCard } from "@/components/dashboard/stat-card"

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

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-700">Your Health Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your health metrics and AI-powered insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <StatCard
            title="Heart Rate"
            value="78 bpm"
            description="Average over last 24 hours"
            icon={Heart}
            trend="up"
            trendValue="3% from yesterday"
          />
          <StatCard
            title="Blood Pressure"
            value="120/78"
            description="Last reading at 8:30 AM"
            icon={Activity}
            trend="neutral"
            trendValue="Stable"
          />
          <StatCard
            title="Hydration"
            value="70%"
            description="Based on your activity level"
            icon={Droplet}
            trend="down"
            trendValue="5% from optimal"
          />
          <StatCard
            title="Sleep Quality"
            value="80%"
            description="7.2 hours last night"
            icon={Moon}
            trend="up"
            trendValue="10% from last week"
          />
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <HealthChart
                  title="Heart Rate"
                  description="Weekly trend of your heart rate"
                  data={heartRateData}
                  dataKey="value"
                  color="#0a5f9e"
                  unit="bpm"
                />
                <HealthChart
                  title="Sleep Duration"
                  description="Weekly trend of your sleep duration"
                  data={sleepData}
                  dataKey="value"
                  color="#3c92d1"
                  unit="hours"
                />
              </div>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Health Summary</CardTitle>
                  <CardDescription>AI-generated summary of your health status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your overall health metrics are within normal ranges. Your sleep quality is excellent, with an
                      average of 7.2 hours per night. Your heart rate shows a slight increase mid-week, possibly
                      correlated with your increased physical activity on Wednesday.
                    </p>
                    <p>
                      Your hydration levels could be improved, especially during afternoon hours. Consider setting
                      reminders to drink water throughout the day.
                    </p>
                    <p>
                      Your stress levels appear to peak in the evenings. The AI suggests trying meditation or deep
                      breathing exercises before bedtime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="insights" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <InsightCard
                  title="Sleep Pattern Change"
                  description="Your sleep quality drops on weekdays"
                  icon={Moon}
                  severity="medium"
                />
                <InsightCard
                  title="Stress Correlation"
                  description="Stress levels increase with reduced hydration"
                  icon={Brain}
                  severity="medium"
                />
                <InsightCard
                  title="Nutrition Impact"
                  description="Higher protein intake correlates with better recovery"
                  icon={Utensils}
                  severity="low"
                />
                <InsightCard
                  title="Heart Rate Variability"
                  description="Reduced HRV detected during work hours"
                  icon={Heart}
                  severity="high"
                />
              </div>
            </TabsContent>
            <TabsContent value="recommendations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                  <CardDescription>Based on your health data and AI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <Activity className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Increase physical activity</p>
                        <p className="text-sm text-muted-foreground">
                          Try to add 20 minutes of moderate exercise 3 times this week.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-100 p-1">
                        <Droplet className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Improve hydration</p>
                        <p className="text-sm text-muted-foreground">
                          Aim for 2.5 liters of water daily, especially between 2-4 PM.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <Brain className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Stress management</p>
                        <p className="text-sm text-muted-foreground">
                          Try the 4-7-8 breathing technique before bed to improve sleep quality.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with your doctor
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
