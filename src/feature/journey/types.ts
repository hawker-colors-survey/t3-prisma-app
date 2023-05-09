import type { ColourPref } from "~/src/apis";
import type { ColourKey, FoodDataType, FoodKey } from "~/src/constants";

export type PageStructure = {
  component: (props: IntroPageProps) => JSX.Element;
  key: PageKeys | "";
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
      payload?: Partial<IntroSurveyStructure>;
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
  ColourPreference: ColourPref;
};

export type FoodSurvey = Partial<{
  [key in FoodKey]: ColourKey;
}>;

export type PageKeys = keyof IntroSurveyStructure;

export type JourneyStateStructure = {
  step: number;
  answers: Partial<IntroSurveyStructure>;
};
