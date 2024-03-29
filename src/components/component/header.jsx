import { Button } from "@/components/ui/button";
import { MessageSquareWarning, Type } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="px-4 flex items-center justify-between h-[54px] md:px-6">
        <Link className="flex items-center space-x-2" href="#">
          <Type className="w-6 h-6 rounded-lg bg-gradient-to-tr from-rose-500 to-rose-400" />
          <span className="text-lg font-semibold">Txttok</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm font-medium leading-none rounded-lg hover:bg-gray-100/40 dark:hover:bg-gray-800/40"
            href="/"
          >
            @Zhuzhu
          </Link>
          <Link href="/create_subject">
            <Button size="sm">
              <MessageSquareWarning className="mr-2 h-4 w-4" /> 呐喊
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
