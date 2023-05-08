import {
  type RadioProps as MantineRadioProps,
  type RadioGroupProps,
  Radio as MantineRadio,
  createStyles,
} from "@mantine/core";

const Radio = ({ styles = {}, disabled, ...props }: MantineRadioProps) => {
  return (
    <MantineRadio
      style={{ pointerEvents: disabled ? "none" : "auto" }}
      styles={{
        radio: {
          backgroundColor: "transparent",
          borderColor: "black",
          "&:checked": {
            background: "transparent",
            borderColor: "black",
          },
        },
        icon: { color: "black", borderRadius: "50%" },
        label: {
          alignItems: "top",
          alignSelf: "top",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "Source Sans Pro, sans-serif",
          width: "78dvw",
          opacity: disabled ? 0.35 : 1,
        },
        ...styles, // this will eventually break, use classes
      }}
      {...props}
    />
  );
};

const RadioGroup = (props: RadioGroupProps) => {
  const { classes } = useStyles();
  return <MantineRadio.Group className={classes.group} {...props} />;
};

const useStyles = createStyles({
  group: {
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
});

export { Radio, RadioGroup };
