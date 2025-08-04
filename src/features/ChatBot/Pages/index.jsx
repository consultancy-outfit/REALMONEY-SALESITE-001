"use client";
import { useEffect } from "react";
import { FullSize } from "../FullSize";
import { AuthGuard } from "../guard/auth-guard";

export default function ChatBotFullSize() {
  useEffect(() => {
    window?.history?.pushState(null, "", window?.location?.href);
    const handlePopState = () => {
      window?.history?.pushState(null, "", window?.location?.href);
    };

    window?.addEventListener("popstate", handlePopState);

    return () => {
      window?.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <AuthGuard>
      <FullSize />
    </AuthGuard>
  );
}
