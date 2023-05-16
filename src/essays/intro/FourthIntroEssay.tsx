import { Center, Space, Stack, Text, createStyles, Image } from "@mantine/core";
import { Button } from "~/src/components";
import type { IntroPageProps } from "~/src/feature/profile";

export const FourthIntroEssay = ({ onNext }: IntroPageProps) => {
  const { classes } = useStyles();
  return (
    <Stack pl="xl" pr="xl" style={{ height: "87%", overflow: "scroll" }}>
      <Space h="100px" />
      <Text component="p" className={classes.essay}>
        The range of coloured melamine tableware has been streamlined in recent
        years at new hawker centres built by the government since 2011. They
        operate with new centralised dishwashing systems and hawkers no longer
        buy their own tableware but use those provided by cleaning operators
        instead. Their limited selection—black, white or grey—pales in
        comparison to the familiar rainbow colours from before.
      </Text>
      <Center style={{ height: "50%" }}>
        <Image
          style={{ objectFit: "contain", height: "100%" }}
          alt=""
          src="/images/stories/PlateColourFade.gif"
        />
      </Center>
      <Space h="xl" />
      <Center>
        <Button onClick={() => onNext()} size="sm" />
      </Center>
    </Stack>
  );
};

const useStyles = createStyles({
  essay: {
    fontFamily: "Lora, serif",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "170%",
  },
});
