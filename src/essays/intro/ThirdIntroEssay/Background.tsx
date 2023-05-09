import { Circles } from "~/src/components";
import { Box } from "@mantine/core";

export const Background = () => {
  return (
    <>
      <SunRisingEffect />
    </>
  );
};

const SunRisingEffect = () => (
  <>
    <Box
      style={{
        position: "absolute",
        top: 0,
        height: "35dvh",
        width: "100dvw",
        backgroundColor: "#CDBAFF",
        zIndex: -1,
      }}
    />
    <Circles
      circles={[{ size: 230, x: 20, y: 0, color: "#FFA337" }]}
      style={{ zIndex: 0 }}
    />
  </>
);
