/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iPIAmOzZVMT
 */
import { Card, CardContent } from "@/components/ui/card";
import { TrophyIcon } from "../icon";

export function Me() {
  return (
    <div className="flex-1 grid place-items-center bg-gray-50 dark:bg-gray-950">
      <div className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome back, @shadcn!
              </p>
            </div>
            <Card className="w-full max-w-sm p-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    alt="@shadcn"
                    className="rounded-full"
                    height={96}
                    src="https://t13.baidu.com/it/u=1495488623,485816941&fm=58&app=83&size=w931&q=75&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width={96}
                  />
                  <div className="grid gap-0.5 text-sm">
                    <div className="font-bold">@shadcn</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Joined on January 1, 2023
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center flex items-center justify-center gap-4">
                  <TrophyIcon className="h-6 w-6" />
                  <h2 className="text-4xl font-extrabold tracking-tight leading-10">
                    100
                  </h2>
                </div>
                <div className="mt-2 text-center flex items-center justify-center gap-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reputation Score
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
