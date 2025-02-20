"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import newCustomerContactAction from "@/modules/landing/presentation/actions/send-main-contact-email.action";

// Esquema de validación con zod
export const dialogContactFormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Introduce un correo electrónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export function ContactDialogForm({ setIsOpen }: { setIsOpen: (value: boolean) => void }) {
  const form = useForm<z.infer<typeof dialogContactFormSchema>>({
    resolver: zodResolver(dialogContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: z.infer<typeof dialogContactFormSchema>) {
    const result = await newCustomerContactAction({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!result?.error) {
      form.reset();

      toast({
        title: "Mensaje enviado:",
        description: "Tu mensaje ha sido enviado con éxito.",
      });

      setIsOpen(false);
    } else {
      toast({
        title: "Error al enviar mensaje:",
        description: "Ha ocurrido un error al enviar tu mensaje.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
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
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="tucorreo@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe tu mensaje aquí" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="ml-auto" type="submit">
          Enviar mensaje
        </Button>
      </form>
    </Form>
  );
}
