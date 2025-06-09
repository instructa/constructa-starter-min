import { useEffect, useState } from "react"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const next = theme === "light" ? "dark" : "light"

    useEffect(() => {
        setMounted(true)
    }, [])

    // During SSR and initial client render, show a placeholder to avoid hydration mismatch
    if (!mounted) {
        return (
            <button type="button" disabled>
                <span className="opacity-0">🌙</span>
            </button>
        )
    }

    return (
        <button type="button" onClick={() => setTheme(next)}>
            {theme === "light" ? "☀️" : "🌙"}
        </button>
    )
}
