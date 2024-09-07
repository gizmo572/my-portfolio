'use client'

import { Projects } from "@/components/Projects";



export default function Page() {

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Projects />
      </div>
    </section>
  )
}