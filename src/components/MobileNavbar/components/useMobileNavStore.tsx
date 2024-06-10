import { create } from "zustand";

type MobileNavStore = {
    MobileMenuStore: boolean;
    setMobileMenuStore: (val: boolean) => void;

}

export const useMobileNavStore = create<MobileNavStore>((set) => ({
    MobileMenuStore: false,
    setMobileMenuStore: (val) => set({ MobileMenuStore: val }),
}));
