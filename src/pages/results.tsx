import { HomeNavigation, NavigationModal } from "~/src/feature/navigation";
import { FirstPage, SecondPage } from "~/src/feature/results/pages";
import { Space, Stack, Title } from "@mantine/core";
import { useState } from "react";

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
    <Stack p="xl">
      <NavigationModal />
      <Title order={1} w="80%">
        This is the results page!
      </Title>
      <Space h="10dvh" />
      {/* <ShareableResults /> */}
      <Space h="10dvh" />
      <HomeNavigation />
    </Stack>
  );
};
