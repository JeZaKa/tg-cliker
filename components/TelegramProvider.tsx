"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Telegram?: any;
  }
}

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.expand(); // Разворачиваем Web App
      setTheme(tg.colorScheme === "dark" ? "dark" : "light");
    }
  }, []);

  return <div className={theme}>{children}</div>;
}
