import { HomeNavigation, NavigationModal } from "~/src/feature/navigation";
import { Space, Stack, Text, Title } from "@mantine/core";

export default function Survey() {
  return (
    <Stack p={0} spacing={0}>
      <Stack p="xl" spacing="md">
        <NavigationModal />
        <Title order={1}>Thank you for participating</Title>
        <Text size="md">
          Here are your hawker colours. Tap on the dish you wish to share.
        </Text>
      </Stack>
      {/* <ShareableResults /> */}
      <Space h="10dvh" />
      <HomeNavigation />
    </Stack>
  );
}
