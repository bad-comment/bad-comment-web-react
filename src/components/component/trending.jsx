/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RyVRRmrEDSA
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { trendingService } from "../../services/trending";

export function Trending() {
  const [data, setData] = useState([]);

  async function load() {
    const data = await trendingService.kings();
    setData(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Card className="flex-1 w-full max-w-lg overflow-y-auto">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg">MPK @ Top 100</CardTitle>
        <CardDescription>Most Popular Kings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-32 space-y-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-6">
                  <span className="font-semibold">{index + 1}.</span>
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage
                      alt="Grace"
                      src="https://www.baidu.com/img/flexible/logo/pc/result.png"
                    />
                    <AvatarFallback>GR</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-semibold">张三{item.user_id}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    大王
                  </div>
                </div>
              </div>
              <div className="font-semibold text-sm w-12">{item.score}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
