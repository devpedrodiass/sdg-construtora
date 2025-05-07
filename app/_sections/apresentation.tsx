import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon, ConstructionIcon } from "lucide-react"
import React from "react"

export const Apresentation = () => {
  return (
    <section className="bg-primary text-primary-foreground w-full max-h-screen flex  justify-center p-8">
      <div id="left" className=" flex flex-col">
        <h1 className="font-bold flex items-center gap-2 text-2xl">
          <ConstructionIcon className="bg-accent text-primary rounded-md size-10 p-2" />
          SDG Planejar & Construir
        </h1>

        <div className="mt-48 flex flex-col gap-8">
          <Badge
            variant="secondary"
            className="flex items-center gap-2 text-sm"
          >
            <span
              id="dot"
              className="size-2 animate-pulse bg-green-400 rounded-full outline-3 outline-green-400/50"
            />
            Disponível para orçamentos
          </Badge>
          <p className="text-6xl">
            Sua escolha certa
            <br />
            para construir <br />
            seu futuro
          </p>

          <p className="text-gray-400 font-light">
            SDG facilita o acesso à casa própria <br /> de forma rápida, segura
            e 100% digital.
          </p>

          <Button
            size="lg"
            className="w-fit rounded-full mt-5"
            variant="secondary"
          >
            Conheça sua casa nova
            <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full size-6 p-2">
              <ArrowUpRightIcon />
            </div>
          </Button>
        </div>
      </div>

      <img
        id="right"
        className="w-1/2 ml-auto rounded-md object-cover max-lg:hidden"
        src="https://framerusercontent.com/images/yyYhQHFqAUi9h1nO5lH9iqGVY7o.png"
        alt=""
      />
    </section>
  )
}
