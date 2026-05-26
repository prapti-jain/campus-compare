"use client";
import Link from "next/link";


import { useCollegeStore } from "@/store/useCollegeStore";
interface Props {
  college: {
    id: number;
    name: string;
    location: string;
    rating: number;
    fees: string;
    placements: string;
    image: string;
  };
}

export default function CollegeCard({ college }: Props) {
    const addToCompare = useCollegeStore(
  (state) => state.addToCompare
);
  return (
    
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={college.image}
        alt={college.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              {college.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {college.location}
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            ⭐ {college.rating}
          </div>
        </div>

        <div className="mt-5 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">Fees:</span>{" "}
            {college.fees}
          </p>

          <p>
            <span className="font-medium">
              Avg Placement:
            </span>{" "}
            {college.placements}
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <div className="mt-6 flex gap-3">

  <Link
    href={`/college/${college.id}`}
    className="flex-1 rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800"
  >
    View Details
  </Link>

  <button
    onClick={() => addToCompare(college)}
    className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
  >
    Compare
  </button>

</div>

          
        </div>
      </div>
    </div>
  );
}