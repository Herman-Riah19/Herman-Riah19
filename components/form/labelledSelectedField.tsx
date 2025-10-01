"use client";

import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { SelectOption } from "@/types/blog-type";

interface LabelledSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  control: Control<T>;
}

export function LabelledSelectField<T extends FieldValues>({
  name,
  label,
  options,
  control,
  placeholder = "Select an option",
}: LabelledSelectFieldProps<T>) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm text-primary font-medium">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger className={fieldState.error ? "border-red-500 w-full" : "w-full"}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="w-full">
                {options.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
