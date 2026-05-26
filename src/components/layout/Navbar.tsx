export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            CampusCompare
          </h1>

          <p className="text-sm text-gray-500">
            Discover and compare colleges
          </p>
        </div>

        <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          Compare
        </button>
      </div>
    </nav>
  );
}