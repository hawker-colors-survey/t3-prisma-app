import { useState } from "react";
import { Box, Center, Space, Stack, Text, Title } from "@mantine/core";
import { Button, Radio, RadioGroup } from "~/src/components";
import type { IntroPageProps } from "~/src/pages/intro";
import { Background } from "./Background";

const options = ["Yes", "No"];

export const HalalSurvey = ({ onNext }: IntroPageProps) => {
  const [answerIdx, setAnswerIdx] = useState<number>();

  return (
    <>
      <Background />
      <Stack pl="xl" pr="xl" style={{ height: "100dvh", overflow: "hidden" }}>
        <Box style={{ height: "40dvh" }}>
          <Space h="12dvh" />

          <Text fz="md">
            Colour differentiation also helps Halal stalls separate their
            tableware from others so that Muslim customers can dine with others
            while still abiding by the rules of Islam.
          </Text>
        </Box>

        <Box style={{ position: "relative" }}>
          <Box
            style={{
              position: "absolute",
              zIndex: -99,
              backgroundColor: "#FFA337",
              top: 0,
              marginLeft: "-40dvw",
              width: "155dvw",
              height: "60dvh",
              borderRadius: "90% 120% 0 0",
            }}
          />
          <Space h="10dvh" />
          <Title order={1}>Are you on a</Title>
          <Title order={1}>halal diet?</Title>
          <Space h="xl" />
          <RadioGroup value={String(answerIdx)} pl="md">
            {options.map((option, idx) => {
              return (
                <Radio
                  key={idx}
                  value={String(idx)}
                  color="dark"
                  label={String(option)}
                  onClick={() => setAnswerIdx(idx)}
                />
              );
            })}
          </RadioGroup>
        </Box>
      </Stack>
      <Box
        style={{
          position: "absolute",
          width: "100dvw",
          height: "fit-content",
          bottom: "8dvw",
        }}
      >
        <Center>
          <Button
            size="sm"
            disabled={typeof answerIdx !== "number"}
            onClick={() => onNext(!Boolean(answerIdx))}
          />
        </Center>
      </Box>
    </>
  );
};
