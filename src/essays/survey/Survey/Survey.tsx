import { useState } from "react";
import { Center, Box } from "@mantine/core";
import { Button } from "~/src/components";
import {
  foods,
  type FoodKey,
  type ColourKey,
  type FoodDataType,
} from "~/src/constants";
import type {
  IntroPageProps,
  JourneyStateStructure,
} from "~/src/feature/journey";
import { useLocalStorage } from "~/src/hooks";
import { SurveyColourGrid } from "./SurveyColourGrid";
import { SurveyTitle } from "./SurveyTitle";
import { SurveyCenter } from "./SurveyCenter";

const foodCache = foods.reduce((acc, curr, currIdx) => {
  acc[curr.name] = currIdx;
  return acc;
}, {} as Record<FoodKey, number>);

const halalFoods = foods.filter((food) => food.isHalal);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const objLen = (obj: Record<string, any>) => Object.keys(obj).length;

export type Answers = Record<FoodKey, ColourKey>;

export const Survey = ({
  answers: prevAnswers,
  onSubmit,
  isLoading,
}: IntroPageProps) => {
  const { localState } =
    useLocalStorage<JourneyStateStructure>("hawker_colours");
  const { survey = {}, isHalal = false } = localState?.answers ?? {};

  const [isDisabled, setIsDisabled] = useState(true);

  const prevFood = prevAnswers.firstSurvey?.food as FoodKey;
  const initialFood =
    foods[randomizeIndex([prevFood, ...(Object.keys(survey) as FoodKey[])])];

  const [food, setFood] = useState<FoodDataType>(initialFood as FoodDataType);
  const [answers, setAnswers] = useState({
    [food.name]: "",
  } as Answers);

  const total: Answers = { ...survey, ...answers };
  const maxDishes = isHalal ? halalFoods.length : foods.length;
  const num = maxDishes - objLen(survey) < 5 ? maxDishes - objLen(survey) : 5;
  const haveReachedMax = objLen(total) === maxDishes;
  const haveAnsweredNumTimes = objLen(answers) === num;

  function handleColourChange(colour: ColourKey) {
    setAnswers({ ...answers, [food.name]: colour });
    setIsDisabled(false);
  }

  function handleClick() {
    setIsDisabled(true);
    if (haveReachedMax || haveAnsweredNumTimes) {
      onSubmit?.(total);
      return;
    }

    const newFoodIdx = randomizeIndex(Object.keys(total) as FoodKey[], isHalal);
    const newFood = foods[newFoodIdx] as FoodDataType;
    setFood(newFood);
    setAnswers({ ...answers, [newFood.name]: "" });
  }

  return (
    <Box
      style={{
        background: "url(/images/bg.png) center center/cover repeat",
        height: "100dvh",
      }}
      p="xl"
    >
      <Box style={{ height: "87dvh" }}>
        <SurveyTitle food={food} answers={answers} />
        <SurveyCenter
          food={food}
          answers={answers}
          isLoading={isLoading}
          num={num}
        />
        <Box style={{ height: "22dvh" }}>
          <SurveyColourGrid
            selected={answers[food.name]}
            onSelected={handleColourChange}
          />
        </Box>
      </Box>
      <Box style={{ width: "100%", height: "fit-content", bottom: "8dvh" }}>
        <Center>
          <Button
            size="sm"
            disabled={isLoading || isDisabled}
            onClick={handleClick}
            loading={isLoading}
            loaderPosition="center"
          />
        </Center>
      </Box>
    </Box>
  );
};

function randomizeIndex(existingFood: FoodKey[], isHalal?: boolean) {
  const existingArray = existingFood.map((name) => foodCache[name]);
  let index = Math.floor(Math.random() * 30);
  const excludearray = [];
  if (isHalal) {
    for (let i = 0; i < foods.length; i++) {
      if (!(foods[i] as FoodDataType).isHalal) excludearray.push(i);
    }
  }

  while (existingArray.includes(index) || excludearray.includes(index)) {
    index = Math.floor(Math.random() * 30);
  }
  return index;
}
