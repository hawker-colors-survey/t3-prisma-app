import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function AuspiciousOrange({ onBack }: { onBack: () => void }) {
  const fileName = "auspicious-orange";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          Auspicious Orange
        </Title>
        <Title order={4} align="center">
          China Street Fritters
        </Title>
        <Title order={4} align="center">
          Maxwell Food Centre
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
          <Text align="left">{bodyText[2]}</Text>
          <Text align="left">{bodyText[3]}</Text>
          <Image
            src={`/images/peoples-palette/${fileName}/3.webp`}
            alt=""
            fit="cover"
            style={{
              width: "120%",
              position: "relative",
              left: "-10%",
            }}
          />
          <QuoteSpan text={quoteText} subText="says Kok Hua."></QuoteSpan>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "Having started hawking on the streets in the 1950s before moving into a permanent stall at Maxwell Food Centre in 1987, China Street Fritters has witnessed first-hand the evolution of tableware in Singapore's hawker scene. Like many hawkers, its founders used to dish out its famous handmade ngoh hiang—a platter of fritters and rolls—on porcelain dishes when the stall operated along China Street. However, they switched to more durable melamine tableware in the 1970s when the government began fining hawkers who used chipped crockery.",
  "“We could have kept on using porcelain, but they were heavy and chipped easily. The chipped plates could even cut your fingers,” says Ng Kok Hua, whose father and uncle started the business. He and his elder brother began helping out at the stall in 1972.",
  "“Instead of buying new porcelain all the time, it was better we changed to melamine tableware even though it was more expensive,” he adds.",
  "They settled on orange tableware because it is the same colour as tangerines, whose name in Mandarin sounds similar to the word for good luck.",
];

const quoteText =
  "It's an auspicious colour. Secondly, none of our food items are orange. Our sausage is red, the tofu and fish balls are white and the egg is yellow. These foods stand out against the orange plate,";
