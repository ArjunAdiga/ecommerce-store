'use client';
import { useEffect, useState } from 'react';

export type Sort = 'price-asc' | 'price-desc' | '';

export default function SortSelect({ onChange }: { onChange: (v: Sort) => void }) {
  const [value, setValue] = useState<Sort>('');
  useEffect(() => { onChange(value); }, [value, onChange]);
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value as Sort)}
      className="rounded-2xl border px-3 py-2 bg-background"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
    </select>
  );
}