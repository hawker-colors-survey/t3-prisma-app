import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import type { Survey as SurveySchema } from "@prisma/client";

import type { FoodFile } from "~/src/constants";
import { type ValueOf } from "~/src/utils";
import type { HawkerSession } from "~/src/hooks";

import { pages } from "../pages";
import type { IntroStructure } from "../types";
import { type ColourPref, useProfile } from "../apis";
import { type SurveyAnswers, useSurvey } from "../../survey";

export type PartialAnswers = Partial<IntroStructure>;
export type PartialSurvey = Partial<Omit<SurveySchema, "id">>;
export type SurveyValues = ValueOf<IntroStructure>;

type IntroPages = {
  session: HawkerSession | null | undefined;
};

export function IntroPages({ session }: IntroPages) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PartialAnswers>({});
  const [survey, setSurvey] = useState<SurveyAnswers>({} as SurveyAnswers);
  const [firstTime, setFirstTime] = useState(true);

  const {
    profile,
    isLoading: isProfileLoading,
    updateProfile,
  } = useProfile({ session });

  const { isLoading: isSurveyLoading, updateSurvey } = useSurvey({ profile });

  useEffect(() => {
    if (!profile || !firstTime) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, userId, surveyId, step, ...answers } = profile;
    setStep(step);
    setAnswers(answers);
    if (step > 2) {
      setSurvey({
        [answers.dish as FoodFile]: answers.dishColour,
      } as SurveyAnswers);
    }
    setFirstTime(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, firstTime]);

  const { component: Page, key = "" } = pages[step] ?? {};
  if (!Page) return <>Page Not Found</>;

  function handleNext(value?: SurveyValues) {
    const newStep = step + 1;
    if (value === undefined) {
      updateProfile({ step: newStep, userId: session?.user.id || "" });
      setStep(newStep);
      return;
    }
    const newAnswers: PartialAnswers = { ...answers, [key]: value };

    if (key === "dishColour") {
      const initialSurvey = {
        [answers.dish as FoodFile]: value,
      } as SurveyAnswers;
      updateSurvey({ ...initialSurvey, id: profile?.surveyId || 0 });
      setSurvey(initialSurvey);
    }

    setStep(newStep);
    setAnswers(newAnswers);
    updateProfile({
      ...newAnswers,
      step: newStep,
      userId: session?.user.id || "",
    });
  }

  async function handleSubmit(value: SurveyAnswers | ColourPref) {
    if (key === "survey") {
      const payload = { ...survey, ...(value as SurveyAnswers) };
      const surveyId = profile?.surveyId || 0;
      await updateSurvey({ ...payload, id: surveyId });
      setSurvey(payload);
    }
    if (key === "colourPreference") {
      updateProfile({
        ...answers,
        colourPreference: value as ColourPref,
        step: step + 1,
        userId: session?.user.id || "",
      });
    }
    setStep(step + 1);
  }

  return (
    <Box
      style={{
        height: "100dvh",
        minHeight: "-webkit-fill-available",
        maxHeight: "-webkit-fill-available",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Page
        isLoading={isProfileLoading || isSurveyLoading}
        onNext={handleNext}
        answers={answers}
        survey={survey}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

// function constructAnswers({
//   key,
//   answers,
//   value,
// }: {
//   key: keyof IntroStructure | "";
//   answers: PartialAnswers;
//   value: PartialSurvey | ColourPref;
// }) {
//   switch (key) {
//     case "survey": {
//       const survey = value as PartialSurvey;
//       const payload = Object.keys(survey).reduce((acc, key) => {
//         const thisFile = key as unknown as FoodFile;
//         const { file = "" } = foods.find((food) => food.file == thisFile) ?? {};
//         return { ...acc, [file]: survey[thisFile] as ColourKey };
//       }, {});

//       return { ...answers.survey, ...payload };
//     }
//     case "colourPreference": {
//       value as ColourPref;
//     }
//   }
// }
