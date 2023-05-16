import { useState } from "react";
import { Box, Center, Image, Space, Text } from "@mantine/core";
import { Button } from "~/src/components";
import { Background } from "./Background";
import type { IntroPageProps } from "~/src/feature/profile";

export const SecondIntroEssay = ({ onNext }: IntroPageProps) => {
  const [page, setPage] = useState(0);
  const content = [FirstPage, SecondPage];

  function handleClick() {
    Boolean(page) ? onNext() : setPage(1);
  }

  return (
    <Box p="xl" style={{ height: "100dvh", overflowY: "scroll" }}>
      <Background page={page} />
      {content[page]}
      <Space h="2dvh" />
      <Center>
        <Button onClick={handleClick} size="sm"></Button>
      </Center>
    </Box>
  );
};

const FirstPage = (
  <Box
    style={{ overflowX: "hidden", paddingTop: "10dvh", position: "relative" }}
  >
    <Text fz="md">
      Before the widespread use of melamine tableware, hawkers in Singapore used
      a wide variety of food packaging and tableware. One of them was porcelain
      crockery.
    </Text>
    <Box style={{ position: "relative", height: "45dvh" }}>
      <Center style={{ position: "absolute", right: "1dvh", top: "5dvh" }}>
        <Image
          alt=""
          width="38dvw"
          src="/images/stories/CeramicBowlsSurvey.webp"
          fit="contain"
        />
      </Center>
      <Center style={{ position: "absolute", top: "22dvh", left: "15dvw" }}>
        <Image
          alt=""
          width="50dvw"
          src="/images/stories/RoosterBowl.webp"
          fit="contain"
        />
      </Center>
    </Box>
  </Box>
);

const SecondPage = (
  <Box style={{ overflowY: "scroll" }}>
    <Center mt="-10px" mr="-40px">
      <Image
        alt=""
        width="50dvw"
        src="/images/stories/RoosterBowl.gif"
        fit="contain"
      />
    </Center>
    <Space h="xl" />
    <Text fz="md">
      This began to change after 1973 when the Environment Public Health
      Regulations was introduced to raise food hygiene standards. As food
      handlers caught using chipped, broken or cracked tableware would be fined
      up to $1,000, many hawkers switched to more durable alternatives.
    </Text>
    <Space h="xl" />
    <Center>
      <Image
        alt=""
        width="70dvw"
        src="/images/stories/FoodHandlersRegulations.webp"
        fit="contain"
      />
    </Center>
  </Box>
);
