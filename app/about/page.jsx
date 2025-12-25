"use client"

import { motion } from "framer-motion"
import { Award, Camera, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "Journey Begins", description: "Started as a passionate photography enthusiast" },
    { year: "2015", title: "First Studio", description: "Opened professional photography studio" },
    { year: "2018", title: "100 Weddings", description: "Milestone of 100 weddings captured" },
    { year: "2020", title: "Awards Recognition", description: "Received multiple industry awards" },
    { year: "2025", title: "Today", description: "Leading luxury photography studio with 500+ events" },
  ]

  const stats = [
    { icon: Camera, value: "500+", label: "Events Captured" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Heart, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "12+", label: "Industry Awards" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">About Luxe</h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a luxury photography studio specializing in capturing life's most precious moments with artistry,
                elegance, and timeless sophistication.
              </p>
              <p>
                With over a decade of experience and hundreds of successful projects, we've perfected the art of
                storytelling through imagery. Our approach combines technical excellence with genuine human connection.
              </p>
              <p>
                Every photograph we create is crafted with meticulous attention to detail, ensuring that your memories
                are preserved in their most beautiful form.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/booking">Work With Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src="/photographer-portrait-studio-professional.jpg"
                alt="About photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-primary/20 rounded-sm p-6">
              <div className="font-serif text-3xl text-primary mb-1">12+ Years</div>
              <div className="text-sm text-muted-foreground">Professional Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y border-border py-20 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="font-serif text-3xl md:text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A timeline of growth, dedication, and countless beautiful stories captured
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary">
                  <span className="font-serif text-primary font-semibold">{item.year}</span>
                </div>
                {index < timeline.length - 1 && <div className="flex-1 w-px bg-border mt-4" />}
              </div>
              <div className="flex-1 pb-12">
                <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Our Philosophy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We believe that photography is more than just capturing images—it's about preserving emotions, telling
                stories, and creating timeless art that resonates for generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every client is unique, every moment is precious, and every photograph should reflect the elegance and
                authenticity of your story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
