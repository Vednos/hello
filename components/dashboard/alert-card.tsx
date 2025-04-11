import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Stethoscope, Calendar } from "lucide-react"

interface AlertCardProps {
  patient: {
    id: string
    name: string
    alert: {
      severity: "critical" | "warning"
      message: string
    }
  }
}

export function AlertCard({ patient }: AlertCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
        patient.alert.severity === "critical" ? "border-red-300" : "border-amber-300"
      }`}
    >
      <div className={`h-2 ${patient.alert.severity === "critical" ? "bg-red-500" : "bg-amber-500"}`} />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{patient.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{patient.alert.message}</p>

        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Stethoscope className="mr-2 h-4 w-4" />
            Recommend Test
          </Button>
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary-700">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Visit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
