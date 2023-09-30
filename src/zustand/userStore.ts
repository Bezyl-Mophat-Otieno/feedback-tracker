import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  isAuthenticated: boolean;
  token: string | null;
};
const user: User = {
  isAuthenticated: false,
  token: null,
};
type UserStore = {
  user: User;
  logout: () => void;
  login: (token: string) => void;
};

const userStore = create<UserStore>()(
  persist(
    (set) => {
      return {
        user,
        logout: () =>
          set((state) => {
            return {
              user: {
                ...state.user,
                isAuthenticated: false,
                token: null,
              },
            };
          }),
        login: (token: string) =>
          set((state) => {
            return {
              user: {
                ...state.user,
                isAuthenticated: true,
                token,
              },
            };
          }),
      };
    },
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default userStore;
