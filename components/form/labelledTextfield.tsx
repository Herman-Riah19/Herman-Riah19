"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";

export interface ILabelledTextFieldProps extends UseFormRegisterReturn {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}

export function LabelledTextField({
  label,
  placeholder,
  type = "text",
  error,
  ...registerProps
}: ILabelledTextFieldProps) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm text-primary font-medium">{label}</Label>
      <Input placeholder={placeholder} type={type} {...registerProps} />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
}
