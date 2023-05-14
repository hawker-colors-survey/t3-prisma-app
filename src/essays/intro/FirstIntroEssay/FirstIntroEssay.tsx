import { useState } from "react";
import {
  Box,
  Center,
  createStyles,
  Title,
  Text,
  Space,
  Stack,
} from "@mantine/core";
import { Button } from "~/src/components";
import { Background } from "./Background";
import type { IntroPageProps } from "~/src/pages/intro";

export const FirstIntroEssay = ({ onNext }: IntroPageProps) => {
  const [step, setStep] = useState(0);
  const { classes } = useStyles();

  function handleClick() {
    if (step && onNext) onNext();
    else setStep(1);
  }

  return (
    <>
      <Background step={step} />
      <Stack style={{ overflow: "scroll", height: "87%" }} p="xl">
        <Box pb="72px">
          <Space h="100px" />
          {step === 0 && (
            <>
              <Title className={classes.title} order={1}>
                hawker colours
              </Title>
              <Space h="20px" />
              <Title order={2}>Melamine Tableware</Title>
              <Title order={2}>in Singapore</Title>
              <Space h="20px" />
              <Text>
                They refer not to the green of chendol or the red of mee goreng,
                but the colourful riot of plates and bowls that many hawker
                dishes in Singapore are served in today. Red, green, yellow,
                purple, pink, and more!
              </Text>
              <Space h="xs" />
              <Text>
                These tableware defy conventional aesthetic sensibilities and
                even colour psychology, but have become entrenched in our local
                hawker culture.
              </Text>
            </>
          )}
          {step === 1 && (
            <Text>
              Take a 15-minute survey to help us learn how the colours may be a
              part of your hawker food experience. Your data will only be used
              for this research and the results will be published anonymously.
            </Text>
          )}
          <Space h="xl" />
          <Space h="xl" />
          <Space h="xl" />
          <Center>
            <Button onClick={handleClick} size="sm" />
          </Center>
          <Space h="xl" />
        </Box>
      </Stack>
    </>
  );
};

const useStyles = createStyles({
  title: {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
    fontSize: "72px",
    lineHeight: "100%",
  },
});
