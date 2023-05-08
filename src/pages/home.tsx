import { BlackButton } from "~/src/components";
import { Navigation } from "~/src/feature/navigation";
import { Box, Space, Text, Title, createStyles } from "@mantine/core";

export default function Home() {
  const { classes } = useStyles();
  return (
    <Box style={{ height: "100dvh", overflowY: "scroll" }} p="xl">
      <Title className={classes.title} order={1}>
        hawker colours
      </Title>
      <Space h="20px" />
      <Title order={2}>Melamine Tableware</Title>
      <Title order={2}>in Singapore</Title>
      <Space h="20px" />
      <Text>
        They refer not to the green of chendol or the red of mee goreng, but the
        colourful riot of plates and bowls that many hawker dishes in Singapore
        are served in today. Red, green, yellow, purple, pink, and more!
      </Text>
      <Space h="xs" />
      <Text>
        These tableware defy conventional aesthetic sensibilities and even
        colour psychology, but have become entrenched in our local hawker
        culture.
      </Text>

      <Space h="20px" />
      <BlackButton>Share all dishes</BlackButton>
      <Space h="20px" />
      <BlackButton>Save Progress</BlackButton>
      <Space h="20px" />
      <Navigation />
    </Box>
  );
}

const useStyles = createStyles({
  title: {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
    fontSize: "72px",
    lineHeight: "100%",
  },
});
