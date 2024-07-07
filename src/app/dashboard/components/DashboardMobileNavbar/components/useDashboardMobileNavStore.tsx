import { create } from "zustand";

type DashboardMobileMenu = {
    mobileMenuStore: boolean;
    setDashboardMobileMenu: (val: boolean) => void;

}

export const useDashboardMobileStore = create<DashboardMobileMenu>((set) => ({
    mobileMenuStore: false,
    setDashboardMobileMenu: (val) => set({ mobileMenuStore: val }),
}));
