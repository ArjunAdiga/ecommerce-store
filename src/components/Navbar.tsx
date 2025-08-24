"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container-max py-4">
        <p  style={{fontSize:"36px",fontWeight:600, margin:"0px"}} className="text-black dark:text-white">
          Ecommerce
        </p>
        <nav className="flex items-center justify-between w-full rounded-2xl border px-6 py-3 bg-card mt-2 shadow-sm">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6 flex-row font-medium text-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link
                href="/cart"
                className="hover:text-primary transition-colors"
              >
                Cart
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
