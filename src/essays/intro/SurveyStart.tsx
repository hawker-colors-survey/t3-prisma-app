import { Box, Center, Image, Stack, Title } from "@mantine/core";
import { Button } from "~/src/components";
import type { IntroPageProps } from "~/src/feature/journey";

export const SurveyStart = ({ onNext }: IntroPageProps) => {
  return (
    <Box
      style={{
        background: "url(/images/bg.png) center center/cover repeat",
        height: "100%",
        position: "relative",
      }}
    >
      <Stack style={{ overflow: "", height: "100%" }}>
        <Box>
          <Title order={1} pt="xl" pl="xl">
            Say you are
          </Title>
          <Title order={1} pt="xl" pl="xl" mt="-24px">
            out eating five
          </Title>
          <Title order={1} pt="xl" pl="xl" mt="-24px">
            hawker dishes...
          </Title>
        </Box>
        <Center h="60dvh">
          <Image
            src="/images/stories/5DishesPortrait.webp"
            alt=""
            width="88dvw"
            // height="80%"
          />
        </Center>
      </Stack>
      <Box style={{ width: "100%", bottom: "8dvh", position: "absolute" }}>
        <Center>
          <Button onClick={() => onNext()} size="sm" />
        </Center>
      </Box>
    </Box>
  );
};
