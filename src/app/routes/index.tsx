import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: Home
})

function Home() {
    return (
        <div className="space-y-6 p-8">
            <h1 className="font-bold text-3xl">Welcome Home!!!</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>
                            Your TanStack Start application is ready to go!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">
                            Start building your application with TanStack Router, React Query, and
                            more.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Shadcn/UI Components</CardTitle>
                        <CardDescription>
                            Beautiful UI components at your fingertips
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">
                            This card is built with the shadcn/ui card component you just added.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Next Steps</CardTitle>
                        <CardDescription>Ready to build something amazing?</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">
                            Add more routes, components, and features to your application.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
