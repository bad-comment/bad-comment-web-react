import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const expiredTime = parseInt(
      localStorage.getItem("accessTokenExpiredTime")
    );

    if (expiredTime - 1000 * 60 <= Date.now()) {
      router.push("/login");
    }

    if (token == null || token === "") {
      router.push("/login");
    }
  }, [router]);
}
