import {
  Year1800s,
  Year1900s,
  Year1970s,
  Year1980s,
  Year1990s,
  Year2010s,
  Year2020s,
} from "~/src/essays/street-to-table";
import {
  Navigation,
  NavigationModal,
} from "~/src/feature/navigation/components";
import { Stack, Title, Text } from "@mantine/core";

export default function StreetToTable() {
  return (
    <Stack p="xl" bg="#F9CDCC">
      <NavigationModal />
      <Title order={1}>From Street to Table</Title>
      <Text fs="italic">
        The clean up of Singapore&apos;s hawker scene raised hygiene standards
        and gave rise to a colourful world of melamine tableware.
      </Text>
      <Stack spacing={0}>
        <Year1800s />
        <Year1900s />
        <Year1970s />
        <Year1980s />
        <Year1990s />
        <Year2010s />
        <Year2020s />
      </Stack>
      <Navigation />
    </Stack>
  );
}
