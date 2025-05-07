import { Badge } from "@/components/ui/badge"
import React from "react"

export const OurWork = () => {
  return (
    <section
      id="nosso-trabalho"
      className="flex flex-col items-center justify-center px-8 py-40 gap-8 "
    >
      <Badge>Nosso trabalho</Badge>
      <h3 className="text-5xl font-semibold">
        Fique inspirado com nosso trabalho
      </h3>
      <p className="text-2xl font-light text-center">
        Veja as transformações de sonhos em realidade, com nossos engenheiros
        especialistas <br /> e com toda atenção aos detalhes.
      </p>

      <div>Em breve...</div>
    </section>
  )
}
