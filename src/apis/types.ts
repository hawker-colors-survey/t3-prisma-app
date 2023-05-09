import type { ColourKey } from "~/src/constants";

export type FoodKey =
  | "Bak Chor Mee"
  | "Ban Mian"
  | "Carrot Cake"
  | "Char Kway Teow"
  | "Chendol"
  | "Chicken Chop"
  | "Chicken Teriyaki Don"
  | "Economic Rice"
  | "Fishball Noodles"
  | "Guo Tie"
  | "Hainanese Chicken Rice"
  | "Hokkien Mee"
  | "Indian Rojak"
  | "Kaya Toast and Eggs"
  | "Kway Chap"
  | "Laksa"
  | "Mala Xiang Guo"
  | "Mee Goreng"
  | "Mee Rebus"
  | "Nasi Briyani"
  | "Nasi Lemak"
  | "Oyster Omelette"
  | "Prawn Noodles"
  | "Roast Meat Rice"
  | "Roti Prata"
  | "Satay"
  | "Sliced Fish Soup"
  | "Sup Kambing"
  | "Wanton Mee"
  | "Yong Tau Foo";

export type FoodDataType = {
  name: FoodKey;
  isHalal: boolean;
  recordId: string;
  file: string;
  colours: ColourKey[];
};

export type ResponseStructure = {
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
  ColourPreference: ColourPref;
};

export type ColourPref = "white" | "coloured";
