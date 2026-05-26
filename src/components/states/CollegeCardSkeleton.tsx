export default function CollegeCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="h-52 w-full bg-gray-300" />

      <div className="p-5">
        <div className="h-6 w-2/3 rounded bg-gray-300" />

        <div className="mt-3 h-4 w-1/3 rounded bg-gray-300" />

        <div className="mt-6 space-y-3">
          <div className="h-4 rounded bg-gray-300" />
          <div className="h-4 rounded bg-gray-300" />
        </div>

        <div className="mt-6 flex gap-3">
          <div className="h-11 flex-1 rounded-xl bg-gray-300" />

          <div className="h-11 w-24 rounded-xl bg-gray-300" />
        </div>
      </div>
    </div>
  );
}