import { Stethoscope, Bed } from "lucide-react"
import { Logo } from "@/components/logo"
import { RoleCard } from "@/components/role-card"

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <Logo className="mx-auto mb-8" />
          <h1 className="mb-4 text-4xl font-bold text-primary-700 md:text-5xl">Who are you today?</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Choose your role to continue — whether you're a patient looking for answers, or a doctor ready to make a
            difference.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          <RoleCard
            icon={Stethoscope}
            title="I am a doctor"
            description="Access your patient dashboard and consultation"
            href="/auth/doctor"
          />
          <RoleCard
            icon={Bed}
            title="I am a patient"
            description="View your health data and connect with doctors"
            href="/auth/patient"
          />
        </div>
      </div>
    </div>
  )
}
