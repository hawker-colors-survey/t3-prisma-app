import { Navigation, NavigationModal } from "~/src/feature/navigation";
import { Stack } from "@mantine/core";

export default function ColourlessFuture() {
  return (
    <Stack p="0" bg="#ddd">
      <Stack p="xl">
        <NavigationModal />
        This is The Colourless Future page
      </Stack>
      <Navigation />
    </Stack>
  );
}
