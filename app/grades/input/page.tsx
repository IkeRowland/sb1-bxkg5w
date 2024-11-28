"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { GradeInputForm } from "@/components/grades/grade-input-form"
import { BulkImportForm } from "@/components/grades/bulk-import-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/sonner"

export default function GradeInputPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Input Grades"
        text="Add new grades and assessments for students."
      />
      <div className="grid gap-6">
        <Tabs defaultValue="single" className="space-y-4">
          <TabsList>
            <TabsTrigger value="single">Single Entry</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Import</TabsTrigger>
          </TabsList>
          <TabsContent value="single">
            <Card>
              <CardHeader>
                <CardTitle>New Grade Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <GradeInputForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bulk">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Grade Import</CardTitle>
              </CardHeader>
              <CardContent>
                <BulkImportForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </DashboardShell>
  )
}