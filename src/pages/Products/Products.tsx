import { products } from "../../data";
import React from "react";
import { RigthContent } from "./RigthContent";
import { useFilter } from "../../hooks/filter.hook";
import { LeftContent } from "./LeftContent";
export const Products = () => {
  const {
    filterProducts,
    sortBy,
    selectedSize,
    selectedBrand,
    selectedIdealFor,
    filterDispatch,
  } = useFilter({
    products,
  });
  return (
    <>
      <main className="bg-gray-100 flex">
        <LeftContent
          selectedSize={selectedSize}
          selectedBrand={selectedBrand}
          selectedIdealFor={selectedIdealFor}
          filterDispatch={filterDispatch}
        />
        <RigthContent
          products={filterProducts}
          sortBy={sortBy}
          filterDispatch={filterDispatch}
        />
      </main>
    </>
  );
};
