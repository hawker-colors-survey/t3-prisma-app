import { memo } from "react";
import { Box, createStyles, type BoxProps } from "@mantine/core";

export type CircleConfig = {
  size: number;
  x: number;
  y: number;
  color: string;
};

type CirclesProps = BoxProps & {
  circles: CircleConfig[];
  position?: "absolute" | "relative";
  style?: React.CSSProperties;
};

export const Circles = memo(function Circle({
  circles,
  position = "absolute",
  style,
  className,
  ...props
}: CirclesProps) {
  const { classes, cx } = useStyles();
  return (
    <>
      {circles.map(({ size, x, y, color }, idx) => (
        <Box
          key={idx}
          className={cx(classes.circle, className)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            backgroundColor: color,
            zIndex: -10,
            position,
            ...style,
          }}
          {...props}
        />
      ))}
    </>
  );
});

const useStyles = createStyles({
  circle: {
    borderRadius: "50%",
    animation: "move 20s linear infinite",
    transition: "all 1.2s ease-in-out",
  },
});
