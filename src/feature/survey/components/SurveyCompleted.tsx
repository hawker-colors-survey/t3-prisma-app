import { useRef } from "react";
import { Box, Center, Space, Stack, Text, Title } from "@mantine/core";

import { foods } from "~/src/constants";
import { BlackButton } from "~/src/components";
import { ScreenshotButton } from "~/src/components/Button/ScreenshotButton";
import type { IntroPageProps } from "~/src/feature/profile";

const halalFoods = foods.filter((item) => item.isHalal);

export const SurveyCompleted = ({ onNext, answers }: IntroPageProps) => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const { survey = {}, isHalal = false } = answers ?? {};

  const dishesCompleted = Object.keys(survey).length;
  const maxDishes = isHalal ? halalFoods.length : foods.length;
  const canRepeat = dishesCompleted !== maxDishes;

  return (
    <Box
      style={{
        background: "url(/images/bg.png) center center/cover repeat",
        height: "100%",
      }}
      p="md"
      ref={screenshotRef}
    >
      <Title order={1} w="80%">
        Thank you for participating!
      </Title>
      <Stack style={{ height: "87%" }}>
        {!canRepeat && (
          <Center style={{ height: "100%", width: "100%" }}>
            <Stack>
              <Title order={2}>You have rated all available dishes.</Title>
              <Text>
                Thank you for your participation in our pilot. Keep a look out
                for our official website launch in May 2023.
              </Text>
            </Stack>
          </Center>
        )}
        {canRepeat && (
          <>
            <Space h="100px" />
            <Text>
              Thank you for your participation in our pilot. Keep a look out for
              our official website launch in May 2023. In the mean time, you may
              continue matching more dishes to their colours (we have a total of
              30 dishes!).
            </Text>
            <Space h="15px" />
            <BlackButton
              h={50}
              style={{ borderRadius: 40 }}
              onClick={() => onNext()}
            >
              <Title fz="md" order={3}>
                Match more colors to hawker dishes.
              </Title>
            </BlackButton>

            <ScreenshotButton canvas={screenshotRef}>
              <Title fz="md" order={3}>
                Save Image
              </Title>
            </ScreenshotButton>
          </>
        )}
      </Stack>
    </Box>
  );
};
