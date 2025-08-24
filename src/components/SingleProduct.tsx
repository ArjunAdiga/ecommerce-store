"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Product } from "./utils";
import Image from "next/image";
import broken from "../../public/broken.jpg"

const SingleProduct = () => {
  const id = usePathname()?.split("/").pop();
  const router=useRouter();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to refetch");
      const data: Product = await res.json();
      setProduct(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart=() => {
    if(localStorage.getItem("cart")){ 
       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
       localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
    else {
        localStorage.setItem("cart", JSON.stringify([product]));
    }
    router.push("/cart");
  }
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className=" mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-96 rounded-2xl border p-4 flex items-center justify-center">
              <Image
                src={product?.image || broken }
                alt={product?.title || "Product Image"}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">{product?.title}</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                {product?.category}
              </p>

              <div className="mt-4 text-3xl font-bold">
                ${product?.price.toFixed(2)}
              </div>
              <div className="mt-2 text-sm text-yellow-500">
                 {product?.rating?.rate} / 5 ({product?.rating?.count} reviews)
              </div>
              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {product?.description}
              </p>

              <button className="mt-8 w-full md:w-auto px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
