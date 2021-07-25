import React from "react";
import { Products } from "../../Types";
import { Card } from "../../common-components/Card";

export const RigthContent = ({
  products,
  sortBy,
  filterDispatch,
}: {
  products: Products;
  sortBy: "HL" | "LH" | "";
  filterDispatch: Function;
}) => {
  return (
    <>
      <section className="bg-white w-5/6 p-4">
        <section className="flex">
          <h3 className="text-md font-bold mr-4">Sort By</h3>
          <button
            className={`mr-4 ${sortBy === "LH" ? "text-blue-700" : ""} `}
            onClick={() => filterDispatch({ type: "SORT_BY", payload: "LH" })}>
            Price -- Low to High
          </button>
          <button
            className={`${sortBy === "HL" ? "text-blue-700" : ""} `}
            onClick={() => filterDispatch({ type: "SORT_BY", payload: "HL" })}>
            Price -- High to Low
          </button>
        </section>
        <section className=" grid grid-cols-4 gap-2">
          {products.map((product) => (
            <Card product={product} />
          ))}
        </section>
      </section>
    </>
  );
};
