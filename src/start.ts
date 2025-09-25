import { createStart } from "@tanstack/react-start"
import { logMiddleware } from "./utils/loggingMiddleware"

const enableLoggingMiddleware = false

export const startInstance = createStart(async () => ({
    functionMiddleware: enableLoggingMiddleware ? [logMiddleware] : []
}))
