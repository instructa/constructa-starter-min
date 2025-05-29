import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { Toaster } from "sonner"

export function Providers({ children }: { children: ReactNode }) {
    return (
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                themeColor={{
                    light: "oklch(1 0 0)",
                    dark: "oklch(0.145 0 0)"
                }}
            >
                {children}
            <Toaster />
            </ThemeProvider>
    )
}