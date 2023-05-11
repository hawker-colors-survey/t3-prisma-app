import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
  container: {
    maskImage:
      "linear-gradient(180deg,transparent 5%,rgba(0, 0, 0, 1) 20%,rgba(0, 0, 0, 1) 80%,transparent 95%)",
  },
  slide: {
    height: "100%",
    alignItems: "center",
    transition: "0.3s all ease",
    display: "flex",
    marginLeft: "0px",
    userSelect: "none",
    fontWeight: 500,
    fontSize: "14px",
    fontFamily: "Source Sans Pro, sans-serif",
  },
  active: {
    fontSize: "22px",
    fontWeight: 700,
    marginLeft: "16px",
  },
});
