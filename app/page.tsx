import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Student Performance Portal
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Empowering South African high schools with comprehensive student performance tracking and analytics.
            </p>
            <div className="space-x-4">
              <Link href="/auth/login">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                  <BookOpen className="w-4 h-4 mb-1 inline-block mr-2" />
                  Academic Tracking
                </CardTitle>
                <CardDescription>
                  Comprehensive grade and assessment management
                </CardDescription>
              </CardHeader>
              <CardContent>
                Monitor student progress across all subjects with detailed performance metrics.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                  <TrendingUp className="w-4 h-4 mb-1 inline-block mr-2" />
                  Analytics
                </CardTitle>
                <CardDescription>
                  Data-driven insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                Advanced analytics and predictive modeling for student performance.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                  <Users className="w-4 h-4 mb-1 inline-block mr-2" />
                  Multi-User Access
                </CardTitle>
                <CardDescription>
                  Role-based system access
                </CardDescription>
              </CardHeader>
              <CardContent>
                Secure access for administrators, teachers, students, and parents.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                  <Calendar className="w-4 h-4 mb-1 inline-block mr-2" />
                  Real-time Updates
                </CardTitle>
                <CardDescription>
                  Stay informed
                </CardDescription>
              </CardHeader>
              <CardContent>
                Instant updates on grades, attendance, and important notifications.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}