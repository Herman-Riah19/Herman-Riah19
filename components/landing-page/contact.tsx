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
import { ArrowUpRight, Terminal } from "lucide-react";
import { toast } from "sonner";
import { sendEmailAction } from "@/lib/mail-service"; 
import { useTranslations } from "next-intl";
import { DottedMapContext } from "./dottedMapContext";

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
    <section className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>05 // CONTACT</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
          <Card id="contact" className="h-full w-full rounded-none border-0 bg-card shadow-sm">
            <CardHeader className="p-6 sm:p-8 border-b border-border">
              <CardTitle className="font-serif text-3xl sm:text-4xl tracking-tight leading-none" data-testid="contact-title">{t("Title")}</CardTitle>
              <CardDescription className="font-sans text-sm text-muted-foreground mt-2" data-testid="contact-subtitle">{t("Subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <FormProvider {...formMethods}>
                <form
                  action={handleSubmit} 
                  className="flex flex-col w-full gap-4"
                  data-testid="contact-form"
                >
                  <LabelledTextField
                    label={t("Email")}
                    placeholder={t("Placeholder.Email")}
                    {...formMethods.register("email")}
                    data-testid="contact-email"
                  />

                  <LabelledTextField
                    label={t("Subject")}
                    placeholder={t("Placeholder.Subject")}
                    {...formMethods.register("subject")}
                    data-testid="contact-subject"
                  />

                  <LabelledTextarea
                    label={t("Message")}
                    placeholder={t("Placeholder.Message")}
                    className="h-[120px] rounded-none"
                    {...formMethods.register("message")}
                    data-testid="contact-message"
                  />

                  <div className="flex pt-2">
                    <Button
                      type="submit"
                      className="rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6"
                      disabled={isPending}
                      data-testid="contact-submit"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      {t("Send")}
                    </Button>
                  </div>

                  {error && <p className="font-mono text-xs uppercase tracking-wider text-destructive">{error}</p>}
                </form>
              </FormProvider>
            </CardContent>
          </Card>
          <div className="bg-card p-2 flex">
            <DottedMapContext />
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>UPLINK // 05</div>
          <div>EDITION // 2026.1</div>
        </div>
      </div>
    </section>
  );
}
