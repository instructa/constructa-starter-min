import GradientOrb from "~/components/gradient-orb"

export const Route = createFileRoute({
    component: RouteComponent
})

function RouteComponent() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            {/* Hero Section */}
            <main className="container relative z-0 mx-auto flex flex-col items-center px-4 pt-20 text-center md:pt-32">
                <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />

                <h1 className="max-w-4xl font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
                    TanStack Start React boilerplate with Tailwind 4 & shadcn
                </h1>

                <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                    The perfect starting point for your next web application
                </p>

                <p className="mt-4 text-muted-foreground text-xs uppercase tracking-wider">
                    Under heavy development
                </p>
            </main>
        </div>
    )
}
