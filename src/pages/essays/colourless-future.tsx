import { Stack } from "@mantine/core";
import { Navigation, NavigationModal } from "~/src/feature";

export default function ColourlessFuture() {
  return (
    <Stack p="0" bg="#ddd">
      <Stack
        pt="xl"
        pr="xl"
        style={{ position: "fixed", top: 0, right: 0, zIndex: 100 }}
      >
        <NavigationModal />
      </Stack>
      <Stack p="xl" pt="10dvh">
        This is The Colourless Future page
      </Stack>
      <Navigation />
    </Stack>
  );
}
