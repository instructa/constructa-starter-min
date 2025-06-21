
import { PricingSection } from "~/components/pricing/PricingSection"
import { TestimonialsSection } from "~/components/pricing/TestimonialsSection"
import { ConvertingSection } from "~/components/pricing/ConvertingSection"
import { PricingHero } from "~/components/pricing/PricingHero"

export const Route = createFileRoute({
    component: PricingComponent
})

function PricingComponent() {
    return (
        <div className="relative min-h-screen bg-background">
            <PricingHero />
            <PricingSection />
            <TestimonialsSection />
            <ConvertingSection />
        </div>
    )
}