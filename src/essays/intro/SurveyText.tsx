import { Box, Center, Space, Stack, Text, Title } from "@mantine/core";
import { Button } from "~/src/components";
import type { IntroPageProps } from "~/src/feature/profile";

export const SurveyText = ({ onNext }: IntroPageProps) => {
  return (
    <Box
      style={{ position: "relative", backgroundColor: "orange", zIndex: 999 }}
    >
      <Stack px="md" style={{ height: "87dvh" }}>
        <Box
          style={{
            position: "absolute",
            transform: "translateY(11dvh)",
            marginLeft: "-20%",
            width: "140dvw",
            height: "90dvh",
            borderRadius: "15% 80% 0 0",
            paddingLeft: "-10px",
            backgroundColor: "white",
            zIndex: -99,
          }}
        />
        <Space h="xl" pb="xl" pt="xl" />
        <Space h="xl" pb="xl" pt="xl" />
        <Space h="sm" />
        <Title order={1} style={{ width: "100%" }}>
          Let&apos;s do a
        </Title>
        <Title order={1} style={{ width: "100%", marginTop: "-14px" }}>
          little experiment.
        </Title>
        <Space h="xm" />
        <Text mb={100}>
          Besides helping hawkers distinguish their wares, coloured melamine
          tableware have become a way for some consumers to identify their
          favourite dishes and stalls too.
        </Text>
      </Stack>
      <Box style={{ width: "100%", height: "fit-content", bottom: "8dvh" }}>
        <Center>
          <Button onClick={() => onNext()} size="sm" />
        </Center>
      </Box>
    </Box>
  );
};
