import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { useStyles } from "./Button.styles";
import type { ButtonHTMLAttributes, ElementType } from "react";

type BasicButtonProps = MantineButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BasicButtonProps & {
  orientation?: "right" | "down";
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
  const Icon = (
    orientation === "down" ? HiArrowNarrowDown : HiArrowNarrowRight
  ) as ElementType;

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
        width: orientation == "right" ? width : height,
        height: orientation == "right" ? height : width,
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
