import React from "react";
import { Size, Brand, Sex } from "../../Types";
import { RadioButton } from "../../common-components/RadioButton";

const sizes: Size[] = ["S", "M", "L", "XL"];
const brands: Brand[] = ["Puma", "Lee Copper", "Levis", "Tommy Hilfiger"];
const idealFor = ["MEN", "WOMEN"];

export const LeftContent = ({
  selectedSize,
  filterDispatch,
  selectedBrand,
  selectedIdealFor,
}: {
  selectedSize: Size | "";
  filterDispatch: Function;
  selectedBrand: Brand | "";
  selectedIdealFor: Sex | "";
}) => {
  const handleSizeChange = (size: Size) => {
    filterDispatch({ type: "SET_SIZE", payload: size });
  };
  const handleBrandChange = (brand: Brand) => {
    filterDispatch({ type: "SET_BRAND", payload: brand });
  };
  const handleSexChange = (sex: Sex) => {
    filterDispatch({ type: "SET_IDEAL_FOR", payload: sex });
  };
  return (
    <aside className="w-1/6 bg-white mr-2 p-4">
      <div className="flex justify-between">
        <h2>Filter</h2>
        <button onClick={() => filterDispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      </div>
      <h4 className="mt-2">Select Sizes</h4>
      <form className="flex flex-col">
        {sizes.map((size) => (
          <RadioButton
            key={size}
            checked={selectedSize === size}
            handleClick={handleSizeChange}
            value={size}
            name="size"
          />
        ))}
      </form>
      <h4 className="mt-2">Select Brand</h4>
      <form className="flex flex-col">
        {brands.map((brand) => (
          <RadioButton
            key={brand}
            checked={selectedBrand === brand}
            handleClick={handleBrandChange}
            value={brand}
            name="brand"
          />
        ))}
      </form>
      <h4 className="mt-2">Ideal For</h4>
      <form className="flex flex-col">
        {idealFor.map((sex) => (
          <RadioButton
            key={sex}
            checked={selectedIdealFor === sex}
            handleClick={handleSexChange}
            value={sex}
            name="sex"
          />
        ))}
      </form>
    </aside>
  );
};
