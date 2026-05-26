"use client";

import { useCollegeStore } from "@/store/useCollegeStore";

export default function SearchBar() {
  const searchQuery = useCollegeStore(
    (state) => state.searchQuery
  );

  const setSearchQuery = useCollegeStore(
    (state) => state.setSearchQuery
  );

  return (
    <div className="w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value)
        }
        placeholder="Search colleges, cities, courses..."
        className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm shadow-sm outline-none transition focus:border-black"
      />
    </div>
  );
}