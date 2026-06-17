import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/utils/cn";
import { categoryLabels } from "@/content/projects";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  /** Tailwind aspect-ratio-klasse, f.eks. "aspect-[4/3]" */
  aspect?: string;
};

/** Prosjektkort: foto, kategori + sted, tittel. Hele kortet er klikkbart. */
export function ProjectCard({ project, aspect = "aspect-[4/3]" }: ProjectCardProps) {
  return (
    <Link href={`/prosjekter/${project.slug}`} className="group block">
      <Photo
        src={project.coverImage}
        alt={project.title}
        label={project.title}
        className={cn("w-full rounded-lg", aspect)}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <p className="mt-4 text-label uppercase text-clay">
        {categoryLabels[project.category]} · {project.location}
      </p>
      <Heading
        level={3}
        as="h3"
        className="mt-1 transition-colors group-hover:text-clay"
      >
        {project.title}
      </Heading>
    </Link>
  );
}
