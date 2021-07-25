export type Size = "S" | "M" | "L" | "XL";
export type Brand = "Puma" | "Lee Copper" | "Levis" | "Tommy Hilfiger";
export type Sex = "MEN" | "WOMEN";
export type Product = {
  name: string;
  description: string;
  imageURl: string;
  effectivePrice: number;
  discount: number;
  price: number;
  sizes: Size[];
  brand: Brand;
  idealFor: Sex;
};
export type Products = Product[];
