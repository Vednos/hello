import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="gradient-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-pulse-slow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-3">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-primary-700">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
