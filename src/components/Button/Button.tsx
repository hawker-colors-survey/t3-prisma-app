import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import {
  TbX,
  TbArrowNarrowUp,
  TbArrowNarrowDown,
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  TbRotateClockwise,
} from "react-icons/tb";
import { useStyles } from "./Button.styles";
import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons/lib";

type BasicButtonProps = MantineButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BasicButtonProps & {
  orientation?: "right" | "down" | "up" | "left";
  iconItem?: "refresh" | "close";
};

export const BlackButton = ({
  children,
  className,
  ...props
}: BasicButtonProps) => {
  const { classes, cx } = useStyles();
  return (
    <MantineButton className={cx(classes.button, className)} {...props}>
      {children}
    </MantineButton>
  );
};

export const Button = ({
  loading,
  orientation = "right",
  className,
  size = "md",
  ...props
}: ButtonProps) => {
  const { classes, cx } = useStyles();
  let Icon: IconType = TbArrowNarrowRight;
  switch (orientation) {
    case "down":
      Icon = TbArrowNarrowDown;
      break;
    case "up":
      Icon = TbArrowNarrowUp;
      break;
    case "left":
      Icon = TbArrowNarrowLeft;
      break;
    case "right":
      Icon = TbArrowNarrowRight;
      break;
    default:
      break;
  }

  const sizes = {
    sm: { width: "3em", height: "2em" },
    md: { width: "3.5em", height: "2.5em" },
  };

  const { width, height } = sizes[size as keyof typeof sizes];

  return (
    <MantineButton
      className={cx(classes.button, className)}
      loading={loading}
      style={{
        width: orientation == "right" || orientation == "left" ? width : height,
        height:
          orientation == "right" || orientation == "left" ? height : width,
      }}
      {...props}
    >
      <Icon
        size={size == "sm" ? "1.5em" : "2em"}
        className={classes.icon}
        style={{ visibility: loading ? "hidden" : "visible" }}
      />
    </MantineButton>
  );
};

export const OtherButton = ({
  loading,
  className,
  size = "sm",
  iconItem = "close",
  ...props
}: ButtonProps) => {
  const { classes, cx } = useStyles();
  let Icon: IconType = TbX;

  switch (iconItem) {
    case "refresh":
      Icon = TbRotateClockwise;
      break;
    case "close":
      Icon = TbX;
      break;
    default:
      break;
  }

  const sizes = {
    sm: { width: "1.8em", height: "1.8em" },
    md: { width: "3em", height: "3em" },
  };

  const { width, height } = sizes[size as keyof typeof sizes];

  return (
    <MantineButton
      className={cx(classes.button, className)}
      loading={loading}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    >
      <Icon
        size={size == "sm" ? "1.2em" : "2em"}
        className={classes.icon}
        style={{
          visibility: loading ? "hidden" : "visible",
          transform: iconItem == "refresh" ? "rotate(180deg)" : "",
        }}
      />
    </MantineButton>
  );
};
