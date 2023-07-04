import { create } from 'zustand'
import { GetUserQuery, ListUsersQuery } from '../../API';

type UserStore = {
  user: GetUserQuery['getUser'] | null;
  setUser: (user: GetUserQuery['getUser'] | null) => void;
  users: ListUsersQuery['listUsers'] | null;
  setUsers: (users: ListUsersQuery['listUsers'] | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  users: null,
  setUsers: (users) => set({ users }),
}));