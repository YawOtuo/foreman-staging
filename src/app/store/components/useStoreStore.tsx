import { create } from "zustand";

type AppStore = {
  filter: { [key: string]: any };
  setFilter: (filter: { [key: string]: any }) => void;
};

export const useStoreStore = create<AppStore>((set) => ({
  filter: {},
  setFilter: (newFilter) =>
    set((state) => ({ filter: { ...state.filter, ...newFilter } })),
}));
