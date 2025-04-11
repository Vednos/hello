import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface RoleCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export function RoleCard({ icon: Icon, title, description, href }: RoleCardProps) {
  return (
    <Link href={href}>
      <div className="gradient-card flex h-full flex-col items-center rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Icon className="mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-primary-700">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
