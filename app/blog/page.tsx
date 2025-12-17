"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { blogPosts } from "@/lib/data"
import { Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react"

export default function BlogPage() {
    const { t } = useLanguage()

    // Get featured post (most recent)
    const featuredPost = blogPosts[blogPosts.length - 1]
    const regularPosts = blogPosts.slice(0, -1)

    // Get unique categories
    const categories = [...new Set(blogPosts.map(post => post.category))]

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.blog.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.blog.subtitle}
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        All Posts
                    </Badge>
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant="outline"
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                {/* Featured Post */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl font-bold">Featured Article</h2>
                    </div>
                    <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 text-lg">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{featuredPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(featuredPost.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                </div>
                                <Button className="w-fit group/btn">
                                    Read Full Article
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* All Posts Grid */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                        <Card key={post.id} className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="backdrop-blur-sm">
                                        {post.category}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <User className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">{post.author}</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="group/btn">
                                        {t.blog.readMore}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated with Dental Tips</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest dental health tips, news, and special offers delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button className="rounded-full px-8">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
