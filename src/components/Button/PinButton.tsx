import { type ButtonHTMLAttributes } from "react";
import { type ColourKey, HEX_LIST } from "~/src/constants";
import { Box, Button, type ButtonProps, createStyles } from "@mantine/core";

type PinButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    colour: ColourKey;
    selected?: boolean;
  };

export const PinButton = ({ colour, selected, ...props }: PinButtonProps) => {
  const { classes, cx } = useStyles();

  const pressedStyle = selected
    ? {
        boxShadow:
          "inset 5px -2px 2px rgba(255, 255, 255, 0.3), inset -5px 1px 4px rgba(0, 0, 0, 0.25)",
        border: `3px solid ${HEX_LIST[colour]}`,
      }
    : {};
  return (
    <Box style={{ aspectRatio: 1 / 1 }} key={colour}>
      <Button
        className={cx(classes.button, props.className)}
        style={{
          backgroundColor: HEX_LIST[colour],
          backgroundImage:
            colour == "LightStone"
              ? "url('/images/misc/LightStone100px.webp')"
              : "",
          ...pressedStyle,
        }}
        {...props}
      >
        <p />
      </Button>
    </Box>
  );
};

const useStyles = createStyles({
  button: {
    width: "95%",
    height: "95%",
    borderRadius: "100%",
    border: "none",
    boxShadow:
      "4px 0px 4px 0px #00000040 inset, -4px 4px 2px 0px #ffffff40 inset",
  },
});
