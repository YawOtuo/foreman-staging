// store/useCartPageStore.ts

import create from 'zustand';

interface CartPageStore {
  cartValid: boolean;
  setCartValid: (isValid: boolean) => void;
}

export const useCartPageStore = create<CartPageStore>((set) => ({
  cartValid: true, // default to true or false based on your requirements
  setCartValid: (isValid) => set({ cartValid: isValid }),
}));
