import { foods } from "~/src/constants";
import type { FilterOption, FoodOption } from "./reducer";

const locations: FilterOption[] = [
  { value: "any", label: "any" },
  { value: "Central", label: "the central" },
  { value: "South West", label: "the south west" },
  { value: "North West", label: "the north west" },
  { value: "South East", label: "the south east" },
  { value: "North East", label: "the north east" },
];

const ages: FilterOption[] = [
  { value: "any", label: "of all ages" },
  { value: "13-24", label: "from 13 to 24" },
  { value: "25-29", label: "from 25 to 29" },
  { value: "30-39", label: "from 30 to 39" },
  { value: "40-59", label: "from 40 to 59" },
  { value: "60", label: "60 and over" },
];

const foodOptions: FoodOption[] = foods.map((food) => ({
  label: food.name,
  value: food.file,
}));

const frequencies: FilterOption[] = [
  { value: "any", label: "any time" },
  { value: "0", label: "zero times" },
  { value: "1", label: "once" },
  { value: "2", label: "twice" },
  { value: "3", label: "thrice" },
  { value: "4", label: "four times" },
  { value: "5", label: "five times" },
  { value: "6", label: "six times" },
  { value: "7", label: "every day in" },
];

// const options = [ageOptions, areaOptions, frequencyOptions, foodOptions];
export { locations, ages, foodOptions as foods, frequencies };
