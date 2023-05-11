import { Box } from "@mantine/core";

export const Background = () => (
  <>
    <Box
      style={{
        backgroundColor: "#A4E1FE",
        zIndex: -999,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    />
    <Box
      style={{
        position: "absolute",
        marginLeft: "-60%",
        top: "5dvh",
        width: "190dvw",
        height: "95dvh",
        backgroundColor: "#F8C40B",
        zIndex: -99,
        borderRadius: "90% 100% 0 0",
      }}
    />
  </>
);
