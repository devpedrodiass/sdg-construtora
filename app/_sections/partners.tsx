import { Marquee } from "@/components/magicui/marquee"
import { Badge } from "@/components/ui/badge"
import React from "react"

export const Partners = () => {
  return (
    <section
      id="parceiros"
      className="flex flex-col items-center justify-center px-8 py-40 gap-8"
    >
      <Badge>Parceiros</Badge>
      <h3 className="text-5xl font-semibold">Escute de nossos parceiros</h3>
      <p className="text-2xl font-light">
        Conheça quem atua garantindo qualidade, confiaça e inovação
      </p>

      <div className="relative flex w-full max-w-1/2 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] text-lg">
          <Badge variant="secondary">LTO Incorporações</Badge>
          <p>Mais Engenharia</p>
          <Badge variant="secondary">Face Engenharia e Construções</Badge>
          <p>Corretora Ciutat</p>
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  )
}
