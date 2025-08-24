'use client';
import { useState, useEffect } from 'react';

export default function SearchBar({ onChange }: { onChange: (v: string) => void }) {
  const [q, setQ] = useState('');
  useEffect(() => {
    const t = setTimeout(() => onChange(q), 250);
    return () => clearTimeout(t);
  }, [q, onChange]);

  return (
    <input
      type="search"
      placeholder="Search products…"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      className="w-full md:w-80 rounded-2xl border px-3 py-2 bg-background"
    />
  );
}