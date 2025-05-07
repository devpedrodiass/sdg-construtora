import React from "react"

export const Metrics = () => {
  return (
    <section className="pt-15 pb-40 px-45 flex flex-col gap-8 items-center">
      <div className="w-full flex items-center justify-between gap-4">
        <MetricItem
          amount={8}
          title="Anos de mercado"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={8}
          title="Anos de mercado"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={8}
          title="Anos de mercado"
          description="Construindo casas, realizando sonhos"
        />
        <MetricItem
          amount={8}
          title="Anos de mercado"
          description="Construindo casas, realizando sonhos"
        />
      </div>
    </section>
  )
}

type MetricItemProps = {
  amount: number
  title: string
  description: string
}

const MetricItem = ({ amount, description, title }: MetricItemProps) => {
  return (
    <article className="flex flex-col gap-2">
      <p className="text-7xl">{amount}</p>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="max-w-[230px] font-light">{description}</p>
    </article>
  )
}
