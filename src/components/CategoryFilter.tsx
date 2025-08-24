'use client';
import { useEffect, useState } from 'react';

export default function CategoryFilter({ categories, onChange }: { categories: string[]; onChange: (v: string | null) => void; }) {
  const [value, setValue] = useState<string>('');

  useEffect(() => { onChange(value || null); }, [value, onChange]);

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="rounded-2xl border px-3 py-2 bg-background"
    >
      <option value="">All categories</option>
      {categories?.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}