import type {
  Profile as ProfileSchema,
  Survey as SurveySchema,
} from "@prisma/client";
import type { ComponentType } from "react";

import type { ColourPref } from "~/src/feature/profile";
import type { ValueOf } from "~/src/utils/types";
import type { SurveyAnswers } from "../survey";

export type IntroStructure = Omit<ProfileSchema, "id" | "surveyId" | "userId">;

/**
 * This type showcases different behavior
 *
 * If onSubmit, the page wants wait for submission and to use the isLoading state.
 * Otherwise, use the onNext function to navigate to the next page. And synchronously post data to the database
 *
 */

export type IntroPageProps = {
  isLoading?: boolean;
  answers?: Partial<IntroStructure>;
  survey: Partial<SurveySchema>;
  onNext: (payload?: ValueOf<IntroStructure>) => void;
  onSubmit?: (payload: SurveyAnswers | ColourPref) => void;
};

export type IntroPageStructure = {
  component: ComponentType<IntroPageProps>;
  key: keyof IntroStructure | "" | "survey";
};
