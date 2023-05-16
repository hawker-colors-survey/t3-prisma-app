import {
  Center,
  Image,
  Title,
  createStyles,
  Box,
  Space,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { Button, Radio, RadioGroup } from "~/src/components";
import type { ColourPref } from "~/src/feature/profile";
import type { IntroPageProps } from "~/src/feature/profile";

const images: Record<string, string> = {
  white: "/images/stories/5DishesWhite.webp",
  coloured: "/images/stories/5DishesColourful.webp",
};

export const ColourPreference = ({ onSubmit, isLoading }: IntroPageProps) => {
  const [pref, setPref] = useState<ColourPref | "">("");
  const { classes } = useStyles();

  function handleColour(clr: ColourPref) {
    return () => setPref(clr);
  }

  function handleSubmit() {
    if (pref) onSubmit?.(pref);
  }

  return (
    <>
      <Stack pl="xl" pr="xl" style={{ height: "87%", overflow: "scroll" }}>
        <div>
          <Box
            style={{
              position: "absolute",
              marginLeft: "-60%",
              top: "5dvh",
              width: "190dvw",
              height: "95dvh",
              backgroundColor: "lightgray",
              zIndex: -99,
              borderRadius: "90% 100% 0 0",
            }}
          />
        </div>
        <Space h="xl" />
        <Title order={1} className={classes.title}>
          What do you prefer
        </Title>
        <Title
          order={1}
          className={classes.title}
          style={{ marginTop: "-16px" }}
        >
          your hawker dishes
        </Title>
        <Title
          order={1}
          className={classes.title}
          style={{ marginTop: "-16px" }}
        >
          to be served in?
        </Title>
        <Center style={{ height: "50%" }}>
          <Image
            style={{ objectFit: "contain", height: "100%", marginTop: "-48px" }}
            alt=""
            src={images[pref || "white"]}
          />
        </Center>
        <Space />

        <RadioGroup value={pref} pl="md">
          <Radio
            value="coloured"
            label="Colourful"
            onClick={handleColour("coloured")}
          />
          <Radio
            value="white"
            color="dark"
            label="White"
            onClick={handleColour("white")}
          />
        </RadioGroup>
      </Stack>
      <Box style={{ width: "100%", bottom: "8dvh", position: "absolute" }}>
        <Center>
          <Button
            size="sm"
            disabled={!pref || isLoading}
            onClick={handleSubmit}
          />
        </Center>
      </Box>
    </>
  );
};

const useStyles = createStyles({
  title: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeight: 700,
    fontSize: "28px",
  },
});
