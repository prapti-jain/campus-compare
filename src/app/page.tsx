import CompareTray from "@/components/compare/compareTray";
import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/filters/SearchBar";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import CollegeGrid from "@/components/college/CollegeGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <CompareTray />

      <section className="mx-auto max-w-7xl px-6 py-10 pb-40">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FiltersSidebar />

          <CollegeGrid />
        </div>
      </section>
    </main>
  );
}