import { create } from 'zustand'
import { GetProjectQuery } from '../../API';

type ProjectStore = {
  project: GetProjectQuery['getProject'] | null;
  setProject: (project: GetProjectQuery['getProject'] | null) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  setProject: (project) => set({ project }),
}));