import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react"

export const Faq = () => {
  const whatsappLink = `https://wa.me/5511966106431?text=Ol%C3%A1,%20Venho%20por%20meio%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`

  return (
    <section id="faq" className="flex gap-10 w-full justify-center  px-8 py-40">
      <div className="max-w-1/3 flex flex-col gap-4">
        <Badge>FAQs</Badge>
        <h3 className="text-5xl font-semibold">
          Respondendo <br /> dúvidas
        </h3>
        <p className="text-2xl font-light">
          Tem mais dúvidas? Nossa equipe está pronta <br /> para te ajudar.
        </p>
        <a href={whatsappLink} target="_blank">
          <Button
            variant="secondary"
            size="lg"
            className="w-fit rounded-full hover:underline"
          >
            Fale conosco
            <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full size-6 p-2">
              <ArrowUpRightIcon />
            </div>
          </Button>
        </a>
      </div>

      <Accordion type="multiple" className="w-full max-w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>Qual nossa missão?</AccordionTrigger>

          <AccordionContent>
            Facilitar o acesso à casa própria de forma rápida, segura e 100%
            digital. Na SDG Planejar & Construir, acreditamos que realizar o
            sonho da casa própria não precisa ser complicado. Nossa missão é
            transformar esse processo em uma jornada simples, transparente e ao
            alcance de todos, por meio de um modelo inovador de comercialização
            digital. O consumidor pode escolher o melhor terreno nos bairros
            planejados de Bacabal e selecionar plantas de casas de diferentes
            tamanhos, sem precisar contratar engenheiros, arquitetos ou lidar
            com pedreiros. A SDG cuida de tudo.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
