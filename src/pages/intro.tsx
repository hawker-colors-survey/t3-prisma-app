import { useState } from "react";
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
import type {
  FoodSurvey,
  JourneyStateStructure,
  PageStructure,
  ValueOf,
} from "~/src/feature/journey/types";
import { useJourney } from "~/src/feature/journey/hooks/useJourney";
import { Box } from "@mantine/core";
import { Survey, SurveyCompleted } from "~/src/essays/survey";
import {
  type ColourPref,
  type FieldsStructure,
  getRecordsByUserId,
  postRecords,
  updateRecords,
} from "~/src/apis";
import { useLocalStorage } from "~/src/hooks";
import type { FoodDataType } from "~/src/constants";

type AirtableResponse = {
  records: {
    createdTime: string;
    fields: Partial<FieldsStructure>;
    id: string;
  }[];
};

const intro: PageStructure[] = [
  { component: FirstIntroEssay, key: "" },
  { component: FavouriteDish, key: "favouriteDish" },
  { component: FirstSurvey, key: "firstSurvey" },
  { component: SecondIntroEssay, key: "" },
  { component: Quiz, key: "" },
  { component: AgeSurvey, key: "year" },
  { component: FrequencySurvey, key: "frequency" },
  { component: LocationSurvey, key: "location" },
  { component: ThirdIntroEssay, key: "isColourBlind" },
  { component: HalalSurvey, key: "isHalal" },
  { component: SurveyText, key: "" },
  { component: SurveyStart, key: "" },
  { component: Survey, key: "survey" }, // package with survey completed
  { component: SurveyCompleted, key: "" },
  { component: FourthIntroEssay, key: "" },
  { component: ColourPreference, key: "ColourPreference" },
];

const initialState: JourneyStateStructure = { step: 0, answers: {} };

export default function Intro() {
  const { localState } = useLocalStorage<JourneyStateStructure>(
    "hawker_colours",
    initialState
  );
  if (!localState) return <></>;
  return <IntroPages defaultState={localState} />;
}

const IntroPages = ({ defaultState = initialState }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { journey, handleNext, handleBack } = useJourney(intro, defaultState);

  const { step, answers } = journey;
  const { component: Page, key } = intro[step] ?? {};

  if (!Page)
    return (
      <>
        Page Not Found
        <pre>{JSON.stringify(journey, null, 2)}</pre>
        <pre>Survey Length: {intro.length}</pre>
      </>
    );

  async function handleSubmit(values: ValueOf<FieldsStructure>) {
    setIsSubmitting(true);
    const {
      firstSurvey = { food: "Bak Chor Mee", colour: "White" },
      favouriteDish,
      survey,
      ...rest
    } = answers;
    const { userId } = favouriteDish as {
      food: FoodDataType;
      index: number;
      userId: string;
    };

    let payload: Partial<FieldsStructure> = { ...rest, userId, ...survey };

    if (!survey) {
      payload[firstSurvey.food] = firstSurvey.colour;
    }
    if (key === "ColourPreference") {
      payload.ColourPreference = values as ColourPref;
    }
    if (key === "survey") {
      payload = { ...payload, ...(values as FoodSurvey) };
    }

    try {
      const { records = [] } = (await getRecordsByUserId(
        userId
      )) as AirtableResponse;

      if (!records.length) await postRecords(payload);
      // @ts-ignore
      else await updateRecords(payload, records[0].id);

      setIsSubmitting(false);
      const nextPayload =
        survey || key === "ColourPreference"
          ? payload
          : { ...payload, [firstSurvey.food]: firstSurvey.colour };
      handleNext(nextPayload);
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
    }
  }

  return (
    <>
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
          isLoading={isSubmitting}
          onNext={handleNext}
          answers={answers}
          onBack={onBack}
          onSubmit={void handleSubmit}
        />
      </Box>
    </>
  );
};
