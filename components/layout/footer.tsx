import { ConstructionIcon } from "lucide-react"
import React from "react"
import { Separator } from "../ui/separator"

export const Footer = () => {
  return (
    <footer className="pt-8 px-8 max-md:px-2">
      <section className="bg-black p-8 rounded-md rounded-br-none rounded-bl-none flex flex-col gap-10">
        <div className="flex gap-4 justify-between max-md:flex-col">
          <aside>
            <h1 className="font-bold flex items-center text-primary-foreground gap-2 text-2xl">
              <ConstructionIcon className="bg-accent text-primary rounded-md size-10 p-2" />
              SDG Planejar & Construir
            </h1>
          </aside>

          <aside className=" text-primary-foreground flex flex-col gap-4">
            <p className="text-lg font-semibold">Links rápidos</p>

            <div className="grid grid-cols-2 gap-4 font-light">
              <a href="#sobre-nos">Sobre Nós</a>
              <a href="#servicos">Serviços</a>
              <a href="#nosso-trabalho">Nosso Trabalho</a>
              <a href="#parceiros">Parceiros</a>
              <a href="#faq">FAQ</a>
              <a href="#contato">Contato</a>
            </div>
          </aside>
        </div>

        <Separator className="bg-gray-800" />

        <div className="flex items-center justify-between text-primary-foreground">
          <p>© {new Date().getFullYear()} SDG. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://linkedin.com/in/devpedrodias"
              target="_blank"
              className="hover:underline font-semibold"
            >
              Pedro Dias
            </a>
          </p>
        </div>
      </section>
    </footer>
  )
}
