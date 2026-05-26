import { create } from "zustand";

interface College {
  id: number;
  name: string;
  location: string;
  rating: number;
  fees: string;
  placements: string;
  image: string;
}

interface CollegeStore {
  searchQuery: string;
  selectedLocation: string;
  selectedRating: string;

  compareColleges: College[];

  setSearchQuery: (query: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedRating: (rating: string) => void;

  addToCompare: (college: College) => void;
  removeFromCompare: (id: number) => void;
}

export const useCollegeStore = create<CollegeStore>((set) => ({
  searchQuery: "",
  selectedLocation: "All",
  selectedRating: "All",

  compareColleges: [],

  setSearchQuery: (query) =>
    set({ searchQuery: query }),

  setSelectedLocation: (location) =>
    set({ selectedLocation: location }),

  setSelectedRating: (rating) =>
    set({ selectedRating: rating }),

  addToCompare: (college) =>
    set((state) => {
      const alreadyExists =
        state.compareColleges.find(
          (item) => item.id === college.id
        );

      if (
        alreadyExists ||
        state.compareColleges.length >= 3
      ) {
        return state;
      }

      return {
        compareColleges: [
          ...state.compareColleges,
          college,
        ],
      };
    }),

  removeFromCompare: (id) =>
    set((state) => ({
      compareColleges:
        state.compareColleges.filter(
          (college) => college.id !== id
        ),
    })),
}));