import { type ColourKey, colours } from "~/src/constants";
import { Box, Flex, Grid, Image, Stack, Text } from "@mantine/core";

export function TwoColumnStack({
  coloured,
  white,
}: {
  coloured: number;
  white: number;
}) {
  const total = coloured + white;
  const whitePercentage = Math.round((white * 100) / total);
  const colouredPercentage = Math.round((coloured * 100) / total);

  return (
    <Grid justify="center" align="end" grow>
      <SingleColumnStack
        percentage={colouredPercentage}
        textContent="Coloured"
      />
      <SingleColumnStack percentage={whitePercentage} textContent="White" />
    </Grid>
  );
}

const SingleColumnStack = ({
  percentage,
  textContent,
}: {
  percentage: number;
  textContent: "Coloured" | "White";
}) => {
  const randomIndexes: number[] = Array.from(
    Array(typeof percentage == "number" ? Math.round(percentage / 5) : 0)
  ).reduce((acc: number[]) => {
    let randomIndex = Math.floor(Math.random() * colours.length);
    while (acc.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * colours.length);
    }
    return [...acc, randomIndex];
  }, []);

  return (
    <Grid.Col span="auto">
      <Flex justify="center" align="stretch" direction="column">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          {/* render random colored plates based on the colouredPercentage */}
          {randomIndexes.map((randomIndex) => {
            const text: ColourKey =
              (textContent == "Coloured" ? colours[randomIndex] : "White") ??
              "White";
            return (
              <Box
                key={randomIndex}
                style={{
                  marginBottom: "-18%",
                  marginLeft: textContent == "Coloured" ? "-50%" : "auto",
                  marginRight: textContent == "Coloured" ? "auto" : "-50%",
                }}
              >
                <Image
                  src={`/images/side_plates/${text}.webp`}
                  alt=""
                  fit="contain"
                />
              </Box>
            );
          })}
        </div>
        <Box
          style={{
            marginTop: "20%",
          }}
        >
          <Stack spacing={0} justify="center" align="stretch">
            <Text span size="md" ta="center" fw={700}>
              {textContent}
            </Text>
            <Text span size="md" ta="center" fw={700}>
              {`${percentage}%`}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Grid.Col>
  );
};
