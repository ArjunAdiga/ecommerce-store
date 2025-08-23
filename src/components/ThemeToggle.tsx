'use client';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-2xl border px-3 py-2 text-sm hover:opacity-90"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
}