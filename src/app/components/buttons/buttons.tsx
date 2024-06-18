"use client";
import { Context, ShopContext } from "@/app/context/shop-context";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {
  itemid: number;
};
export const Buttons = ({ itemid }: Props) => {
  const { addToCart, cartItems, removeFromCart } = useContext(
    ShopContext
  ) as Context;
  const cartItemCount = cartItems[itemid];
  return (
    <div className="flex items-center justify-between gap-2 ">
      <Link
        href="/"
        className="border border-solid border-zinc-800 p-3 rounded-lg"
      >
        continue Shopping
      </Link>
      {cartItemCount > 0 ? (
        <div className="flex gap-2 justify-center items-center p-[5px_0]">
          <button className="addToCartBttn" onClick={() => addToCart(itemid)}>
            +
          </button>
          <p className="text-xl">{cartItemCount}</p>
          <button
            onClick={() => removeFromCart(itemid)}
            className="addToCartBttn"
          >
            -
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => addToCart(itemid)}
            className="p-3 m-1 border-zinc-800 rounded-lg border-solid border"
          >
            add to cart
          </button>
        </div>
      )}
    </div>
  );
};
