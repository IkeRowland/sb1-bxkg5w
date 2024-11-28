"use client"

interface TooltipContentProps {
  active: boolean
  payload?: Array<any>
}

export function TooltipContent({ active, payload }: TooltipContentProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          {payload.map((entry) => (
            <div key={entry.name} className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {entry.name}
              </span>
              <span className="font-bold text-muted-foreground">
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}