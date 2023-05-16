import dynamic from "next/dynamic";
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

import type { IntroPageStructure } from "./types";

const Survey = dynamic(
  () => import("~/src/feature/survey").then((res) => res.Survey),
  { ssr: false }
);

export const pages: IntroPageStructure[] = [
  { component: FirstIntroEssay, key: "" },
  { component: FavouriteDish, key: "dish" },
  { component: FirstSurvey, key: "dishColour" },
  { component: SecondIntroEssay, key: "" },
  { component: Quiz, key: "" },
  { component: AgeSurvey, key: "age" },
  { component: FrequencySurvey, key: "frequency" },
  { component: LocationSurvey, key: "location" },
  { component: ThirdIntroEssay, key: "isColourBlind" },
  { component: HalalSurvey, key: "isHalal" },
  { component: SurveyText, key: "" },
  { component: SurveyStart, key: "" },
  { component: Survey, key: "survey" },
  { component: FourthIntroEssay, key: "" },
  { component: ColourPreference, key: "colourPreference" },
];
