export const Route = createFileRoute({
    component: DocsPage
})

function DocsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 font-bold text-4xl">Documentation</h1>
            <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4 text-lg text-muted-foreground">
                    Welcome to the documentation for the TanStack Starter project.
                </p>

                <h2 className="mt-8 mb-4 font-semibold text-2xl">Getting Started</h2>
                <p>
                    This starter template provides a modern foundation for building web applications
                    with TanStack Router, React Query, and other powerful tools.
                </p>

                <h2 className="mt-8 mb-4 font-semibold text-2xl">Features</h2>
                <ul className="list-inside list-disc space-y-2">
                    <li>Type-safe routing with TanStack Router</li>
                    <li>Server-side rendering (SSR) support</li>
                    <li>Dark mode with theme persistence</li>
                    <li>Tailwind CSS for styling</li>
                    <li>TypeScript for type safety</li>
                </ul>

                <h2 className="mt-8 mb-4 font-semibold text-2xl">Project Structure</h2>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                    {`src/
├── components/     # Reusable UI components
├── routes/         # Route definitions
├── styles/         # Global styles
├── lib/           # Utility functions
└── utils/         # Helper utilities`}
                </pre>
            </div>
        </div>
    )
}
