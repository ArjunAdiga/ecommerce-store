import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from 'src/components/Navbar';

export const metadata: Metadata = {
  title: 'Mini E‑Commerce Dashboard',
  description: 'Frontend assignment built with Next.js and TypeScript.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container-max py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}