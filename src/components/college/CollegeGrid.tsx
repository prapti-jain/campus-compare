"use client";

import CollegeCard from "./CollegeCard";

import { useCollegeStore } from "@/store/useCollegeStore";
import EmptyState from "@/components/states/EmptyState";

import { useEffect, useState } from "react";
import CollegeCardSkeleton from "@/components/states/CollegeCardSkeleton";

export default function CollegeGrid() {
  const {
    searchQuery,
    selectedLocation,
    selectedRating,
  } = useCollegeStore();

  const [loading, setLoading] = useState(true);

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    async function fetchColleges() {
      try {
        const response = await fetch("/api/colleges");

        const data = await response.json();

        setColleges(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter(
    (college: any) => {
      const matchesSearch =
        college.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        college.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === "All" ||
        college.location === selectedLocation;

      const matchesRating =
        selectedRating === "All" ||
        college.rating >=
          parseFloat(
            selectedRating.replace("+", "")
          );

      return (
        matchesSearch &&
        matchesLocation &&
        matchesRating
      );
    }
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CollegeCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (filteredColleges.length === 0) {
    return (
      <EmptyState
        title="No colleges found"
        description="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredColleges.map((college: any) => (
        <CollegeCard
          key={college.id}
          college={college}
        />
      ))}
    </div>
  );
}