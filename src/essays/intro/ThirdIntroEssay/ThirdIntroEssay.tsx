import { useState } from "react";
import { Text, Center, Space, Image, Stack, Box, Title } from "@mantine/core";
import { Button, Radio, RadioGroup } from "~/src/components";
import type { IntroPageProps } from "~/src/pages/intro";
import { Background } from "./Background";

const options = ["Yes, I'm colour blind", "No, I'm not colour blind"];
const plates = [
  { y: "-15", x: "57", size: "20", color: "Lemon" },
  { y: "0", x: "2", size: "13", color: "Purple" },
  { y: "50", x: "-22", size: "12", color: "Red" },
  { y: "40", x: "30", size: "18", color: "Yellow" },
  { y: "40", x: "87", size: "22", color: "DarkGreen" },
  { y: "120", x: "75", size: "34", color: "Cream" },
];

export const ThirdIntroEssay = ({ onNext }: IntroPageProps) => {
  const [answerIdx, setAnswerIdx] = useState<number>();
  return (
    <>
      <Stack
        align="center"
        style={{
          height: "100dvh",
          position: "relative",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
        pb="xl"
      >
        <Background />
        <Center style={{ height: "50dvh", marginTop: "7dvh" }}>
          <Image
            alt=""
            src="/images/stories/IntroEssay2FoodCenter.webp"
            height="45dvh"
          />
        </Center>
        <Stack p="xl">
          <Text fz="md">
            Chances are you frequent some of the over 110 hawker centres across
            Singapore. They were originally built by the government between 1971
            and 1986 to resettle street hawkers.
          </Text>
          <Text fz="md">
            These centres housed tens if not hundreds of stalls, creating a
            demand for more varieties in tableware to help hawkers differentiate
            their wares.
          </Text>
          <Box style={{ position: "relative", height: "38dvh" }}>
            {plates.map(({ y, x, size, color }) => {
              return (
                <div
                  key={String(Number(y) * Number(x)) + color}
                  style={{
                    position: "absolute",
                    top: `${Number(y) + 16}%`,
                    left: `${x}%`,
                    zIndex: -2,
                  }}
                >
                  <Image
                    alt=""
                    src={`/images/empty_plates/${color}.webp`}
                    width={`${size}dvh`}
                  />
                </div>
              );
            })}
          </Box>

          <Text fz="md">
            Local manufacturers of melamine tableware thus added red, purple,
            yellow, lemon green, dark green, white and cream colours to their
            range. They also offered a greater variety of shapes and sizes.
          </Text>
          <Space h="xl" pb="xl" pt="xl" />
          <Space h="xl" pb="xl" pt="xl" />
          <Box style={{ position: "relative" }}>
            <Box
              style={{
                position: "absolute",
                zIndex: -99,
                backgroundColor: "#8CF2E6",
                top: 0,
                marginLeft: "-40dvw",
                width: "155dvw",
                height: "75dvh",
                borderRadius: "90% 120% 0 0",
              }}
            />
            <Space h="80px" />
            <Title order={1}>Do you perceive</Title>
            <Title order={1}>colours differently?</Title>
            <Space h="xl" />
            <RadioGroup
              value={String(answerIdx)}
              pl="sm"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {options.map((option, idx) => (
                <Radio
                  key={idx}
                  value={String(idx)}
                  label={String(option)}
                  onClick={() => setAnswerIdx(idx)}
                />
              ))}
            </RadioGroup>
          </Box>
        </Stack>

        <Space h="xl" />
        <Center>
          <Button
            size="sm"
            disabled={typeof answerIdx !== "number"}
            onClick={() => onNext(!Boolean(answerIdx))}
          />
        </Center>
      </Stack>
    </>
  );
};
