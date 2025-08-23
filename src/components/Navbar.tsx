'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
// import { useCart } from '@/store/cart';

export default function Navbar() {
//   const count = useCart((state) => state.count);

  return (
    <nav className="flex justify-between items-center py-4 border-b border-border">
      <Link href="/">
        <div className="text-xl font-semibold">Mini E‑Commerce</div>
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/cart">
          <div className="relative px-3 py-1 rounded-md border hover:bg-muted transition">
            Cart
            {/* {count > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-primary-foreground text-background text-xs w-5 h-5 flex items-center justify-center font-bold">
                {count}
              </span>
            )} */}
          </div>
        </Link>
      </div>
    </nav>
  );
}
