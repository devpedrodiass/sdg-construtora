import { Badge } from "@/components/ui/badge"
import React from "react"

export const Financial = () => {
  return (
    <section className="w-full pt-8 px-8 max-md:px-2">
      <div
        id="financiamento"
        className="bg-primary text-primary-foreground rounded-md p-8 max-md:p-4 flex gap-10 flex-col items-center justify-center"
      >
        <Badge variant="secondary">Financiamento</Badge>
        <h3 className="text-5xl font-semibold">Simule seu Financiamento</h3>
        <p className="text-lg font-light text-justify max-md:hidden">
          Financie com segurança pelas maiores instituições financeiras do país.
        </p>

        <p className="text-lg font-semibold">Como funciona?</p>
        <div className=" grid grid-cols-2 gap-10 max-w-1/2">
          <div className=" text-justify">
            Na SDG Planejar & Construir, facilitamos o acesso ao financiamento
            habitacional com nossos parceiros: Caixa Econômica Federal e Banco
            do Brasil. Por meio de nossos canais, você poderá simular
            gratuitamente seu financiamento habitacional de forma clara, rápida
            e segura.
            <br />
            <br />
            Entenda como funciona: aquisição + construção.
            <br /> <br /> Nosso modelo é pensado para quem quer mais do que
            comprar uma casa pronta: quer participar da escolha do local e do
            projeto, com o conforto de contar com um processo de financiamento
            eficiente
            <br />
            <br />
            Isso significa que com uma entrada reduzida, você pode sair do
            aluguel e investir na sua casa própria, personalizada conforme seu
            gosto e em local valorizado.
            <br />
            <br />
            Conte com nossa equipe para acompanhar todo o processo, desde a
            simulação até a assinatura do contrato de financiamento.
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 max-w-[300px]">
              <Badge
                variant="secondary"
                className="h-fit text-lg font-bold size-8"
              >
                <strong> 1</strong>
              </Badge>
              Você escolhe o terreno nos melhores loteamentos planejados de
              Bacabal;
            </div>
            <div className="flex gap-4 max-w-[300px]">
              <Badge
                variant="secondary"
                className="h-fit text-lg font-bold size-8"
              >
                2
              </Badge>
              Define o modelo da casa (55m², 65m², 80m² ou 90m²);
            </div>
            <div className="flex gap-4 max-w-[300px]">
              <Badge
                variant="secondary"
                className="h-fit text-lg font-bold size-8"
              >
                3
              </Badge>
              Nós elaboramos o projeto completo e apresentamos ao banco;
            </div>
            <div className="flex gap-4 max-w-[300px]">
              <Badge
                variant="secondary"
                className="h-fit text-lg font-bold size-8"
              >
                4
              </Badge>
              O banco analisa sua capacidade de crédito e libera o
              financiamento;
            </div>
            <div className="flex gap-4 max-w-[300px]">
              <Badge
                variant="secondary"
                className="h-fit text-lg font-bold size-8"
              >
                5
              </Badge>
              <div className="flex flex-col">
                Você pode financiar até 80% de todo o empreendimento, incluindo:
                <li>o valor do terreno;</li>
                <li>o custo da construção;</li>
                <li>os encargos técnicos e legais.</li>
              </div>
            </div>
            <strong>Simule Agora mesmo:</strong>
            <li>
              <a href="#financiamento" className="hover:underline">
                Simular financiamento na Caixa Econômica Federal (Link do site
                da CEF)
              </a>
            </li>
            <li>
              <a href="#financiamento" className="hover:underline">
                Simular financiamento no Banco do Brasil (Link do site do BB)
              </a>
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}
