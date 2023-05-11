import { createStyles } from "@mantine/core";

const black = "#222222";
const white = "#ffffff";
const highlight = "#ffffff59";
const shadow = "#000000";

export const useStyles = createStyles((theme) => {
  return {
    button: {
      border: "0px",
      borderRadius: theme.radius.xl,
      backgroundColor: black,
      boxShadow: `2px -2px 4px 0px ${shadow} inset, -2px -2px 4px 0px ${highlight} inset`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      padding: "5px 5px",
      color: white,
      cursor: "pointer",
      transition: "all 0.05s ease",
      textDecoration: "none",

      "&:disabled": {
        backgroundColor: black,
        textDecoration: "none",
        border: "0px",
        boxShadow: "none",
        cursor: "default",
        opacity: 0.3,
      },
      "&:active": {
        backgroundColor: black,
        boxShadow: `-5px 1px 4px 0px ${shadow} inset, 5px -2px 2px 0px ${highlight} inset`,
        border: `3px solid ${black}`,
        cursor: "pointer",
      },
    },
    icon: { margin: `${theme.spacing.xl}` },
  };
});
