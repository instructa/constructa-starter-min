import { logMiddleware } from "@/utils/loggingMiddleware"
import { registerGlobalMiddleware } from "@tanstack/react-start"

registerGlobalMiddleware({
    middleware: [logMiddleware]
})
