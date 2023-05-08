/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// SHAREABLE RESULTS PAGE

import { Box, Grid, Image, Stack, Button } from "@mantine/core";
import { getRecordsByUserId } from "~/src/apis";
import { useEffect, useState } from "react";
import type { FieldsStructure } from "~/src/apis";
import { FoodResultStack } from "~/src/feature/results";
import { foods } from "~/src/constants";

const dummyUserId = "9f894f2e-a2cc-43ed-9a90-8550c879e975"; // from TestReceive -> PARTIALLY FILLED

export default function ShareableResults() {
  const [data, setData] = useState<FieldsStructure>();
  useEffect(() => {
    async function filterRecords(userId: string) {
      const records = await getRecordsByUserId(userId);
      setData(records.records[0].fields);
    }
    void filterRecords(dummyUserId);
  }, []);

  const parsedFoods = foods.map(({ name, file }) => ({
    file,
    color: data?.[name] ?? "disabled",
  }));

  return (
    <Box
      style={{
        background: "url(/images/bg.png) center center/cover repeat",
        position: "relative",
      }}
      bg="blue"
    >
      <Stack
        spacing={0}
        justify="center"
        align="stretch"
        style={{ backgroundColor: "#aaa" }}
        bg="orange"
      >
        <Image
          src="/images/misc/ResultsBGTop.webp"
          alt=""
          fit="contain"
          style={{ marginTop: "-1px" }} // image pixel is off by 1px
        />

        <Grid
          justify="center"
          align="start"
          grow
          style={{ marginBottom: "10%" }}
        >
          {[0, 1, 2].map((chunk) => (
            <Grid.Col span="auto" key={chunk}>
              <FoodResultStack
                offset={chunk === 1}
                indexOffset={chunk}
                records={parsedFoods.filter(
                  (_, index) => index >= chunk * 10 && index < (chunk + 1) * 10
                )}
              />
            </Grid.Col>
          ))}
        </Grid>

        <Image src="/images/misc/ResultsBGBottom.webp" alt="" fit="contain" />

        <Button.Group orientation="vertical">
          <Button size="md">Share all dishes</Button>
          <Button size="md">Save progress</Button>
        </Button.Group>
      </Stack>
    </Box>
  );
}
