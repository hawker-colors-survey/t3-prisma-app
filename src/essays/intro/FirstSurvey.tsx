import { useState } from "react";
import { Image, Title, Center, Box, SimpleGrid, Space } from "@mantine/core";
import { type ColourKey, foods, type FoodDataType } from "~/src/constants";
import { Button, PinButton } from "~/src/components";
import type { IntroPageProps } from "~/src/feature/profile";

export const FirstSurvey = ({ onNext, answers }: IntroPageProps) => {
  const [colour, setColour] = useState<ColourKey | "">("");
  const foodNumber =
    foods.findIndex((food) => food.file === answers?.dish) ?? 0;

  const food = foods[foodNumber] as FoodDataType;

  const title = (
    <Box>
      <Box style={{ height: "25dvh" }}>
        <Title order={1}>Which coloured</Title>
        <Title order={1}>tableware is it </Title>
        <Title order={1}>usually served in?</Title>
      </Box>
      <Center style={{ height: "32dvh", position: "relative" }}>
        {food.colours.map((foodColour) => {
          const showingColour = colour || "White";
          return (
            <Image
              key={foodColour}
              src={`/images/foods/${food.file}/${foodColour}.webp`}
              style={{
                width: "55dvw",
                position: "absolute",
                opacity: foodColour === showingColour ? 1 : 0,
                top: "-2dvh",
              }}
              mt="-xl"
              alt=""
            />
          );
        })}
      </Center>
    </Box>
  );

  const grid = (
    <Center pl="5%" pr="5%" style={{ height: "100%", width: "100%" }}>
      <SimpleGrid
        cols={5}
        style={{ height: "100%", width: "90%" }}
        spacing="sm"
      >
        {food.colours.map((foodColour) => (
          <PinButton
            key={foodColour}
            onClick={() => setColour(foodColour)}
            colour={foodColour}
            selected={colour === foodColour}
          />
        ))}
      </SimpleGrid>
    </Center>
  );

  return (
    <Box
      style={{
        background: "url(/images/bg.png) center center/cover repeat",
        height: "100dvh",
      }}
      p="xl"
    >
      <Box style={{ overflow: "scroll", height: "87dvh" }}>
        <Box style={{ height: "52dvh" }}>{title}</Box>
        <Space h="3dvh" />
        <Box style={{ height: "28dvh" }}>{grid}</Box>
        <Space h="2dvh" />
      </Box>
      <Box style={{ width: "100%", height: "fit-content", bottom: "8dvh" }}>
        <Center>
          <Button
            size="sm"
            onClick={() => colour && onNext(colour)}
            disabled={!colour}
          />
        </Center>
      </Box>
    </Box>
  );
};
