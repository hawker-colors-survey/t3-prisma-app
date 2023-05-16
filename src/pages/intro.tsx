import { Box } from "@mantine/core";

import { useHawkerSession } from "~/src/hooks";
import { IntroPages } from "~/src/feature/profile";
import { SigninModal } from "~/src/feature/auth/SigninModal";

export default function Introduction() {
  const { session } = useHawkerSession();

  return (
    <>
      <SigninModal opened={session === null} />
      <Box
        style={{
          height: "100dvh",
          minHeight: "-webkit-fill-available",
          maxHeight: "-webkit-fill-available",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IntroPages session={session} />
      </Box>
    </>
  );
}
