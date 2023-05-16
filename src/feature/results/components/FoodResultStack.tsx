import { Stack, Space, Box, Image } from "@mantine/core";

type FoodResultStackProps = {
  offset: boolean;
  records: { file: string; color: string }[];
};
export function FoodResultStack({
  offset,
  records = [],
}: FoodResultStackProps) {
  return (
    <Stack spacing={0} justify="center" align="stretch">
      {offset ? <Space h="50px" /> : null}
      <Box style={{ display: "flex", flexDirection: "column" }}>
        {records.map((record, index) => (
          <Box key={index}>
            <Image
              src={`/images/foods/${record.file}/${record.color}.webp`}
              alt=""
              fit="contain"
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
