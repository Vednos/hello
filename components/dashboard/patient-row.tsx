"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertTriangle, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface PatientRowProps {
  patient: {
    id: string
    name: string
    age: number
    gender: string
    lastUpdate: string
    alerts: {
      status: "critical" | "warning" | "stable"
      message?: string
    }
  }
}

export function PatientRow({ patient }: PatientRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-2 overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            {patient.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium">{patient.name}</h3>
            <p className="text-xs text-muted-foreground">
              {patient.age} years • {patient.gender}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">Updated {patient.lastUpdate}</div>

          {patient.alerts.status !== "stable" && (
            <Badge
              variant={patient.alerts.status === "critical" ? "destructive" : "outline"}
              className={
                patient.alerts.status === "critical"
                  ? "bg-red-100 text-red-700 hover:bg-red-100"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-100"
              }
            >
              <AlertTriangle className="mr-1 h-3 w-3" />
              {patient.alerts.message || (patient.alerts.status === "critical" ? "Critical" : "Warning")}
            </Badge>
          )}

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View full profile</DropdownMenuItem>
                <DropdownMenuItem>Contact patient</DropdownMenuItem>
                <DropdownMenuItem>Schedule appointment</DropdownMenuItem>
                <DropdownMenuItem>Add notes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={`/dashboard/doctor/patient/${patient.id}`}>
              <Button size="sm" className="bg-primary hover:bg-primary-700">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t bg-gray-50 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium">Recent Vitals</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Heart Rate:</span>
                  <span>78 bpm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Blood Pressure:</span>
                  <span>120/78 mmHg</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">SpO2:</span>
                  <span>97%</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium">AI Insights</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {patient.alerts.status === "critical"
                  ? "Critical patterns detected in sleep and heart rate variability."
                  : patient.alerts.status === "warning"
                    ? "Minor anomalies detected in activity patterns."
                    : "All metrics within normal ranges."}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium">Last Consultation</h4>
              <p className="mt-2 text-sm text-muted-foreground">March 15, 2025 - Follow-up on medication adjustment</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
