"use client";

import * as React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export interface ILabelledTextareaProps extends UseFormRegisterReturn {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  error?: string;
}

export function LabelledTextarea({
  label,
  placeholder,
  type = "text",
  className,
  error,
  ...registerProps
}: ILabelledTextareaProps) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm font-medium">{label}</Label>
      <Textarea className={className} placeholder={placeholder} {...registerProps} />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
}
