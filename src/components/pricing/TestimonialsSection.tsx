import { Card, CardContent } from "~/components/ui/card"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        company: "TechStart Inc.",
        content: "This platform has transformed how we manage our projects. The intuitive interface and powerful features have boosted our productivity by 40%.",
        avatar: "SJ",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Digital Solutions",
        content: "The best investment we've made for our team. The collaboration features are outstanding and the support team is incredibly responsive.",
        avatar: "MC",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Creative Agency",
        content: "We've tried many tools, but this one stands out. The pricing is fair, features are robust, and it scales with our growing business.",
        avatar: "ER",
        rating: 5
    },
    {
        name: "David Kim",
        role: "CTO",
        company: "Innovation Labs",
        content: "The Enterprise plan has everything we need for our complex workflows. The API integration capabilities are exactly what we were looking for.",
        avatar: "DK",
        rating: 5
    },
    {
        name: "Lisa Thompson",
        role: "Operations Director",
        company: "Global Corp",
        content: "Switching to this platform was seamless. The migration support was excellent and we were up and running in no time.",
        avatar: "LT",
        rating: 5
    },
    {
        name: "James Wilson",
        role: "Freelancer",
        company: "Independent",
        content: "As a freelancer, the Starter plan gives me everything I need at an affordable price. Perfect for managing client projects.",
        avatar: "JW",
        rating: 5
    }
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-semibold text-3xl text-foreground md:text-4xl lg:text-5xl">
                        Loved by thousands of customers
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        See what our customers are saying about us
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="h-full">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-semibold text-sm text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-muted-foreground text-xs">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                
                                <StarRating rating={testimonial.rating} />
                                
                                <blockquote className="mt-4 text-muted-foreground text-sm leading-relaxed">
                                    "{testimonial.content}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}