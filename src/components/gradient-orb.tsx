import type { HTMLAttributes } from "react"
import { cn } from "~/lib/utils"

interface GradientOrbProps extends HTMLAttributes<HTMLDivElement> {}

export default function GradientOrb({ className, ...props }: GradientOrbProps) {
    return (
        <div
            className={cn(
                "pointer-events-none z-0 h-64 w-64 rounded-full bg-gradient-to-b from-pink-200 via-purple-200 to-amber-200 opacity-70 blur-3xl dark:from-pink-900/70 dark:via-purple-900/70 dark:to-amber-900/70",
                className
            )}
            {...props}
        />
    )
}
