import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Box, Center, Image, Title, Stack } from "@mantine/core";

import { Select, Button } from "~/src/components";
import { type FoodDataType, foods } from "~/src/constants";
import type { IntroPageProps } from "~/src/feature/journey";

const initialFoodIdx = 4;

export const FavouriteDish = ({ onNext }: IntroPageProps) => {
  const userId = uuid();
  const [foodIdx, setFoodIdx] = useState<number>(-1);
  const [isInitial, setIsInitial] = useState(0);

  function handleNewFood(idx: number) {
    if (isInitial < 2) setIsInitial(isInitial + 1);
    else setFoodIdx(idx);
  }

  useEffect(() => {
    // TODO put userId into hawker_colours
    if (!localStorage.getItem("userId")) localStorage.setItem("userId", userId);
  }, [userId]);

  const food = foods[foodIdx ?? initialFoodIdx] as FoodDataType;

  return (
    <>
      <Stack style={{ height: "87dvh", overflowX: "hidden" }} p="xl">
        <Title order={1}>What is your</Title>
        <Title order={1} style={{ marginTop: "-16px" }}>
          favourite hawker
        </Title>
        <Title order={1} style={{ marginTop: "-16px" }}>
          dish from this list?
        </Title>

        <Box style={{ position: "relative" }}>
          <Box
            style={{
              position: "absolute",
              right: 0,
              width: "300px",
              height: "300px",
              marginRight: "-100px",
            }}
          >
            <Image src={`/images/foods/${food.file}/White.webp`} alt="" />
          </Box>
          <Select
            onSelected={handleNewFood}
            style={{ marginTop: "-16px", zIndex: 0 }}
            initialSlide={initialFoodIdx}
          >
            {foods.map((item) => item.name)}
          </Select>
        </Box>
      </Stack>
      <Box style={{ width: "100%", height: "fit-content", bottom: "8%" }}>
        <Center>
          <Button
            size="sm"
            disabled={foodIdx === -1}
            onClick={() => onNext({ index: foodIdx, food, userId })}
          />
        </Center>
      </Box>
    </>
  );
};
