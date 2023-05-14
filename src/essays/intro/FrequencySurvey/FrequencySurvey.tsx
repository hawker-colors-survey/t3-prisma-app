import { useState } from "react";
import { Center, Title, Box, Space, Stack } from "@mantine/core";

import type { IntroPageProps } from "~/src/pages/intro";
import { Button, Radio, RadioGroup } from "~/src/components";

import { CrazyPlates } from "./CrazyPlates";
import { Background } from "./Background";

export const FrequencySurvey = ({ onNext }: IntroPageProps) => {
  const [freq, setFreq] = useState<number>();
  const [canProceed, setCanProceed] = useState<number>();

  function handleSelect(idx: number) {
    setFreq(idx);
    if (typeof canProceed === "number" && canProceed < 1) setCanProceed(1);
  }

  return (
    <>
      <Background />
      <CrazyPlates freq={freq} />

      <Stack pl="xl" pr="xl" style={{ height: "87%" }}>
        <Space h="10dvh" />
        <Title order={1}>How many days a</Title>
        <Title order={1} style={{ marginTop: "-16px" }}>
          week do you eat
        </Title>
        <Title order={1} style={{ marginTop: "-16px" }}>
          hawker food?
        </Title>

        <RadioGroup value={String(freq)} pl="sm">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <Radio
              key={idx}
              value={String(idx)}
              color="black"
              label={String(item)}
              onClick={() => handleSelect(idx)}
            />
          ))}
        </RadioGroup>
      </Stack>
      <Box style={{ width: "100%", height: "fit-content", bottom: "8%" }}>
        <Center>
          <Button
            size="sm"
            onClick={() => onNext(freq)}
            disabled={typeof canProceed === "number"}
          />
        </Center>
      </Box>
    </>
  );
};
