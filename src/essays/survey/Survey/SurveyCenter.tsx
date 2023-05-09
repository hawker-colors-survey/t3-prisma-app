import type { FoodDataType } from "~/src/constants";
import { createStyles, Title, Box, Stack, Flex } from "@mantine/core";
import type { Answers } from "./Survey";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const objLen = (obj: Record<string, any>) => Object.keys(obj).length;

type SurveyCenterProps = {
  food: FoodDataType;
  answers: Answers;
  isLoading?: boolean;
  num: number;
};

export const SurveyCenter = ({
  food,
  answers,
  isLoading,
  num,
}: SurveyCenterProps) => {
  const { classes } = useStyles();
  return (
    <Stack align="center">
      <Title order={3} align="center" className={classes.subtitle}>
        {food.name}
      </Title>
      <Title
        order={3}
        align="center"
        className={classes.subtitle}
        style={{ marginTop: "-12px" }}
      >
        <Flex style={{ width: "20dvh" }} justify="space-between">
          {new Array(num).fill(0).map((_num, numb) => {
            const isFilled = numb < objLen(answers) - 1 + Number(isLoading);
            return (
              <Box
                key={numb}
                style={{
                  borderRadius: "50%",
                  height: "12px",
                  width: "12px",
                  backgroundColor: isFilled ? "black" : "",
                  border: "1px solid black",
                }}
              />
            );
          })}
        </Flex>
      </Title>
    </Stack>
  );
};

const useStyles = createStyles({
  subtitle: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeight: 600,
    fontSize: "20px",
  },
});
