import { useRouter } from "next/router";
import { Box, Text } from "@mantine/core";

export const HomeNavigation = () => {
  const router = useRouter();

  function handleClick(link: string) {
    return () => router.push(link);
  }
  return (
    <Box
      onClick={handleClick("/home")}
      style={{
        left: "0px",
        width: "100%",
      }}
    >
      <Text fz={"22px"} fw={600} align="left">
        Explore the stories behind Singapore&apos;s hawker colours
      </Text>
    </Box>
  );
};
