import Navbar from "@/components/layout/Navbar";
import CompareTable from "@/components/compare/CompareTable";

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Compare Colleges
          </h1>

          <p className="mt-2 text-gray-500">
            Evaluate colleges side by side.
          </p>
        </div>

        <CompareTable />
      </section>
    </main>
  );
}