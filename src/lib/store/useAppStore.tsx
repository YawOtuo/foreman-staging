import { create } from "zustand";

type AppStore = {
    category: string;
    setCategory: (val: string) => void;

}

export const useAppStore = create<AppStore>((set) => ({
    category: "",
    setCategory: (val) => set({ category: val }),
}));
