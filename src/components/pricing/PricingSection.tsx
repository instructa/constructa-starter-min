import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"

const pricingTiers = [
    {
        name: "Starter",
        price: "$9",
        period: "per month",
        description: "Perfect for individuals and small projects",
        features: [
            "Up to 3 projects",
            "5GB storage",
            "Basic support",
            "Standard templates",
            "Mobile app access"
        ],
        popular: false,
        buttonText: "Get Started",
        buttonVariant: "outline" as const
    },
    {
        name: "Professional",
        price: "$29",
        period: "per month",
        description: "Ideal for growing teams and businesses",
        features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Premium templates",
            "Advanced analytics",
            "Team collaboration",
            "API access"
        ],
        popular: true,
        buttonText: "Start Free Trial",
        buttonVariant: "default" as const
    },
    {
        name: "Enterprise",
        price: "$99",
        period: "per month",
        description: "For large organizations with advanced needs",
        features: [
            "Everything in Professional",
            "Unlimited storage",
            "24/7 dedicated support",
            "Custom integrations",
            "Advanced security",
            "White-label options",
            "Custom contracts"
        ],
        popular: false,
        buttonText: "Contact Sales",
        buttonVariant: "outline" as const
    }
]

export function PricingSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-semibold text-3xl text-foreground md:text-4xl lg:text-5xl">
                        Choose your plan
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        All plans include our core features. Upgrade anytime.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <Card 
                            key={tier.name} 
                            className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                <CardDescription className="text-sm">
                                    {tier.description}
                                </CardDescription>
                                <div className="mt-4">
                                    <span className="font-bold text-4xl text-foreground">
                                        {tier.price}
                                    </span>
                                    <span className="text-muted-foreground ml-1">
                                        {tier.period}
                                    </span>
                                </div>
                            </CardHeader>
                            
                            <CardContent>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm">
                                            <svg 
                                                className="h-4 w-4 text-primary mr-3 flex-shrink-0" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M5 13l4 4L19 7" 
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            
                            <CardFooter>
                                <Button 
                                    variant={tier.buttonVariant}
                                    className="w-full"
                                    size="lg"
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}