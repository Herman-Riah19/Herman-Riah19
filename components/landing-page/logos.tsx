import React from "react"

const logos = ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker", "AWS"]

export default function Logos() {
  return (
    <section className="container mx-auto py-12 flex flex-wrap gap-6 justify-center opacity-80">
      {logos.map((logo) => (
        <div
          key={logo}
          className="px-4 py-2 bg-muted/5 rounded-md text-sm text-muted-foreground"
        >
          {logo}
        </div>
      ))}
    </section>
  )
}
