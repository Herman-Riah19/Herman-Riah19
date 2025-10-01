import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: "Sophie Martin", org: "Startup Innov", text: "Grâce à son expertise full-stack, il a su transformer notre idée en une application fonctionnelle en un temps record." },
  { name: "Jean Dupont", org: "Agence Web", text: "Toujours pro, toujours efficace. Son code est propre et maintenable." },
  { name: "Lucie Bernard", org: "Freelance Client", text: "Excellente communication et livraison rapide. Je recommande vivement !" },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-16 flex flex-col gap-10">
      <h2 className="text-2xl font-bold">Avis & Retours</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <CardContent className="pt-6">
              <p className="mb-4">"{t.text}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.org}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
