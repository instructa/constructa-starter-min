import { Button } from "~/components/ui/button"

export function ConvertingSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-semibold text-3xl text-foreground md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Everything you need to know about our pricing
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="border-b border-border pb-6">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                Can I change my plan at any time?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll be prorated for the difference.
                            </p>
                        </div>

                        <div className="border-b border-border pb-6">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                Is there a free trial available?
                            </h3>
                            <p className="text-muted-foreground">
                                We offer a 14-day free trial for the Professional plan. No credit card required to start your trial.
                            </p>
                        </div>

                        <div className="border-b border-border pb-6">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                What payment methods do you accept?
                            </h3>
                            <p className="text-muted-foreground">
                                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice.
                            </p>
                        </div>

                        <div className="border-b border-border pb-6">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                Do you offer discounts for annual payments?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes! Save 20% when you pay annually. The discount is automatically applied at checkout when you select annual billing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <h2 className="font-semibold text-3xl text-foreground md:text-4xl mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust our platform to power their projects. 
                        Start your free trial today and see the difference for yourself.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="px-8">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" size="lg" className="px-8">
                            Contact Sales
                        </Button>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-border/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center justify-center gap-2">
                                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                30-day money-back guarantee
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                No setup fees
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Cancel anytime
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-sm mb-6">
                        Trusted by 10,000+ customers worldwide
                    </p>
                    <div className="flex justify-center items-center space-x-8 opacity-60">
                        <div className="text-muted-foreground font-medium">Company A</div>
                        <div className="text-muted-foreground font-medium">Company B</div>
                        <div className="text-muted-foreground font-medium">Company C</div>
                        <div className="text-muted-foreground font-medium">Company D</div>
                    </div>
                </div>
            </div>
        </section>
    )
}