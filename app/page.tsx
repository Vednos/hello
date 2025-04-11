import Link from "next/link"
import { Activity, Heart, Stethoscope, ArrowRight, Facebook, Instagram, Youtube, MessageSquare } from "lucide-react"
import { Logo } from "@/components/logo"
import { FeatureCard } from "@/components/feature-card"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column */}
          <div className="blue-gradient-bg rounded-3xl p-8 lg:w-1/3">
            <Logo className="mb-6" />
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-primary-700">
                Start your wellbeing journey today. Let AI help decode your body's signals, and connect you to the care
                you deserve
              </h2>
              <Link href="/role-selection">
                <Button className="group mt-4 bg-primary hover:bg-primary-700">
                  Start your journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="rounded-full bg-primary p-2 text-white hover:bg-primary-700">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-primary p-2 text-white hover:bg-primary-700">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-primary p-2 text-white hover:bg-primary-700">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-primary p-2 text-white hover:bg-primary-700">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0 lg:w-2/3">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary-700 md:text-5xl">
                Connecting health, data, and care — powered by AI.
              </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={Stethoscope}
                title="Doctor Connection"
                description="Seamlessly connect with healthcare professionals based on your health data."
              />
              <FeatureCard
                icon={Heart}
                title="Personalized Care"
                description="Receive tailored health recommendations and track your progress over time."
              />
              <FeatureCard
                icon={Activity}
                title="Smart Health Monitoring"
                description="Connect your wearables and get AI-powered insights about your health patterns."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
