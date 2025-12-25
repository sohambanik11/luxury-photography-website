"use client"

import { motion } from "framer-motion"
import { Camera, Aperture, Zap, Sparkles } from "lucide-react"

export default function GearPage() {
  const equipment = [
    {
      category: "Cameras",
      icon: Camera,
      items: [
        {
          name: "Sony Alpha 1",
          description: "Professional flagship mirrorless camera with 50.1MP resolution",
          specs: "50.1MP | 8K Video | 30fps",
        },
        {
          name: "Canon EOS R5",
          description: "High-resolution mirrorless with exceptional autofocus",
          specs: "45MP | 8K RAW | 12fps",
        },
        {
          name: "Leica M11",
          description: "Legendary rangefinder for timeless portrait work",
          specs: "60MP | Triple Resolution | Iconic",
        },
      ],
    },
    {
      category: "Lenses",
      icon: Aperture,
      items: [
        {
          name: "Sony FE 24-70mm f/2.8 GM II",
          description: "Professional standard zoom with exceptional sharpness",
          specs: "f/2.8 | GM Quality | Versatile",
        },
        {
          name: "Sony FE 70-200mm f/2.8 GM OSS II",
          description: "Telephoto zoom perfect for events and portraits",
          specs: "f/2.8 | OSS | Lightweight",
        },
        {
          name: "Sigma 85mm f/1.4 DG DN Art",
          description: "Premium portrait lens with beautiful bokeh",
          specs: "f/1.4 | Art Series | Stunning",
        },
        {
          name: "Canon RF 50mm f/1.2L USM",
          description: "Classic focal length with extraordinary optics",
          specs: "f/1.2 | L-Series | Magical",
        },
      ],
    },
    {
      category: "Lighting",
      icon: Zap,
      items: [
        {
          name: "Profoto B10X Plus",
          description: "Portable flash with 500Ws power and HSS",
          specs: "500Ws | TTL | HSS",
        },
        {
          name: "Godox AD600Pro",
          description: "Powerful outdoor strobe with battery pack",
          specs: "600Ws | Portable | Reliable",
        },
        {
          name: "Aputure 600d Pro",
          description: "Professional LED continuous lighting",
          specs: "1200W | Daylight | Wireless",
        },
      ],
    },
    {
      category: "Accessories",
      icon: Sparkles,
      items: [
        {
          name: "DJI Ronin RS3 Pro",
          description: "Professional gimbal stabilizer for smooth video",
          specs: "4.5kg Payload | Automated",
        },
        {
          name: "Peak Design Travel Tripod",
          description: "Ultra-compact carbon fiber tripod system",
          specs: "Carbon | Compact | Stable",
        },
        {
          name: "Capture One Pro",
          description: "Professional photo editing and color grading",
          specs: "RAW Processing | Pro Tools",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Our Equipment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional-grade equipment carefully selected to deliver exceptional results in every shoot
          </p>
        </motion.div>

        {/* Equipment Sections */}
        {equipment.map((section, sectionIndex) => (
          <section key={section.category} className="mb-20 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <section.icon className="h-8 w-8 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{section.category}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-sm p-6 h-full hover:border-primary/50 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.specs.split("|").map((spec) => (
                        <span
                          key={spec.trim()}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {spec.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* Why It Matters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-card border border-border rounded-sm p-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Why Equipment Matters</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional-grade equipment allows us to capture every detail, work in any lighting condition, and deliver
            the exceptional quality you deserve. Our investment in the finest tools ensures your memories are preserved
            with uncompromising excellence.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
