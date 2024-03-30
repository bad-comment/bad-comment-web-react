import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token == null || token === "") {
      router.push("/login");
    }
  }, [router]);
}
