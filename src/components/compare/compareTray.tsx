"use client";

import Link from "next/link";
import { useCollegeStore } from "@/store/useCollegeStore";

export default function CompareTray() {
  const compareColleges = useCollegeStore(
    (state) => state.compareColleges
  );

  const removeFromCompare = useCollegeStore(
    (state) => state.removeFromCompare
  );

  if (compareColleges.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[92%] max-w-2xl -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-semibold">
            Compare Colleges
          </h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {compareColleges.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {college.name}

                <button
                  onClick={() =>
                    removeFromCompare(college.id)
                  }
                  className="text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/compare"
          className="rounded-xl bg-black px-4 py-2 text-center text-sm font-medium text-white"
        >
          Compare Now
        </Link>
      </div>
    </div>
  );
}