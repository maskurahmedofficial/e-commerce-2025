"use client";
import { useCart } from "@/app/context/CartContext";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { toast } from "react-toastify";

const ShopCartBtn = ({ data }) => {

  const { addToCart } = useCart()

  return (
    <div className="flex items-center gap-2">
      <div className="h-12 bg-brand w-fit px-4 py-2 rounded-lg cursor-pointer">
        <button onClick={() => (
          addToCart(data, 1), toast.success("Product added to cart")
        )} className="text-lg font-bold text-white rounded-lg cursor-pointer">Add to cart</button>
      </div>
    </div>
  );
};

export default ShopCartBtn;
