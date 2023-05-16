import { type FoodKey, foods, type FoodFile } from "~/src/constants";

export const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return { ...state, ...action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

export type FilterState = {
  ageRange: FilterOption;
  area: FilterOption;
  frequency: FilterOption;
  food: FoodOption;
};

type FilterAction =
  | { type: "UPDATE_FILTER"; payload: Record<string, FilterOption> }
  | { type: "RESET" };

export type FoodOption = {
  value: FoodFile;
  label: FoodKey;
};

export type FilterOption = {
  value: string;
  label: string;
};

const foodOptions = foods.map((food) => ({
  label: food.name,
  value: food.file,
}));

export const initialState = {
  ageRange: { value: "any", label: "of all ages" },
  area: { value: "any", label: "any" },
  frequency: { value: "any", label: "any time" },
  food: foodOptions[0] as { label: FoodKey; value: FoodFile },
};

export const filters: (keyof FilterState)[] = [
  "ageRange",
  "area",
  "frequency",
  "food",
];
