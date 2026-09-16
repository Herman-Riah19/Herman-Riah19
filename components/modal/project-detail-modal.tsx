"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ExternalLink, Github, Calendar, Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Model } from "@/model/ProjectModel";

interface ProjectDetailModalProps {
  project: Model | null;
  isOpen: boolean;
  onClose: () => void;
  locale?: string;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  locale = "fr",
}) => {
  if (!project) return null;

  const isFr = locale === "fr";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl max-h-[85vh] flex flex-col p-0 overflow-hidden rounded-none border border-border shadow-sm font-mono">
        <div className="overflow-y-auto flex-1 w-full">
          {project.img && (
            <div className="relative w-full bg-background p-2 border-b border-border">
              <div className="relative w-full h-56 sm:h-72 overflow-hidden border border-border">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="rounded-none bg-card text-card-foreground border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest shadow-sm">
                  {project.type}
                </Badge>
              </div>
            </div>
          )}

          <div className="p-6 space-y-6">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
                <Terminal className="w-3.5 h-3.5" />
                <span>Dossier // Projet</span>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <DialogTitle className="font-serif text-3xl tracking-tight leading-none text-foreground">
                  {project.title}
                </DialogTitle>
                {project.date && (
                  <div className="flex items-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-card px-2 py-1 border border-border">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {project.date}
                  </div>
                )}
              </div>
              <DialogDescription className="font-sans text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            {project.longDescription && (
              <div className="space-y-2 pt-4 border-t border-border">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {isFr ? "Aperçu détaillé du projet" : "Detailed Overview"}
                </h4>
                <div className="prose dark:prose-invert max-w-none font-sans text-sm text-muted-foreground leading-relaxed bg-card p-4 border border-border rounded-none">
                  <Markdown>{project.longDescription}</Markdown>
                </div>
              </div>
            )}

            {project.technology && project.technology.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {isFr ? "Technologies & Outils" : "Technologies & Tools"}
                </h4>
                <div className="flex flex-wrap gap-px bg-border border border-border w-fit">
                  {project.technology.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="default"
                      className="rounded-none border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-border sticky bottom-0 bg-background py-2">
              {project.link && (
                <Button variant="outline" asChild className="gap-2 rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    {isFr ? "Code Source" : "Source Code"}
                  </Link>
                </Button>
              )}
              {project.href && project.href !== "#" && (
                <Button asChild className="gap-2 rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {isFr ? "Voir la Démo" : "Live Demo"}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
