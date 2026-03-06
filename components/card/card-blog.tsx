import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Blog } from "@/types/blog-type";
import Image from "next/image";

export default function CardBlog({ banner_url, title, description }: Blog) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={banner_url}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle data-testid={`blog-card-title-${title}`}>{title}</CardTitle>
        <CardDescription data-testid={`blog-card-description-${title}`}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
