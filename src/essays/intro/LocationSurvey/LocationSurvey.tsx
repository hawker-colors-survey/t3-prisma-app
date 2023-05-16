import { useState } from "react";
import { Box, Center, Image, Space, Stack, Title } from "@mantine/core";
import { Button, Radio, RadioGroup } from "~/src/components";
import type { IntroPageProps } from "~/src/feature/profile";
import { Background } from "./Background";

const options = [
  "Central",
  "South West",
  "North West",
  "South East",
  "North East",
];

export const LocationSurvey = ({ onNext }: IntroPageProps) => {
  const [locationIdx, setLocationIdx] = useState<number>(-1);
  const option = options[locationIdx] ?? "";

  return (
    <>
      <Background />
      <Stack pl="xl" pr="xl" style={{ height: "87dvh" }}>
        <Space h="10dvh" />
        <Box style={{ height: "20dvh" }}>
          <Title order={1} style={{ marginTop: "-4px" }}>
            Where do you
          </Title>
          <Title order={1} style={{ marginTop: "-4px" }}>
            frequent nowadays
          </Title>
          <Title order={1} style={{ marginTop: "-4px" }}>
            for hawker food?
          </Title>
        </Box>
        <Box style={{ width: "90dvw", height: "20dvh" }}>
          <Center style={{ position: "relative", height: "18dvh" }}>
            <Image
              alt=""
              src="/images/maps/SGMap.webp"
              style={{ position: "absolute", zIndex: -1, width: "70dvw" }}
            />
            <Image
              alt=""
              style={{ width: "70dvw", zIndex: 999, opacity: 0.7 }}
              src={`/images/maps/${option?.replace(" ", "") || "SGMap"}.webp`}
            />
          </Center>
        </Box>
        <RadioGroup
          value={String(locationIdx)}
          pl="md"
          style={{ overflow: "hidden" }}
        >
          {options.map((option, idx) => (
            <Radio
              style={{ marginTop: Boolean(idx) ? "-4px" : "0px" }}
              key={idx}
              value={String(idx)}
              color="dark"
              label={String(option)}
              onClick={() => setLocationIdx(idx)}
            />
          ))}
        </RadioGroup>
      </Stack>
      <Box style={{ width: "100dvw", height: "fit-content", bottom: "8dvh" }}>
        <Center>
          <Button
            size="sm"
            disabled={typeof locationIdx !== "number"}
            onClick={() => onNext(option)}
          />
        </Center>
      </Box>
    </>
  );
};
