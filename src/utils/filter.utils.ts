import { Products, Size, Brand, Sex } from "./../Types";
export const sortProducts: any = (products: Products, sortBy: "HL" | "LH") => {
  if (sortBy === "HL") {
    return products.sort(
      (productA, productB) => productB.effectivePrice - productA.effectivePrice
    );
  }
  if (sortBy === "LH") {
    return products.sort(
      (productA, productB) => productA.effectivePrice - productB.effectivePrice
    );
  }
  return products;
};
export const getFilterBySelectedSize: any = (
  products: Products,
  selectedSize: Size | ""
) => {
  if (selectedSize !== "") {
    return products.filter((product) => {
      return product.sizes.includes(selectedSize);
    });
  }
  return products;
};

export const getFilterByBrand: any = (
  products: Products,
  selectedBrand: Brand | ""
) => {
  if (selectedBrand !== "") {
    return products.filter((product) => product.brand === selectedBrand);
  }
  return products;
};

export const getFilterByIdealFor: any = (
  products: Products,
  selectedIdealFor: Sex | ""
) => {
  if (selectedIdealFor !== "") {
    return products.filter((product) => product.idealFor === selectedIdealFor);
  }
  return products;
};
