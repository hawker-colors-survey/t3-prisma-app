import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function ElevatingIcon({ onBack }: { onBack: () => void }) {
  const fileName = "elevating-icon";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          Elevating a Humble Hawker Icon
        </Title>
        <Title order={4} align="center">
          Yong Jieyu
        </Title>
      </Stack>
    </>
  );
  return (
    <>
      <PeoplesPaletteLayout
        headerFolder={fileName}
        headerNode={headerNode}
        onBack={onBack}
      >
        <>
          <Text align="left">{bodyText[0]}</Text>
          <QuoteSpan text={quoteText} subText="he says."></QuoteSpan>
          <Image
            src={`/images/peoples-palette/${fileName}/1.webp`}
            alt=""
            fit="cover"
            style={{
              width: "120%",
              position: "relative",
              left: "-10%",
            }}
          />
          <Text align="left">{bodyText[1]}</Text>
          <Text align="left">{bodyText[2]}</Text>
          <Text align="left">{bodyText[3]}</Text>
          <Image
            src={`/images/peoples-palette/${fileName}/2.webp`}
            alt=""
            fit="cover"
            style={{
              width: "120%",
              position: "relative",
              left: "-10%",
            }}
          />
          <Text align="left">{bodyText[4]}</Text>
          <Text align="left">{bodyText[5]}</Text>
          <Text align="left">{bodyText[6]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "When he was invited to create a souvenir for Singapore in 2015, industrial designer Yong Jieyu immediately thought of its renowned hawker culture. Although its multicultural and mouth-watering hawker food was widely celebrated, Jieyu noticed that few paid attention to the colourful melamine plates they were served on.",
  "Jieyu did not discover any common visual language, but learnt how the plates captured a slice of Singapore history. As lifestyles sped up during the 1970s and 1980s, many hawkers switched from porcelain to the relatively new technology of melamine tableware as they were more durable and lighter to use. They helped hawker food become ubiquitous in Singapore.",
  "However, by the 2010s, the hawker trade was regarded by a younger generation as outdated and many preferred patronising cafes insteads. Jieyu wanted to connect the two by designing cafe tableware using melamine plates.",
  "“I thought it was quite cool to use the plates to create pedestals that are typically used to hold cakes and pastries in cafes,” he says. “The designs and their silhouette are very much in the western cafe style. I think it shows the blend of different food cultures coming into Singapore.”",
  "Through the process, Jieyu also learnt that it is more difficult to recycle melamine than other plastics.",
  "“When hawker centres first started it was more about feeding the people and supporting an economy, so it made sense to use whatever the latest technology provided and was the cheapest,” he says. But since Singapore has become more affluent, Jieyu hopes hawkers can move towards more environmentally-friendly tableware instead.",
  "“I don't think we will lose our hawker culture this way, but it will be replaced by something else that better represents our times.”",
];

const quoteText =
  "I always wondered whether there was a code to them, and I thought the choices were quite peculiar,";
