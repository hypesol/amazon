"use client";

import React, { FC, useState } from "react";

import Prices from "./Prices";

import ModalQuickView from "./ModalQuickView";
import ProductStatus from "./ProductStatus";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NcImage from "@/shared/NcImage/NcImage";

export interface ProductCardProps {
  className?: string;
  data?: any;
  isLiked?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  className = "",
  data
}) => {
  const {
    id,
    product_name,
    image_url,
    merchant_name,
    price,
    product_category,
    product_description,
    tracking_url,
  } = data;

// console.log("DDDD", data)
  const [showModalQuickView, setShowModalQuickView] = useState(false);
  const router = useRouter();

  const getBorderClass = (Bgclass = "") => {
    if (Bgclass.includes("red")) {
      return "border-red-500";
    }
    if (Bgclass.includes("violet")) {
      return "border-violet-500";
    }
    if (Bgclass.includes("orange")) {
      return "border-orange-500";
    }
    if (Bgclass.includes("green")) {
      return "border-green-500";
    }
    if (Bgclass.includes("blue")) {
      return "border-blue-500";
    }
    if (Bgclass.includes("sky")) {
      return "border-sky-500";
    }
    if (Bgclass.includes("yellow")) {
      return "border-yellow-500";
    }
    return "border-transparent";
  };




  return (
    <>
      <div
        className={`nc-ProductCard relative flex flex-col bg-transparent ${className}`}
      >
        <Link href={"/product-detail"} className="absolute inset-0"></Link>

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
          <Link href={"/product-detail"} className="block">
            <NcImage
              containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
              src={image_url}
              className="object-cover w-full h-full drop-shadow-xl"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              alt="product"
            />
          </Link>

        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5">

          <div>
            <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
              {product_name}
            </h2>
            {/* <p className={`text-sm text-slate-500 dark:text-slate-400 mt-1 `}>
              {description}
            </p> */}
          </div>

          <div className="flex justify-between items-end ">
            <Prices price={price} />
          </div>
        </div>
      </div>


      <ModalQuickView
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
