import { Size, Brand, Sex } from "../Types";
type InitialState = {
  sortBy: "" | "HL" | "LH";
  selectedSize: Size | "";
  selectedBrand: Brand | "";
  selectedIdealFor: Sex | "";
};
type Action =
  | {
      type: "SORT_BY";
      payload: "HL" | "LH";
    }
  | {
      type: "SET_SIZE";
      payload: Size;
    }
  | {
      type: "SET_BRAND";
      payload: Brand;
    }
  | {
      type: "SET_IDEAL_FOR";
      payload: Sex;
    }
  | { type: "CLEAR_ALL" };

export const initialState: InitialState = {
  sortBy: "",
  selectedSize: "",
  selectedBrand: "",
  selectedIdealFor: "",
};

export function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_SIZE":
      return {
        ...state,
        selectedSize: action.payload,
      };
    case "SET_BRAND":
      return {
        ...state,
        selectedBrand: action.payload,
      };
    case "SET_IDEAL_FOR":
      return {
        ...state,
        selectedIdealFor: action.payload,
      };
    case "CLEAR_ALL":
      return initialState;
  }
}
