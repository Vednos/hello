"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

interface AppointmentCardProps {
  appointment: {
    id: string
    patientName: string
    preferredTime: string
    reason: string
  }
  onAccept: (id: string) => void
  onReschedule: (id: string, date: Date) => void
}

export function AppointmentCard({ appointment, onAccept, onReschedule }: AppointmentCardProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const handleReschedule = () => {
    if (date) {
      onReschedule(appointment.id, date)
      setIsOpen(false)
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{appointment.patientName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Preferred Time:</span>
            <span className="text-sm font-medium">{appointment.preferredTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Reason:</span>
            <span className="text-sm font-medium">{appointment.reason}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            className="flex-1 bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAccept(appointment.id)}
          >
            Accept
          </Button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1">
                Reschedule
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reschedule Appointment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex justify-center">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleReschedule}>Confirm</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
