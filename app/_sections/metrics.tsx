import React from "react"

export const Metrics = () => {
  return (
    <section className="pt-15 pb-40 px-20 flex flex-col gap-8 items-center">
      <div className="w-full flex items-center justify-center gap-4 flex-wrap">
        <MetricItem
          amount={8}
          title="Anos de mercado"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={116}
          title="Pessoas impactadas"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={35}
          title="Projetos finalizados"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={"100%"}
          title="Satisfação do cliente"
          description="Entregando casas de qualidade"
        />
      </div>
    </section>
  )
}

type MetricItemProps = {
  amount: number | string
  title: string
  description: string
}

const MetricItem = ({ amount, description, title }: MetricItemProps) => {
  return (
    <article className="flex flex-col gap-2 max-md:text-center">
      <p className="text-7xl">{amount}</p>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="max-w-[230px] font-light">{description}</p>
    </article>
  )
}
