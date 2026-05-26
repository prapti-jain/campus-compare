import Navbar from "@/components/layout/Navbar";
import { mockColleges } from "@/data/mockColleges";
import Link from "next/link";
interface Props {
  params: {
    id: string;
  };
}

export default async function CollegeDetailPage({
  params,
}: Props) {
  const { id } = await params;

   const college = mockColleges.find(
    (item) => item.id === Number(id)
  );


  if (!college) {
    return (
      <div className="p-10 text-center">
        College not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
  href="/"
  className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 transition hover:text-black"
>
  ← Back to Home
</Link>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <img
            src={college.image}
            alt={college.name}
            className="h-[350px] w-full object-cover"
          />

          <div className="p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  {college.name}
                </h1>

                <p className="mt-2 text-gray-500">
                  {college.location}
                </p>
              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                ⭐ {college.rating}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">
                  Annual Fees
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {college.fees}
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">
                  Avg Placement
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {college.placements}
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">
                  Student Rating
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {college.rating}
                </h3>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-semibold">
                  Overview
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {college.name} is one of the leading
                  institutions known for academic
                  excellence, strong placements, and
                  student opportunities.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-semibold">
                  Popular Courses
                </h2>

                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Computer Science</li>
                  <li>• Electronics</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Data Science</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">
                Student Reviews
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-medium">
                    Great campus and placements.
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    — Student Review
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-medium">
                    Excellent coding culture and faculty.
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    — Student Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}