import { useState, useEffect } from "react";
import { readProjectsAttribute } from "../data/queries/readProjectsAttribute";
import { useProjectStore } from "../data/store/projectStore";

export function useCheckProjects() {
  const projects = useProjectStore((state) => state.projects);
  const [isLoading, setIsLoading] = useState(true);

  async function check() {
    try {
      if (!projects) {
        await readProjectsAttribute();
      }
    } catch (error) {
      console.log("useCheckProjects error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  return { isLoading, projects };
}