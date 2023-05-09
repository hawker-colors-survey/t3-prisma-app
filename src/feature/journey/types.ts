import type { ColourKey, FoodDataType, FoodKey } from "~/src/constants";

export type PageStructure = {
  component: (props: IntroPageProps) => JSX.Element;
  key: PageKeys;
};

export type ValueOf<T> = Required<T>[keyof T];

export type IntroPageProps = {
  isLoading?: boolean;
  onNext: (payload?: ValueOf<IntroSurveyStructure>) => void;
  answers: Partial<IntroSurveyStructure>;
  onBack?: () => void;
  onSubmit?: (value: ValueOf<IntroSurveyStructure>) => void;
};

export type Actions =
  | {
      type: "NEXT";
      payload: Partial<IntroSurveyStructure>;
    }
  | { type: "BACK" };

export type ActionKeys = "NEXT" | "BACK";

export type IntroSurveyStructure = {
  favouriteDish: {
    food: FoodDataType;
    index: number;
    userId: string;
  };
  userId: string;
  firstSurvey: { food: FoodKey; colour: ColourKey };
  survey: FoodSurvey;
  year: string;
  frequency: number;
  location: string;
  isColourBlind: boolean;
  isHalal: boolean;
  ColourPreference: ColourKey;
};

export type FoodSurvey = Partial<{
  [key in FoodKey]: ColourKey;
}>;

type PageKeys = keyof IntroSurveyStructure | "";

export type JourneyStateStructure = {
  step: number;
  answers: Partial<IntroSurveyStructure>;
};

export type AirtableRecordStructure = {
  year: string;
};

const preworkout = {
  year: "1969",
  frequency: 5,
  location: "North East",
  userId: "15c1d735-b963-44a0-a237-e68c0c34e8ab",
  "Chicken Chop": "Black",
};

const postworkout = {
  year: "1969",
  frequency: 5,
  location: "North East",
  userId: "15c1d735-b963-44a0-a237-e68c0c34e8ab",
  "Chicken Chop": "Black",
  "Wanton Mee": "Black",
  "Roti Prata": "Lemon",
  "Hainanese Chicken Rice": "Red",
  "Roast Meat Rice": "Lemon",
  Laksa: "Black",
};
