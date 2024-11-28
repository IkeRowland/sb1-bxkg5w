"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold">Student Portal</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/grades"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/grades" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Grades
            </Link>
            <Link
              href="/grades/input"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/grades/input" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Input Grades
            </Link>
            <Link
              href="/grades/history"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/grades/history" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Grade History
            </Link>
            <Link
              href="/analytics"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/analytics" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Analytics
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}