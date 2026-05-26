"use client";

import { useCollegeStore } from "@/store/useCollegeStore";

export default function FiltersSidebar() {
  const {
    selectedLocation,
    selectedRating,
    setSelectedLocation,
    setSelectedRating,
  } = useCollegeStore();

  const locations = [
    "Delhi",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
    "Telangana",
  ];

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
            <option value="All">All</option>

            {locations.map((location) => (
              <option
                key={location}
                value={location}
              >
                {location}
              </option>
            ))}
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
            <option value="All">All</option>
            <option value="4+">4+</option>
            <option value="4.5+">4.5+</option>
          </select>
        </div>
      </div>
    </aside>
  );
}