import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth(Component) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (Component.name !== "LoginPage" && !token) {
      router.push("/login");
    }
  }, [Component, router]);
}
