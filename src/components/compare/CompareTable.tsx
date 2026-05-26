"use client";

import { useCollegeStore } from "@/store/useCollegeStore";

export default function CompareTable() {
  const compareColleges = useCollegeStore(
    (state) => state.compareColleges
  );

  if (compareColleges.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
        No colleges selected for comparison.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-[700px] w-full border-collapse">
        <thead>
          <tr className="border-b bg-slate-50">
            <th className="p-5 text-left text-sm font-semibold text-gray-600">
              Metric
            </th>

            {compareColleges.map((college) => (
              <th
                key={college.id}
                className="p-5 text-left"
              >
                <div className="space-y-2">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-32 w-full rounded-2xl object-cover"
                  />

                  <h2 className="text-lg font-semibold">
                    {college.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {college.location}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-5 font-medium">
              Rating
            </td>

            {compareColleges.map((college) => (
              <td
                key={college.id}
                className="p-5"
              >
                ⭐ {college.rating}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-5 font-medium">
              Fees
            </td>

            {compareColleges.map((college) => (
              <td
                key={college.id}
                className="p-5"
              >
                {college.fees}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-5 font-medium">
              Avg Placement
            </td>

            {compareColleges.map((college) => (
              <td
                key={college.id}
                className="p-5"
              >
                {college.placements}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}