import { BookOpen, CircleUserRound, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="border-t">
      <div className="grid grid-cols-3 items-center justify-center h-[58px] md:grid-cols-3">
        <Link className="flex flex-col items-center p-2 gap-1" href="/">
          <BookOpen className="w-6 h-6" />
          <span className="text-xs">评鉴</span>
        </Link>
        <Link className="flex flex-col items-center p-2 gap-1" href="/trending">
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs">Tok王</span>
        </Link>
        <Link className="flex flex-col items-center p-2 gap-1" href="/me">
          <CircleUserRound className="w-6 h-6" />
          <span className="text-xs">个人</span>
        </Link>
      </div>
    </nav>
  );
}
