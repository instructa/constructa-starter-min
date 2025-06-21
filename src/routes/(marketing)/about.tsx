
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

export const Route = createFileRoute({
    component: RouteComponent
})

function RouteComponent() {
    return (
        <div className="relative min-h-screen bg-background">
            <main className="container mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="mb-16 text-center">
                    <h1 className="mb-6 font-medium text-4xl text-foreground md:text-5xl lg:text-6xl">
                        Master Your Macro Tracking
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                        Learn how to track your macronutrients perfectly and discover the healthy foods 
                        that will fuel your fitness journey and optimize your nutrition.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Perfect Macro Tracking Section */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="text-2xl">🎯 Perfect Macro Tracking</CardTitle>
                            <CardDescription>
                                Essential tips to track your macronutrients with precision
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="mb-3 font-semibold text-lg">1. Use a Digital Food Scale</h3>
                                <p className="text-muted-foreground text-sm">
                                    Weigh your food in grams for maximum accuracy. Even "1 medium apple" 
                                    can vary by 50+ calories. A food scale eliminates guesswork.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="mb-3 font-semibold text-lg">2. Track Before You Eat</h3>
                                <p className="text-muted-foreground text-sm">
                                    Pre-log your meals whenever possible. This helps you stay within your 
                                    targets and avoid overeating later in the day.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-lg">3. Focus on Whole Foods</h3>
                                <p className="text-muted-foreground text-sm">
                                    Single-ingredient foods are easier to track accurately. The more 
                                    processed a food, the more room for error in macro calculations.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-lg">4. Track Consistently</h3>
                                <p className="text-muted-foreground text-sm">
                                    Aim to track at least 6 days per week. Consistency matters more than 
                                    perfection. Even rough tracking is better than no tracking.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-lg">5. Account for Cooking Methods</h3>
                                <p className="text-muted-foreground text-sm">
                                    Raw vs cooked weights matter. Track meat raw, rice/pasta cooked. 
                                    Added oils and cooking fats count toward your daily fat intake.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Healthy Foods Section */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="text-2xl">🥗 Essential Healthy Foods</CardTitle>
                            <CardDescription>
                                Nutrient-dense foods to optimize your macro targets
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="mb-3 font-semibold text-lg text-blue-600">High-Quality Proteins</h3>
                                <ul className="space-y-1 text-muted-foreground text-sm">
                                    <li>• <strong>Lean meats:</strong> Chicken breast, turkey, lean beef</li>
                                    <li>• <strong>Fish:</strong> Salmon, tuna, cod, tilapia</li>
                                    <li>• <strong>Plant-based:</strong> Tofu, tempeh, legumes, quinoa</li>
                                    <li>• <strong>Dairy:</strong> Greek yogurt, cottage cheese, low-fat milk</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-lg text-green-600">Complex Carbohydrates</h3>
                                <ul className="space-y-1 text-muted-foreground text-sm">
                                    <li>• <strong>Whole grains:</strong> Oats, brown rice, quinoa, whole wheat</li>
                                    <li>• <strong>Starchy vegetables:</strong> Sweet potatoes, regular potatoes</li>
                                    <li>• <strong>Legumes:</strong> Beans, lentils, chickpeas</li>
                                    <li>• <strong>Fruits:</strong> Berries, apples, bananas, oranges</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-lg text-amber-600">Healthy Fats</h3>
                                <ul className="space-y-1 text-muted-foreground text-sm">
                                    <li>• <strong>Nuts & seeds:</strong> Almonds, walnuts, chia seeds, flax</li>
                                    <li>• <strong>Oils:</strong> Olive oil, avocado oil, coconut oil</li>
                                    <li>• <strong>Fatty fish:</strong> Salmon, mackerel, sardines</li>
                                    <li>• <strong>Avocados:</strong> Rich in monounsaturated fats</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Pro Tips Section */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">💡 Pro Tips for Success</CardTitle>
                        <CardDescription>
                            Advanced strategies to optimize your nutrition and reach your goals
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Meal Prep</h3>
                                <p className="text-muted-foreground text-sm">
                                    Prepare proteins and grains in bulk. Pre-portion snacks and track them 
                                    once, then copy the entry throughout the week.
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Hydration</h3>
                                <p className="text-muted-foreground text-sm">
                                    Aim for 0.5-1oz of water per pound of body weight daily. Proper hydration 
                                    supports metabolism and can reduce false hunger signals.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Timing Matters</h3>
                                <p className="text-muted-foreground text-sm">
                                    Eat protein within 2 hours post-workout. Spread protein throughout the day 
                                    for optimal muscle protein synthesis.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Fiber Focus</h3>
                                <p className="text-muted-foreground text-sm">
                                    Aim for 25-35g of fiber daily from vegetables, fruits, and whole grains. 
                                    Fiber promotes satiety and digestive health.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Flexible Approach</h3>
                                <p className="text-muted-foreground text-sm">
                                    Follow the 80/20 rule - eat nutrient-dense foods 80% of the time, 
                                    leaving 20% for treats and social occasions.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Progress Tracking</h3>
                                <p className="text-muted-foreground text-sm">
                                    Take progress photos, measurements, and note energy levels. The scale 
                                    doesn't tell the whole story of your health journey.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="mb-4 font-semibold text-2xl">Ready to Start Tracking?</h2>
                    <p className="mb-6 text-muted-foreground">
                        Use our macro calculator to determine your personalized daily targets
                    </p>
                    <a 
                        href="/" 
                        className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Calculate My Macros
                    </a>
                </div>
            </main>
        </div>
    )
}