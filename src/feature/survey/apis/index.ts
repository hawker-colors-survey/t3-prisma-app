import type { FoodKey, ColourKey } from "~/src/constants";

export type FoodSurveyStructure = {
  [key in FoodKey]: ColourKey;
};

export type Answers = Record<FoodKey, ColourKey>;
