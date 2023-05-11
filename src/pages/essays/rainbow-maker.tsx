import { Navigation, NavigationModal } from "~/src/feature/navigation";
import { Stack } from "@mantine/core";

export default function RainbowMaker() {
  return (
    <Stack p="0" bg="#ddd">
      <Stack p="xl">
        <NavigationModal />
        This is The Rainbow Maker page
      </Stack>
      <Navigation />
    </Stack>
  );
}
