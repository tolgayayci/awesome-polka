import { create } from 'zustand'
import { GetUserQuery } from '../../API';

type UserStore = {
  user: GetUserQuery['getUser'] | null;
  setUser: (user: GetUserQuery['getUser'] | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));