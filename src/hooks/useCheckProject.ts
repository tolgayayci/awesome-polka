import { useState, useEffect } from "react";
import { readProjectAttribute } from "../data/queries/readProjectAttribute";
import { useProjectStore } from "../data/store/projectStore";

import type { Project } from "../API";

export function useCheckProject(projectSlug: Project["slug"]) {
  const project = useProjectStore((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);

  async function check() {
    try {
      if (!project) {
        await readProjectAttribute(projectSlug);
      }
    } catch (error) {
      console.log("useCheckProject error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  return { isLoading, project };
}