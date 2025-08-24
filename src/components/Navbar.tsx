"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Typography from "./Typography";
import { useTheme } from "next-themes";
// import { useCart } from '@/store/cart';

export default function Navbar() {
  // const count = useCart((s) => s.count);
    const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  return (
    <header className="border-b bg-background">
      <div className="container-max py-4">
        <Typography variant="h1" styles={{color: isDark ? "white" : "black"}}>Ecommerce</Typography>
        <nav className="flex items-center justify-between w-full rounded-2xl border px-6 py-3 bg-card mt-2 shadow-sm">
          <div className="flex items-center gap-6 flex-row font-medium text-foreground" style={{display:"flex"}}>
            <Link href="/" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Cart
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
