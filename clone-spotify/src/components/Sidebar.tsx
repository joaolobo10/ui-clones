import { Home as HomeIcon, Search, Library } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3  bg-red-500 rounded-full" />
        <div className="w-3 h-3  bg-yellow-500 rounded-full" />
        <div className="w-3 h-3  bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-2 text-sm font-smibold text-zinc-200"
        >
          <HomeIcon />
          home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-smibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-smibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-600 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk Generation
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Reggae Classics
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist
        </a>
      </nav>
    </aside>
  );
}
