import { Box, Center, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import { Button } from "~/src/components";
import { TwoColumnStack } from "~/src/feature/results";

// type PreferenceRatio = Record<ColourPref, number>;
// const initialValues: PreferenceRatio = { coloured: 0, white: 0 };

export function FirstPage({ onNext }: { onNext: () => void }) {
  // const [preference, setPreference] = useState<PreferenceRatio>();
  // const { coloured, white } = preference || initialValues;

  useEffect(() => {
    async function handleClick() {
      // const records = await getAllRecords();
      // setPreference(initialValues);
      // const colourPreferenceObj = records.reduce(
      //   (acc: PreferenceRatio, fields) => {
      //     const { colourPreference } = fields;
      //     if (typeof colourPreference === "undefined") return acc;
      //     if (acc[`${colourPreference}`]) acc[`${colourPreference}`] += 1;
      //     else acc[`${colourPreference}`] = 1;
      //     return acc;
      //   },
      //   initialValues
      // );
      // setPreference(colourPreferenceObj);
    }
    void handleClick();
  }, []);

  return (
    <>
      <Box
        style={{
          background: "url(/images/bg.png) center center/cover repeat",
          height: "100vh",
          position: "relative",
        }}
      >
        <Title order={1}>
          What do you prefer your hawker dishes to be served in?
        </Title>
        {/* {Boolean(coloured || white) && (
          <>
            <Text span size="sm">
              {`Sample size: ${coloured + white}`}
            </Text>
            <TwoColumnStack coloured={coloured} white={white} />
          </>
        )} */}
        <Box
          style={{
            width: "100%",
            height: "fit-content",
            bottom: "8%",
            position: "absolute",
          }}
        >
          <Center>
            {/* <Button
              orientation="down"
              loading={!Boolean(coloured || white)}
              loaderPosition="center"
              onClick={() => onNext()}
            /> */}
          </Center>
        </Box>
      </Box>
    </>
  );
}
