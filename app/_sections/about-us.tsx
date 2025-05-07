import { Badge } from "@/components/ui/badge"
import React from "react"

export const AboutUs = () => {
  return (
    <section
      id="sobre-nos"
      className="pb-8 px-8 pt-15 flex flex-col gap-8 items-center"
    >
      <div className="flex flex-col gap-4">
        <Badge>Sobre nós</Badge>

        <div className="flex items-start gap-20">
          <p className="text-5xl">
            Engenheiros <br />
            Especialistas
            <br />
          </p>
          <p className="max-w-[768px] text-justify">
            Facilitar o acesso à casa própria de forma rápida, segura e 100%
            digital. Na SDG Planejar & Construir, acreditamos que realizar o
            sonho da casa própria não precisa ser complicado. Nossa missão é
            transformar esse processo em uma jornada simples, transparente e ao
            alcance de todos, por meio de um modelo inovador de comercialização
            digital. O consumidor pode escolher o melhor terreno nos bairros
            planejados de Bacabal e selecionar plantas de casas de diferentes
            tamanhos, sem precisar contratar engenheiros, arquitetos ou lidar
            com pedreiros. <strong>A SDG cuida de tudo</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
