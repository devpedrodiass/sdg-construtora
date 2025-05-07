"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { ExternalLinkIcon } from "lucide-react"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FORM_SCHEMA),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      time: "",
    },
  })

  const { setValue } = form

  const onSubmit = (data: FormSchemaType) => {
    console.log(data)

    const currDate = new Date()

    const formattedDate = currDate
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", " às")

    setValue("time", formattedDate)

    if (!formRef.current) return

    console.log("formRef.current: ", formRef.current)

    emailjs
      .sendForm(
        "service_zziweyj",
        "template_h51kema",
        formRef.current,
        "zaJgIahOge_6j8aSa"
      )
      .then(
        (result) => {
          console.log("result: ", result)
        },
        (error) => {
          console.log("error: ", error)
        }
      )
  }

  const whatsapplink = `https://wa.me/5511966106431?text=Ol%C3%A1,%20Venho%20por%20meio%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`

  return (
    <section id="contato" className="w-full pt-8 px-8 max-md:px-2">
      <div className="bg-primary text-primary-foreground rounded-md p-8 max-md:p-4 flex gap-10 max-md:flex-col">
        <aside className="flex flex-col gap-4 max-w-1/3 max-md:max-w-full">
          <Badge variant="secondary">Contato</Badge>
          <h3 className="text-5xl font-semibold">Fale conosco</h3>
          <p className="text-lg font-light text-justify max-md:hidden">
            Para qualquer dúvida ou para explorar mais a fundo sua visão,
            convidamos você a entrar em contato com nossa equipe profissional
            usando os detalhes fornecidos abaixo.
          </p>

          <Separator className="bg-gray-800" />

          <a
            href={whatsapplink}
            target="_blank"
            className="w-fit flex items-center gap-2 hover:underline font-semibold"
          >
            Converse conosco pelo Whatsapp <ExternalLinkIcon />
          </a>
        </aside>

        <aside className="w-full bg-secondary text-secondary-foreground rounded-md p-4">
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome*</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex.: Daniel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail*</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex.: examplo@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone*</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex.: (11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No que podemos te ajudar?*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex.: Eu quero uma nova..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>No que podemos te ajudar?*</FormLabel> */}
                    <FormControl>
                      <Input
                        type="hidden"
                        placeholder="Ex.: Eu quero uma nova..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4 max-md:flex-col text-center">
                <Button type="submit">Enviar mensagem</Button>
                ou{" "}
                <a
                  href={whatsapplink}
                  target="_blank"
                  className="w-fit flex items-center gap-2 hover:underline font-semibold"
                >
                  Converse conosco pelo Whatsapp <ExternalLinkIcon />
                </a>
              </div>
            </form>
          </Form>
        </aside>
      </div>
    </section>
  )
}

const FORM_SCHEMA = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "O e-mail é obrigatório"),
  telefone: z.string().min(1, "O telefone é obrigatório"),
  mensagem: z.string().min(1, "A mensagem é obrigatória"),
  time: z.string().optional(),
})

type FormSchemaType = z.infer<typeof FORM_SCHEMA>
