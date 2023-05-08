// import { useState } from "react";
// import {
//   FirstIntroEssay,
//   FavouriteDish,
//   FirstSurvey,
//   SecondIntroEssay,
//   Quiz,
//   AgeSurvey,
//   FrequencySurvey,
//   LocationSurvey,
//   ThirdIntroEssay,
//   HalalSurvey,
//   SurveyText,
//   SurveyStart,
//   FourthIntroEssay,
//   ColourPreference,
// } from "~/src/essays/intro";
// import {
//   LocalStateStructure,
//   PageStructure,
// } from "~/src/feature/journey/types";
// import { useJourney } from "~/src/feature/journey/hooks/useJourney";
// import { Box } from "@mantine/core";
// import { Survey, SurveyCompleted } from "~/src/essays/survey";
// import { getRecordsByUserId, postRecords, updateRecords } from "~/src/apis";
// import { useLocalStorage } from "~/src/hooks";
// import { FoodDataType } from "~/src/constants";

// const intro: PageStructure[] = [
//   { component: FirstIntroEssay, key: "" },
//   { component: FavouriteDish, key: "favouriteDish" },
//   { component: FirstSurvey, key: "firstSurvey" },
//   { component: SecondIntroEssay, key: "" },
//   { component: Quiz, key: "" },
//   { component: AgeSurvey, key: "year" },
//   { component: FrequencySurvey, key: "frequency" },
//   { component: LocationSurvey, key: "location" },
//   { component: ThirdIntroEssay, key: "isColourBlind" },
//   { component: HalalSurvey, key: "isHalal" },
//   { component: SurveyText, key: "" },
//   { component: SurveyStart, key: "" },
//   { component: Survey, key: "survey" }, // package with survey completed
//   { component: SurveyCompleted, key: "" },
//   { component: FourthIntroEssay, key: "" },
//   { component: ColourPreference, key: "ColourPreference" },
// ];

// const initialState: LocalStateStructure = { step: 0, answers: {} };

// export default function Intro() {
//   const { localState } = useLocalStorage<LocalStateStructure>(
//     "hawker_colours",
//     initialState
//   );
//   if (!localState) return <></>;
//   return <IntroPages defaultState={localState} />;
// }

// const IntroPages = ({ defaultState = initialState }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { journey, handleNext, handleBack } = useJourney(intro, defaultState);

//   const { step, answers } = journey;
//   const { component: Page, key } = intro[step] ?? {};

//   if (!Page)
//     return (
//       <>
//         Page Not Found
//         <pre>{JSON.stringify(journey, null, 2)}</pre>
//         <pre>Survey Length: {intro.length}</pre>
//       </>
//     );

//   async function handleSubmit(payload: any) {
//     setIsSubmitting(true);
//     const {
//       firstSurvey = { food: "", colour: "" },
//       favouriteDish,
//       survey,
//       ...rest
//     } = answers;
//     const { userId } = favouriteDish as {
//       food: FoodDataType;
//       index: number;
//       userId: string;
//     };

//     let fields: any = { ...rest, userId, ...survey };

//     if (!survey) fields[firstSurvey.food] = firstSurvey.colour;
//     if (key === "ColourPreference") fields["ColourPreference"] = payload;
//     if (key === "survey") fields = { ...fields, ...payload };

//     try {
//       const { records = [] } = await getRecordsByUserId(userId);

//       if (!records.length) await postRecords(fields);
//       else await updateRecords(fields, records[0].id);

//       setIsSubmitting(false);
//       const nextPayload =
//         survey || key === "ColourPreference"
//           ? payload
//           : { ...payload, [firstSurvey.food]: firstSurvey.colour };
//       handleNext(nextPayload);
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.log(err);
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <>
//       <Box
//         style={{
//           height: "100dvh",
//           minHeight: "-webkit-fill-available",
//           maxHeight: "-webkit-fill-available",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         <Page
//           isLoading={isSubmitting}
//           onNext={handleNext}
//           answers={answers}
//           onBack={handleBack}
//           onSubmit={handleSubmit}
//         />
//       </Box>
//     </>
//   );
// };
export default function Intro() {
  return <>Intro</>;
}
