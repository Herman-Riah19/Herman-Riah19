"use client";

import React, { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm, FormProvider } from "react-hook-form";
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
import { sendEmailAction } from "@/lib/mail-service"; // Server Action
import { useTranslations } from "next-intl";

export function MailContact() {
  const t = useTranslations("Contact");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const formMethods = useForm<z.infer<typeof MailSchema>>({
    resolver: zodResolver(MailSchema),
    defaultValues: { email: "", subject: "", message: "" },
  });

  const handleSubmit = async (data: FormData) => {
    setError("");
    startTransition(async () => {
      try {
        await sendEmailAction(
          data.get("email") as string,
          data.get("subject") as string,
          data.get("message") as string
        );
        toast("Votre Email est envoyé");
        formMethods.reset();
      } catch (err) {
        console.error(err);
        setError(t("Error"));
      }
    });
  };

  return (
    <Card id="contact" className="w-full shadow-xl">
      <CardHeader className="flex flex-col justify-center items-center text-center">
        <CardTitle className="text-2xl">{t("Title")}</CardTitle>
        <CardDescription className="text-xl">{t("Subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="w-full m-2">
        <FormProvider {...formMethods}>
          {/* onSubmit doit transformer les données en FormData */}
          <form
            action={handleSubmit} 
            className="flex flex-col w-full gap-4 p-4"
          >
            <LabelledTextField
              label={t("Email")}
              placeholder={t("Placeholder.Email")}
              {...formMethods.register("email")}
            />

            <LabelledTextField
              label={t("Subject")}
              placeholder={t("Placeholder.Subject")}
              {...formMethods.register("subject")}
            />

            <LabelledTextarea
              label={t("Message")}
              placeholder={t("Placeholder.Message")}
              className="h-[80px]"
              {...formMethods.register("message")}
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
                {t("Send")}
              </Button>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
