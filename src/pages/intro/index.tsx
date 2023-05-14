/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Box } from "@mantine/core";

import { api } from "~/src/utils/api";
import type { ValueOf } from "~/src/utils/types";
import type { ColourPref } from "~/src/feature/profile";
import { type FoodSurveyStructure } from "~/src/feature/survey";

import { type IntroAnswersStructure, pages, type IntroPageKey } from "./pages";
import { type ColourKey, type FoodKey, foods } from "~/src/constants";

export default function IntroPages() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<IntroAnswersStructure>>({});

  const { isLoading: isProfileLoading, mutate: updateProfile } =
    api.profile.postProfile.useMutation();
  const { isLoading: isSurveyLoading, mutate: updateSurvey } =
    api.survey.postSurvey.useMutation({
      onSuccess: (data) => {
        console.log("survey uploaded", { data });
        return data;
      },
    });

  const { component: Page, key = "" } = pages[step] ?? {};
  if (!Page) return <>Page Not Found</>;

  function handleNext(value?: ValueOf<IntroAnswersStructure>) {
    if (!value) return setStep(step + 1);
    let newAnswers: Partial<IntroAnswersStructure> = {
      ...answers,
      [key]: value,
    };

    if (["dishColour"].includes(key)) {
      newAnswers = {
        ...newAnswers,
        ...handleComplexAnswers({ key, answers, value }),
      };
    }
    setAnswers(newAnswers);
    localStorage.setItem("hawker_colours", JSON.stringify(newAnswers));
    setStep(step + 1);
  }

  async function handleSubmit(
    value: Partial<FoodSurveyStructure> | ColourPref
  ) {
    const payload = constructAnswers({ key, answers, value });
    console.log({ payload });
    if (key == "survey") {
      // payload as Partial<FoodSurveyStructure>;
      const res = await updateSurvey({ ...payload });
    }
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
        // answers={answers}
        answers={{ isHalal: false, survey: { "Bak Chor Mee": "White" } }}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

function constructAnswers({
  key,
  answers,
  value,
}: {
  key: IntroPageKey;
  answers: Partial<IntroAnswersStructure>;
  value: Partial<FoodSurveyStructure> | ColourPref;
}) {
  switch (key) {
    case "survey": {
      const survey = value as Partial<FoodSurveyStructure>;
      const payload = Object.keys(survey).reduce((acc, key) => {
        const thisKey = key as unknown as FoodKey;
        const { file = "" } = foods.find((food) => food.name == thisKey) ?? {};
        return { ...acc, [file]: survey[thisKey] as ColourKey };
      }, {});
      // console.log({ payload });

      return { ...payload };
    }
    case "colourPreference": {
      value as ColourPref;
    }
  }
}

function handleComplexAnswers({
  key,
  answers,
  value,
}: {
  key: IntroPageKey;
  value: ValueOf<IntroAnswersStructure>;
  answers: Partial<IntroAnswersStructure>;
}): Partial<IntroAnswersStructure> {
  const { dish, survey = {} } = answers;
  if (value === undefined) throw new Error("Value must be defined");
  switch (key) {
    case "dishColour": {
      if (dish === undefined) {
        throw new Error("Dish and dish colour must be defined");
      }
      const survey = { [dish]: value } as FoodSurveyStructure;
      return { survey };
    }

    default:
      return {};
  }
}
