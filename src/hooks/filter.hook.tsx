import React, { useReducer } from "react";
import { Products } from "../Types";
import {
  sortProducts,
  getFilterBySelectedSize,
  getFilterByBrand,
  getFilterByIdealFor,
} from "../utils/filter.utils";
import { reducer, initialState } from "./reducer";

export const useFilter = ({ products }: { products: Products }) => {
  const [
    { sortBy, selectedSize, selectedBrand, selectedIdealFor },
    filterDispatch,
  ] = useReducer(reducer, initialState);

  const sortedProducts: Products = sortProducts(products, sortBy);

  const filterByBrand: Products = getFilterByBrand(
    sortedProducts,
    selectedBrand
  );
  const filterByIdealFor: Products = getFilterByIdealFor(
    filterByBrand,
    selectedIdealFor
  );
  const filterProducts = getFilterBySelectedSize(
    filterByIdealFor,
    selectedSize
  );

  return {
    sortBy,
    selectedSize,
    selectedBrand,
    selectedIdealFor,
    filterProducts,
    filterDispatch,
  };
};
