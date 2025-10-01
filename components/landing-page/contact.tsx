"use client";

import React, { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailSchema } from "@/validator/email-schema";
import { LabelledTextField } from "@/components/form/labelledTextfield";
import { LabelledTextarea } from "@/components/form/labelledTextarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { sendEmailAction } from "@/lib/mail-service";
import { useTranslations } from "next-intl";

export function MailContact() {
  const t = useTranslations("Contact");
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof MailSchema>>({
    resolver: zodResolver(MailSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof MailSchema>) => {
    setError("");
    setSuccess(false);

    startTransition(async () => {
      try {
        const res = await sendEmailAction(
          values.email,
          values.subject,
          values.message
        );
        toast(`Votre Email est envoyé`);

        form.reset();
      } catch (error) {
        console.log("Error: ", error);
        setError(t("Error"));
      }
    });
  };

  return (
    <Card id="contact" className="w-full shadow-xl">
      <CardHeader className="flex flex-col justify-center items-center text-center">
        <CardTitle className="text-2xl" >{t("Title")}</CardTitle>
        <CardDescription className="text-xl">{t("Subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="w-full m-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col w-full gap-4 p-4"
          >
            <LabelledTextField
              label={t("Email")}
              placeholder={t("Placeholder.Email")}
              {...form.register("email")}
            />

            <LabelledTextField
              label={t("Subject")}
              placeholder={t("Placeholder.Subject")}
              {...form.register("subject")}
            />

            <LabelledTextarea
              label={t("Message")}
              placeholder={t("Placeholder.Message")}
              className="h-[80px]"
              {...form.register("message")}
            />
            <div className="flex">
              <Button
                type="submit"
                variant="secondary"
                className="p-6 rounded-full text-lg"
                disabled={isPending}
              >
                <span className="bg-background rounded-full p-2">
                  <ArrowRight className="stroke-foreground" />
                </span>
                {isPending ? t("Send") : t("Submit")}
              </Button>
            </div>
            {success && (
              <p className="text-green-600 text-sm">{t("Success")}</p>
            )}
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
