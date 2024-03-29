import Link from "next/link";
import { HomeIcon, SearchIcon, TextIcon } from "../icon";

export default function Footer() {
  return (
    <nav className="border-t">
      <div className="grid grid-cols-3 items-center justify-center h-[56px] md:grid-cols-5">
        <Link className="flex flex-col items-center p-2 gap-1" href="/">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Play</span>
        </Link>
        <Link className="flex flex-col items-center p-2 gap-1" href="/trending">
          <TextIcon className="w-6 h-6" />
          <span className="text-xs">Trending</span>
        </Link>
        <Link className="flex flex-col items-center p-2 gap-1" href="/me">
          <SearchIcon className="w-6 h-6" />
          <span className="text-xs">Me</span>
        </Link>
      </div>
    </nav>
  );
}
