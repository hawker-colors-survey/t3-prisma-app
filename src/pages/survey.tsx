import { HomeNavigation, NavigationModal } from "~/src/feature/navigation";
// import { ShareableResults } from "~/src/feature/results/components";
import { Space, Stack, Text, Title } from "@mantine/core";

export default function Survey() {
  return (
    <Stack p="xl">
      <NavigationModal />
      <Title order={1}>Thank you for participating</Title>
      <Text size="md">
        Here are your hawker colours. Tap on the dish you wish to share.
      </Text>
      <Space h="10dvh" />
      {/* <ShareableResults /> */}
      <Space h="20dvh" />
      <HomeNavigation />
    </Stack>
  );
}
