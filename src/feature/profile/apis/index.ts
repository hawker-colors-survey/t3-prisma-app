export type ProfileTraits = {
  userId: string;
  age: string;
  frequency: number;
  location: string;
  isColourBlind: boolean;
  isHalal: boolean;
  colourPreference: ColourPref;
};

export type ColourPref = "white" | "coloured";
