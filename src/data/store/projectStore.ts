import { create } from 'zustand'
import { GetProjectQuery, ListProjectsQuery } from '../../API';

type ProjectStore = {
  project: GetProjectQuery['getProject'] | null;
  setProject: (project: GetProjectQuery['getProject'] | null) => void;
  projects: ListProjectsQuery['listProjects'] | null;
  setProjects: (projects: ListProjectsQuery['listProjects'] | null) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  setProject: (project) => set({ project }),
  projects: null,
  setProjects: (projects) => set({ projects }),
}));