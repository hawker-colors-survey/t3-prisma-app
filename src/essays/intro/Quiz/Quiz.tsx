import { useState } from "react";
import {
  Text,
  Center,
  Box,
  Title,
  Space,
  Stack,
  Flex,
  Image,
} from "@mantine/core";
import { Button, Radio, RadioGroup } from "~/src/components";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import type { IntroPageProps } from "~/src/pages/intro";

const options = [
  "Pink, blue and orange",
  "Red, green and purple",
  "Black, white and grey",
];

export const Quiz = ({ onNext }: IntroPageProps) => {
  const [answerIdx, setAnswerIdx] = useState<number>();
  const [answered, setAnswered] = useState(false);

  function handleClick(idx: number) {
    setAnswerIdx(idx);
  }

  function handleConfidentAnswer() {
    setAnswered(true);
  }

  const answeredText = (() => {
    if (!answered) return null;
    if (answerIdx === 0)
      return <Text fz="md">Correct! You must have been around then.</Text>;
    return (
      <Text fz="md">
        It was pink, blue, and orange. Tough luck! Too young to know?
      </Text>
    );
  })();

  return (
    <Stack
      style={{
        overflow: "scroll",
        height: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Box p="xl">
        <Center
          style={{
            position: "relative",
            width: "80%",
            height: "32dvh",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <Image alt="" src="/images/stories/DirtyBowls.gif" />
        </Center>
        <Space h="xl" />
        <Space h="xl" />
        <Text fz="md">
          Melamine tableware was a popular choice. The relatively new type of
          plastic first gained popularity in the West for its durability and
          colours. In the 1970s, the burgeoning plastic industry in Singapore
          also started manufacturing melamine tableware in limited colours.
        </Text>
        <Box
          style={{
            position: "relative",
            height: "80dvh",
            width: "100dvw",
            marginLeft: "-25px",
          }}
        >
          <Box
            style={{
              position: "absolute",
              transform: "translateY(5dvh)",
              marginLeft: "-20vw",
              width: "140dvw",
              height: "87dvh",
              paddingLeft: "-10px",
              backgroundColor: "#F9CDCC",
              zIndex: -1,
              borderRadius: "50% 50% 0 0",
            }}
          />
          <Space h="16dvh" />
          <Stack p="xl">
            <Title order={1}>
              Guess what colours were offered in the 1970s?
            </Title>
            <RadioGroup value={String(answerIdx)} pl="md" pb="xs">
              {options.map((option, idx) => {
                const icon = idx === 0 && answered ? <FiCheck /> : <RxCross2 />;
                const label = (
                  <Flex justify="space-between" align="start">
                    {option}
                    {answered ? icon : <></>}
                  </Flex>
                );
                return (
                  <Radio
                    disabled={answered && answerIdx !== idx}
                    key={idx}
                    value={String(idx)}
                    label={label}
                    onClick={() => handleClick(idx)}
                  />
                );
              })}
            </RadioGroup>
            <Text fz="md">{answeredText}</Text>
            <Center mt="xl">
              <Button
                size="sm"
                onClick={() => {
                  if (answered) onNext();
                  else handleConfidentAnswer();
                }}
                disabled={typeof answerIdx !== "number"}
              />
            </Center>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};
