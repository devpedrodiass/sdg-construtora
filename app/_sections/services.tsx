import { Badge } from "@/components/ui/badge"
import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FenceIcon, HouseIcon } from "lucide-react"

export const Services = () => {
  return (
    <section
      id="servicos"
      className="flex flex-col items-center justify-center p-8 gap-8 bg-gray-100"
    >
      <Badge>Serviços</Badge>
      <h3 className="text-5xl font-semibold">O que nós fazemos</h3>
      <p className="text-2xl font-light">
        Encontre o melhor serviço que case com seu projeto
      </p>

      <div className="flex w-full items-start justify-center gap-8">
        <img
          src="https://framerusercontent.com/images/A7yE2PBsrF4l2EgA4yTO9HiAcPQ.png"
          alt=""
          className="rounded-md max-w-[610px]"
        />

        <Accordion type="multiple" className="w-full max-w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <FenceIcon />
                Terrenos Disponíveis
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <li>GreenPark I</li>
              <li>GreenPark II</li>
              <li>Reserva das Flores</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HouseIcon />
                Modelos de Casas
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <li>55m² - Compacta (c/ Projeto 3D)</li>
              <li>65m² - Sala ampliada (c/ Projeto 3D)</li>
              <li>80m² - 3 quartos (c/ Projeto 3D)</li>
              <li>90m² - 3 quartos com suite (c/ Projeto 3D)</li>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
