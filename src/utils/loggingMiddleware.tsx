import { createMiddleware } from "@tanstack/react-start"

const preLogMiddleware = createMiddleware()
    .client(async (ctx) => {
        const clientTime = new Date()

        return ctx.next({
            context: {
                clientTime
            },
            sendContext: {
                clientTime
            }
        })
    })
    .server(async (ctx) => {
        const serverTime = new Date()
        const clientTime = ctx.sendContext?.clientTime ?? ctx.context?.clientTime

        return ctx.next({
            context: {
                serverTime
            },
            sendContext: {
                serverTime,
                durationToServer:
                    clientTime instanceof Date ? serverTime.getTime() - clientTime.getTime() : undefined
            }
        })
    })

export const logMiddleware = createMiddleware()
    .middleware([preLogMiddleware])
    .client(async (ctx) => {
        const res = await ctx.next()

        const responseContext =
            (res as unknown as { responseContext?: Record<string, unknown> }).responseContext ?? res.context ?? {}
        const clientTime =
            ctx.context?.clientTime ??
            res.sendContext?.clientTime ??
            (responseContext.clientTime instanceof Date ? responseContext.clientTime : undefined)
        const serverTime =
            res.sendContext?.serverTime ??
            (responseContext.serverTime instanceof Date ? responseContext.serverTime : undefined)
        const durationToServer =
            res.sendContext?.durationToServer ??
            (typeof responseContext.durationToServer === "number" ? responseContext.durationToServer : undefined)

        if (clientTime instanceof Date && serverTime instanceof Date) {
            const now = new Date()
            // eslint-disable-next-line no-console
            console.log("Client Req/Res:", {
                duration: now.getTime() - clientTime.getTime(),
                durationToServer,
                durationFromServer: now.getTime() - serverTime.getTime()
            })
        }

        return res
    })
