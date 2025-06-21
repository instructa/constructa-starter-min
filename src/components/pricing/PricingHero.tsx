import GradientOrb from "~/components/gradient-orb"

export function PricingHero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />
            
            <div className="container relative z-0 mx-auto px-4 text-center">
                <h1 className="max-w-4xl mx-auto font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
                    Simple, transparent pricing
                </h1>
                
                <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
                    Choose the perfect plan for your needs. Scale up or down at any time.
                </p>
                
                <p className="mt-4 text-muted-foreground text-sm">
                    30-day money-back guarantee • No setup fees
                </p>
            </div>
        </section>
    )
}