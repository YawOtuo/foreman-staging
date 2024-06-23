"use client"
import create from 'zustand';

type AppStore = {
  category: string;
  setCategory: (val: string) => void;
  FBaseDetails: Record<string, any>;
  setFBaseDetails: (details: Record<string, any>) => void;
  DBDetails: Record<string, any>;
  setDBDetails: (details: Record<string, any>) => void;
  error: any | null; // Error state
  setError: (error: any | null) => void; // Setter for error state
  isLoading: boolean; // Loading state
  setIsLoading: (isLoading: boolean) => void; // Setter for loading state
};

export const useAppStore = create<AppStore>((set) => ({
  category: '',
  setCategory: (val) => set({ category: val }),
  FBaseDetails: {},
  setFBaseDetails: (details) => set({ FBaseDetails: details }),
  DBDetails: {},
  setDBDetails: (details) => set({ DBDetails: details }),
  error: null,
  setError: (error) => set({ error }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
