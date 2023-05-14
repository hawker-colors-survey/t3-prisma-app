import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ColourKey, FoodKey } from "~/src/constants";
import {
  FirstIntroEssay,
  FavouriteDish,
  FirstSurvey,
  SecondIntroEssay,
  Quiz,
  AgeSurvey,
  FrequencySurvey,
  LocationSurvey,
  ThirdIntroEssay,
  HalalSurvey,
  SurveyText,
  SurveyStart,
  FourthIntroEssay,
  ColourPreference,
} from "~/src/essays/intro";
import type { ColourPref, ProfileTraits } from "~/src/feature/profile";
import type { FoodSurveyStructure } from "~/src/feature/survey";
import type { ValueOf } from "~/src/utils/types";

const Survey = dynamic(
  () => import("~/src/feature/survey").then((res) => res.Survey),
  { ssr: false }
);

export type AnswersStructure = ProfileTraits & {
  survey: Partial<FoodSurveyStructure>;
};

export type IntroAnswersStructure = AnswersStructure & { dish: FoodKey } & {
  dishColour: ColourKey;
};
export type IntroPageKey = keyof IntroAnswersStructure | "";

export type IntroPageProps = {
  isLoading?: boolean;
  onNext: (payload?: ValueOf<IntroAnswersStructure>) => void;
  answers?: Partial<IntroAnswersStructure>;
  onSubmit?: (payload: Partial<FoodSurveyStructure> | ColourPref) => void;
};

export type IntroPageStructure = {
  component: ComponentType<IntroPageProps>;
  key: IntroPageKey;
};

export const pages: IntroPageStructure[] = [
  // { component: FirstIntroEssay, key: "" },
  // { component: FavouriteDish, key: "dish" },
  // { component: FirstSurvey, key: "dishColour" },
  // { component: SecondIntroEssay, key: "" },
  // { component: Quiz, key: "" },
  // { component: AgeSurvey, key: "age" },
  // { component: FrequencySurvey, key: "frequency" },
  // { component: LocationSurvey, key: "location" },
  // { component: ThirdIntroEssay, key: "isColourBlind" },
  // { component: HalalSurvey, key: "isHalal" },
  // { component: SurveyText, key: "" },
  // { component: SurveyStart, key: "" },
  { component: Survey, key: "survey" },
  // { component: FourthIntroEssay, key: "" },
  // { component: ColourPreference, key: "colourPreference" },
];
