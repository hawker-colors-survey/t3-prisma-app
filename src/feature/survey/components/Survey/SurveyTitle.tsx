import { Image, Center, Title, Box } from "@mantine/core";
import { type FoodDataType, colours } from "~/src/constants";
import type { SurveyAnswers } from "~/src/feature/survey";

type SurveyTitleProps = {
  food: FoodDataType;
  answers: SurveyAnswers;
};

export const SurveyTitle = ({ food, answers }: SurveyTitleProps) => (
  <Box style={{ height: "48dvh" }}>
    <Title order={1}>Which coloured</Title>
    <Title order={1}>tableware do you</Title>
    <Title order={1}>prefer for this dish?</Title>
    <Center style={{ height: "28dvh", position: "relative" }}>
      {colours.map((colour) => {
        const showingColour = answers[food.file] || "White";
        return (
          <Image
            key={colour}
            src={`/images/foods/${food.file}/${colour}.webp`}
            style={{
              width: "48dvw",
              position: "absolute",
              opacity: colour === showingColour ? 1 : 0,
            }}
            mt="-12px"
            alt=""
          />
        );
      })}
    </Center>
  </Box>
);
