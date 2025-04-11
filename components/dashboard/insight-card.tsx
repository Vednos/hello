import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface InsightCardProps {
  title: string
  description: string
  icon: LucideIcon
  severity: "low" | "medium" | "high"
}

export function InsightCard({ title, description, icon: Icon, severity }: InsightCardProps) {
  const severityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-amber-100 text-amber-700",
    high: "bg-red-100 text-red-700",
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className={`h-2 ${severity === "low" ? "bg-green-500" : severity === "medium" ? "bg-amber-500" : "bg-red-500"}`}
      />
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className={`rounded-full p-2 ${severityColors[severity]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>AI detected this pattern based on your recent health data.</p>
      </CardContent>
    </Card>
  )
}
