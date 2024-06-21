import create from "zustand";

type AppStore = {
  filter: { [key: string]: any };
  ascendingOrDescending: "ascending" | "descending" | undefined;
  setFilter: (newFilter: { [key: string]: any }) => void;
  setAscendingOrDescending: (order: "ascending" | "descending") => void;
  clearFilter: () => void; // New method to clear all filters
};

export const useStoreStore = create<AppStore>((set) => ({
  filter: {
    ordering: "name", // Initial filter with default ordering
  },
  ascendingOrDescending: "ascending", // Initial ascending/descending state
  setFilter: (newFilter) =>
    set((state) => {
      let ordering = newFilter.ordering || state.filter.ordering.replace(/^-/, "");
      return {
        filter: {
          ...state.filter,
          ...newFilter,
          ordering:
            state.ascendingOrDescending === "descending"
              ? `-${ordering}`
              : ordering.replace(/^-/, ""), // Remove '-' if present
        },
        ascendingOrDescending: state.ascendingOrDescending,
      };
    }),
  setAscendingOrDescending: (order) =>
    set((state) => ({
      ascendingOrDescending: order,
      filter: {
        ...state.filter,
        ordering:
          order === "descending"
            ? `-${state.filter.ordering}`
            : state.filter.ordering.replace(/^-/, ""), // Remove '-' if present
      },
    })),
  clearFilter: () =>
    set({
      filter: {
        ordering: "name", // Reset ordering to default
      },
      ascendingOrDescending: undefined, // Reset ascending/descending state
    }),
}));
