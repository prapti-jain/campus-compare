"use client";

import { useCollegeStore } from "@/store/useCollegeStore";

export default function FiltersSidebar() {
  const {
    selectedLocation,
    selectedRating,
    setSelectedLocation,
    setSelectedRating,
  } = useCollegeStore();

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Filters
      </h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Location
          </label>

          <select
            value={selectedLocation}
            onChange={(e) =>
              setSelectedLocation(e.target.value)
            }
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none"
          >
            <option>All</option>
            <option>Delhi</option>
            <option>Rajasthan</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Rating
          </label>

          <select
            value={selectedRating}
            onChange={(e) =>
              setSelectedRating(e.target.value)
            }
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none"
          >
            <option>All</option>
            <option>4+</option>
            <option>4.5+</option>
          </select>
        </div>
      </div>
    </aside>
  );
}