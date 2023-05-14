import type { ColourKey, FoodKey } from "~/src/constants";

export type AirtableResponse = {
  id: string;
  createdTime: string;
  fields: FieldsStructure;
};

type Foods = {
  [K in FoodKey]: ColourKey;
};

export type FieldsStructure = Foods & {
  userId: string;
  year: string;
  location: string;
  frequency: number;
  isHalal: boolean;
  isColourBlind: boolean;
  colourPreference: ColourPref;
};

export type ColourPref = "white" | "coloured";
