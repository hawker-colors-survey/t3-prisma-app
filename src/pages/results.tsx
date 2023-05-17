import { useState } from "react";
import { Navigation, NavigationModal } from "~/src/feature/navigation";
// import ShareableResults from "~/src/feature/results/components/ShareableResults";
import { FirstPage, SecondPage } from "~/src/feature/results/pages";
import { Space, Stack, Title, Text } from "@mantine/core";

export default function Results() {
  const [page, setPage] = useState(0);
  const pages = [
    <FirstPage key={0} onNext={() => setPage(1)} />,
    <SecondPage key={1} onNext={() => setPage(2)} />,
    <ThirdPage key={2} />,
  ];
  return pages[page];
}

const ThirdPage = () => {
  return (
    <Stack p={0}>
      <Stack p="xl">
        <NavigationModal />
        <Title order={1}>Thank you for participating</Title>
        <Text size="md">
          Here are your hawker colours. Tap on the dish you wish to share.
        </Text>
      </Stack>
      {/* <ShareableResults /> */}
      <Space h="10dvh" />
      <Navigation />
    </Stack>
  );
};
