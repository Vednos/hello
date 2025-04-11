import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Healthify Logo"
          width={40}
          height={40}
          className="text-primary"
        />
      </div>
      <span className="text-2xl font-bold text-primary">PulseLink AI</span>
    </Link>
  )
}
