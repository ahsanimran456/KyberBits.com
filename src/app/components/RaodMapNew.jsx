"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

// This is sample data. You can replace it with your actual road map items.
const roadmapItems = [
  {
    title: "Foundation",
    description: "Establish core infrastructure and team",
    date: "Q1 2024",
    icon: "🏗️",
  },
  {
    title: "Development",
    description: "Build and test main features",
    date: "Q2 2024",
    icon: "🚀",
  },
  {
    title: "Beta Launch",
    description: "Release beta version to early adopters",
    date: "Q3 2024",
    icon: "🧪",
  },
  {
    title: "Expansion",
    description: "Scale user base and add advanced features",
    date: "Q4 2024",
    icon: "📈",
  },
  {
    title: "Global Release",
    description: "Worldwide launch and marketing campaign",
    date: "Q1 2025",
    icon: "🌍",
  },
]

export function RoadmapSlider() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-100 to-indigo-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl">Our Road Map</h2>
        <p className="mt-4 text-xl text-indigo-600">Follow our journey as we build the future</p>
      </div>
      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        <motion.div
          className="absolute left-9 top-0 bottom-0 w-0.5 bg-indigo-300"
          style={{ scaleY: scrollYProgress }}
        />
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-16 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500 text-white text-3xl shadow-lg">
              {item.icon}
            </div>
            <div className="ml-8">
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold text-indigo-900">{item.title}</h3>
                <span className="ml-4 px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="mt-2 text-lg text-indigo-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
