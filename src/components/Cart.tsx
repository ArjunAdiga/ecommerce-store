"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./utils";
import broken from "../../public/broken.jpg"
import Image from "next/image";

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    } 
  }, []);
  useEffect(() => {
     if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  }, [cart]);
  const updateQuantity = (id: number, qty: number) => {
  setCart((prev) => {
    const updated = prev
      .map((p) =>
        p.id === id
          ? {
              ...p,
              quantity: Math.min(Math.max(qty, 0), p.rating?.count || 99),
            }
          : p
      )
      .filter((p) => (p.quantity ?? 0) > 0);

    localStorage.setItem("cart", JSON.stringify(updated));
    return updated;
  });
};

  const totalCost = cart?.reduce(
    (sum, p) => sum + p.price * (p.quantity ?? 1),
    0
  );
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cart?.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border p-4 flex flex-col hover:shadow-sm"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product?.image || broken}
                  alt={product?.title || "Product title"}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-3 line-clamp-2 text-sm font-medium">
                {product.title}
              </h3>
              <div className="mt-2 font-semibold">
                ${product.price.toFixed(2)}
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button
                  className="px-3 py-1 rounded-2xl border hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() =>
                    updateQuantity(product.id, (product.quantity ?? 1) - 1)
                  }
                >
                  -
                </button>
                <span className="font-medium">{product.quantity ?? 1}</span>
                <button
                  className="px-3 py-1 rounded-2xl border hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() =>
                    updateQuantity(product.id, (product.quantity ?? 1) + 1)
                  }
                >
                  +
                </button>
              </div>

              {product.rating?.count && (
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  In stock: {product?.rating?.count}
                </p>
              )}
            </div>
          ))}
        </div>

        {cart?.length > 0 ? (
          <div className="mt-8 flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${totalCost?.toFixed(2)}</span>
          </div>
        ) : (
          <p className="mt-8 text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
