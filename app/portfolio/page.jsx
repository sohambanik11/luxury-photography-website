"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

// Mock portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    category: "wedding",
    image: "romantic+garden+wedding+ceremony+elegant+couple",
  },
  {
    id: 2,
    title: "Corporate Gala Evening",
    category: "events",
    image: "luxury+corporate+gala+event+elegant+venue",
  },
  {
    id: 3,
    title: "Executive Portrait",
    category: "portrait",
    image: "professional+executive+portrait+studio+lighting",
  },
  {
    id: 4,
    title: "Luxury Brand Campaign",
    category: "commercial",
    image: "luxury+brand+product+photography+elegant",
  },
  {
    id: 5,
    title: "Beach Wedding Sunset",
    category: "wedding",
    image: "beach+wedding+sunset+elegant+couple+romantic",
  },
  {
    id: 6,
    title: "Fashion Portrait",
    category: "portrait",
    image: "fashion+portrait+studio+elegant+model",
  },
  {
    id: 7,
    title: "Product Launch Event",
    category: "events",
    image: "product+launch+event+corporate+luxury",
  },
  {
    id: 8,
    title: "Jewelry Campaign",
    category: "commercial",
    image: "luxury+jewelry+commercial+photography+elegant",
  },
  {
    id: 9,
    title: "Ballroom Reception",
    category: "wedding",
    image: "elegant+ballroom+wedding+reception+luxury",
  },
  {
    id: 10,
    title: "Family Portrait",
    category: "portrait",
    image: "elegant+family+portrait+studio+professional",
  },
  {
    id: 11,
    title: "Conference Coverage",
    category: "events",
    image: "professional+conference+event+photography",
  },
  {
    id: 12,
    title: "Watch Photography",
    category: "commercial",
    image: "luxury+watch+commercial+product+photography",
  },
]

export default function PortfolioPage() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get("filter")
  const [activeFilter, setActiveFilter] = useState(filterParam || "all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [filteredImages, setFilteredImages] = useState(portfolioData)

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(portfolioData)
    } else {
      setFilteredImages(portfolioData.filter((item) => item.category === activeFilter))
    }
  }, [activeFilter])

  const filters = [
    { label: "All", value: "all" },
    { label: "Wedding", value: "wedding" },
    { label: "Events", value: "events" },
    { label: "Portrait", value: "portrait" },
    { label: "Commercial", value: "commercial" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of our finest work across weddings, events, portraits, and commercial photography
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid mb-6"
              >
                <div
                  className="group relative overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={`/generic-placeholder-icon.png?height=${400 + (index % 3) * 100}&width=400&query=${item.image}`}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-primary hover:text-primary/80 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/.jpg?height=800&width=1200&query=${selectedImage.image}`}
                alt={selectedImage.title}
                className="w-full h-auto rounded-sm"
              />
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl text-primary mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
