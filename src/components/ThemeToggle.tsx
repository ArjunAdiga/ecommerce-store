"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  useEffect(() => {
     setTheme(localStorage.getItem("theme") || "dark");
  },[])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        localStorage.setItem("theme", isDark ? "light" : "dark");
      }}
      className="rounded-2xl border px-3 py-2  text-s hover:opacity-90"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
