"use client";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import { GridSkeleton } from "./Skeletons";
import { Product } from "./utils";
import SearchBar from "./SearchBar";
import SortSelect, { Sort } from "./SortSelect";
import RetryError from "./RetryError";

export default function ProductGrid() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("");
  const [categories, setCategories] = useState<string[]>();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to refetch");    
      const data: Product[] = await res.json();
      const unique = Array.from(new Set(data.map(item => item?.category)));
       setCategories(unique);
      setProducts(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to refetch");
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    let list = [...(products ?? [])];
    if (q)
      list = list.filter((p) =>
        p.title.toLowerCase().includes(q.toLowerCase())
      );
    if (cat) list = list.filter((p) => p.category === cat);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, q, cat, sort]);

  if (loading) return <GridSkeleton />;
  if (error) return <RetryError onRetry={refetch} />;

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <SearchBar onChange={setQ} />
        <div className="flex gap-3">
          <CategoryFilter categories={categories || []} onChange={setCat} />
          <SortSelect onChange={setSort} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
