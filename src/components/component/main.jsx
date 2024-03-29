/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/u9eoqnwLOcy
 */
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

export function Main() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main className="flex-1 overflow-y-auto">
        <div className="grid items-center justify-center h-[calc(100vh-3rem)]">
          <div className="flex flex-col gap-4 p-4 w-full md:gap-8 md:p-8">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height={40}
                  src="https://www.baidu.com/img/flexible/logo/pc/result.png"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width={40}
                />
                <div className="space-y-1.5">
                  <h2 className="text-base font-semibold">quibble</h2>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    2 hours ago
                  </time>
                </div>
              </Link>
            </div>
            <div className="prose prose-sm md:prose-lg xl:prose-xl dark:prose-invert">
              <p>
                In the kingdom of Faraway, there was a very strange law: the
                king had decreed that anyone caught whistling on a Tuesday would
                be thrown into the dungeon.
              </p>
              <p>
                At first, the people of the kingdom were puzzled by this law.
                Why would the king care if they whistled on a Tuesday? But being
                law-abiding citizens, they did their best to obey, and the
                streets of Faraway were silent every Tuesday.
              </p>
              <p>
                Then, one day, a young man named Aiden came to the kingdom. He
                was a musician, and he loved to whistle. No matter where he was,
                he was always
                <a href="#">whistling a merry tune</a>.
                {"\n                          "}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
