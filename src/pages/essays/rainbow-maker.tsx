import { Navigation, NavigationModal } from "~/src/feature/navigation";
import { Stack } from "@mantine/core";

export default function RainbowMaker() {
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
        This is The Rainbow Maker page
      </Stack>
      <Navigation />
    </Stack>
  );
}
