import Link from 'next/link';
import Image from 'next/image';
import { Product } from './utils';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="rounded-2xl border p-3 hover:shadow-sm block">
      <div className="relative w-full h-48">
        <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-contain" />
      </div>
      <h3 className="mt-3 line-clamp-2 text-sm font-medium">{product.title}</h3>
      <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{product.category}</div>
    </Link>
  );
}