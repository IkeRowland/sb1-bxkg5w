"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import Papa from "papaparse"
import { GradeInput } from "@/types/grades"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ValidationError {
  row: number
  errors: string[]
}

export function BulkImportForm() {
  const [previewData, setPreviewData] = useState<GradeInput[]>([])
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const validateRow = (row: any, index: number): ValidationError | null => {
    const errors: string[] = []

    if (!row.studentId) errors.push("Student ID is required")
    if (!row.subject) errors.push("Subject is required")
    if (!["test", "assignment", "exam", "project"].includes(row.type)) {
      errors.push("Invalid assessment type")
    }
    if (isNaN(row.score) || row.score < 0 || row.score > 100) {
      errors.push("Score must be between 0 and 100")
    }
    if (isNaN(row.totalPoints) || row.totalPoints <= 0) {
      errors.push("Total points must be greater than 0")
    }
    if (!row.date || !/^\d{4}-\d{2}-\d{2}$/.test(row.date)) {
      errors.push("Invalid date format (YYYY-MM-DD)")
    }

    return errors.length > 0 ? { row: index + 1, errors } : null
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setIsProcessing(true)
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const validationErrors: ValidationError[] = []
          const validData: GradeInput[] = []

          results.data.forEach((row: any, index: number) => {
            const error = validateRow(row, index)
            if (error) {
              validationErrors.push(error)
            } else {
              validData.push({
                studentId: row.studentId,
                subject: row.subject,
                type: row.type as GradeInput["type"],
                score: Number(row.score),
                totalPoints: Number(row.totalPoints),
                date: row.date,
                comments: row.comments,
              })
            }
          })

          setPreviewData(validData)
          setValidationErrors(validationErrors)
          setIsProcessing(false)

          if (validationErrors.length > 0) {
            toast.error(`Found ${validationErrors.length} validation errors`)
          } else {
            toast.success("File validated successfully")
          }
        },
        error: (error) => {
          toast.error("Error parsing CSV file")
          setIsProcessing(false)
        },
      })
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  })

  const handleSubmit = async () => {
    if (validationErrors.length > 0) {
      toast.error("Please fix validation errors before submitting")
      return
    }

    setIsProcessing(true)
    try {
      // TODO: Implement actual bulk grade submission
      console.log("Submitting grades:", previewData)
      toast.success(`Successfully imported ${previewData.length} grades`)
      setPreviewData([])
    } catch (error) {
      toast.error("Failed to import grades")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-border"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <div className="mt-4 text-sm text-muted-foreground">
          <p className="font-medium">
            {isDragActive ? "Drop the file here" : "Drag and drop your CSV file"}
          </p>
          <p>or click to select a file</p>
        </div>
      </div>

      {validationErrors.length > 0 && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Validation Errors</AlertTitle>
          <AlertDescription>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              {validationErrors.map((error, index) => (
                <div key={index} className="mb-2">
                  <p className="font-medium">Row {error.row}:</p>
                  <ul className="list-disc pl-6">
                    {error.errors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ScrollArea>
          </AlertDescription>
        </Alert>
      )}

      {previewData.length > 0 && (
        <>
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Preview</AlertTitle>
            <AlertDescription>
              Found {previewData.length} valid grade entries
            </AlertDescription>
          </Alert>

          <ScrollArea className="h-[400px] w-full rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Total Points</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previewData.map((grade, index) => (
                  <TableRow key={index}>
                    <TableCell>{grade.studentId}</TableCell>
                    <TableCell>{grade.subject}</TableCell>
                    <TableCell className="capitalize">{grade.type}</TableCell>
                    <TableCell>{grade.score}</TableCell>
                    <TableCell>{grade.totalPoints}</TableCell>
                    <TableCell>{grade.date}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {grade.comments}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>

          <Button
            onClick={handleSubmit}
            disabled={isProcessing || validationErrors.length > 0}
            className="w-full"
          >
            {isProcessing ? "Processing..." : "Import Grades"}
          </Button>
        </>
      )}
    </div>
  )
}