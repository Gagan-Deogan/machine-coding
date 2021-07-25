import React from "react";
import { Product } from "Types";

export const Card = ({ product }: { product: Product }) => {
  const {
    name,
    description,
    imageURl,
    discount,
    effectivePrice,
    price,
    sizes,
    brand,
  } = product;
  return (
    <article className="px-4 border">
      <img
        src={imageURl}
        alt={name}
        className="object-cover object-top h-80 w-full"
      />
      <h4 className="text-md text-gray-500">{name}</h4>
      <p className="text-gray-800 text-sm truncate ">{description}</p>
      <div className="flex items-center my-1">
        <h3 className="font-bold text-lg mr-2">${effectivePrice}</h3>
        <h4 className="text-sm text-gray-400 line-through mr-2">${price}</h4>
        <h4 className="text-sm font-bold text-green-400">{discount}%</h4>
      </div>
      <h3 className="text-gray-500">Size {sizes.join(", ")}</h3>
    </article>
  );
};
