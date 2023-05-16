import { useState } from "react";
import { Center, Box } from "@mantine/core";

import { Button } from "~/src/components";
import {
  foods,
  type FoodFile,
  type ColourKey,
  type FoodDataType,
} from "~/src/constants";

import { SurveyColourGrid } from "./SurveyColourGrid";
import { SurveyTitle } from "./SurveyTitle";
import { SurveyCenter } from "./SurveyCenter";
import type { SurveyAnswers } from "~/src/feature/survey";
import type { IntroPageProps } from "~/src/feature/profile";

const foodCache = foods.reduce((acc, curr, currIdx) => {
  acc[curr.file] = currIdx;
  return acc;
}, {} as Record<FoodFile, number>);

const halalFoods = foods.filter((food) => food.isHalal);
const objLen = (obj: Record<string, any>) => Object.keys(obj).length;

export const Survey = ({
  answers: prevAnswers,
  survey,
  onSubmit,
  isLoading,
}: IntroPageProps) => {
  if (!prevAnswers) throw new Error("No answers provided");
  const { isHalal } = prevAnswers;

  const [isDisabled, setIsDisabled] = useState(true);
  const initialFood = foods[randomizeIndex(Object.keys(survey) as FoodFile[])];

  const [food, setFood] = useState<FoodDataType>(initialFood as FoodDataType);
  const [answers, setAnswers] = useState({
    [food.file]: "",
  } as SurveyAnswers);

  const total: SurveyAnswers = { ...survey, ...answers };
  const maxDishes = isHalal ? halalFoods.length : foods.length;
  const num = maxDishes - objLen(survey) < 5 ? maxDishes - objLen(survey) : 5;
  const haveReachedMax = objLen(total) === maxDishes;
  const haveAnsweredNumTimes = objLen(answers) === num;

  function handleColourChange(colour: ColourKey) {
    setAnswers({ ...answers, [food.file]: colour });
    setIsDisabled(false);
  }

  function handleClick() {
    setIsDisabled(true);
    if (haveReachedMax || haveAnsweredNumTimes) {
      onSubmit?.(total);
      setIsDisabled(false);
      return;
    }

    const newFoodIdx = randomizeIndex(
      Object.keys(total) as FoodFile[],
      isHalal as boolean
    );
    const newFood = foods[newFoodIdx] as FoodDataType;
    setFood(newFood);
    setAnswers({ ...answers, [newFood.file]: "" });
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
        {food && (
          <>
            <SurveyTitle food={food} answers={answers} />
            <SurveyCenter
              food={food}
              answers={answers}
              isLoading={isLoading}
              num={num}
            />
            <Box style={{ height: "22dvh" }}>
              <SurveyColourGrid
                selected={answers[food.file]}
                onSelected={handleColourChange}
              />
            </Box>
          </>
        )}
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

function randomizeIndex(existingFood: FoodFile[], isHalal?: boolean) {
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
