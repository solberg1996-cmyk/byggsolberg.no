"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "./ProjectCard";
import { projects, categoryLabels } from "@/content/projects";
import type { ProjectCategory } from "@/types";

// Vis kun kategorier som faktisk har prosjekter (unngår tomme filtre)
const categories = (Object.keys(categoryLabels) as ProjectCategory[]).filter(
  (c) => projects.some((p) => p.category === c),
);

/** Filtrerbart prosjektgalleri. Filtrering skjer øyeblikkelig på klientsiden. */
export function ProjectGallery() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => setActive("all")}>
          <Badge active={active === "all"}>Alle</Badge>
        </button>
        {categories.map((c) => (
          <button key={c} type="button" onClick={() => setActive(c)}>
            <Badge active={active === c}>{categoryLabels[c]}</Badge>
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
