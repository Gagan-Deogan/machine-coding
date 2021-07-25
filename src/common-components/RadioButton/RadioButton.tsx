import React from "react";

export const RadioButton = ({
  name,
  value,
  handleClick,
  checked,
}: {
  name: string;
  value: string;
  handleClick: Function;
  checked: boolean;
}) => {
  return (
    <>
      <section className="flex items-center justify-between">
        <label htmlFor={value} className="font-bold">
          {value}
        </label>
        <input
          type="radio"
          id={value}
          name={value}
          value={value}
          checked={checked}
          onChange={() => handleClick(value)}></input>
      </section>
    </>
  );
};
