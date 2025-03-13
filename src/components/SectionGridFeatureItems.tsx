import React, { FC } from "react";
import HeaderFilterSection from "@/components/HeaderFilterSection";
import ProductCard from "@/components/ProductCard";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
// import { Product, PRODUCTS } from "@/data/data";

//
export interface SectionGridFeatureItemsProps {
  data?: any[];
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  data = [],
}) => {
  // console.log("DATA", data);
  return (
    <div className="nc-SectionGridFeatureItems relative">
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {data.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>

    </div>
  );
};

export default SectionGridFeatureItems;
