import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function BlueForPeace({ onBack }: { onBack: () => void }) {
  const fileName = "blue-for-peace";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          Blue for Peace
        </Title>
        <Title order={1} align="center">
          Not War
        </Title>
        <Title order={4} align="center">
          Ah Tai Hainanese Chicken Rice
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
          <QuoteSpan text={quoteText} subText="he adds."></QuoteSpan>
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
          <Text align="left">{bodyText[3]}</Text>
          <Text align="left">{bodyText[4]}</Text>
          <Text align="left">{bodyText[5]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "It is fiercely debated among foodies in Singapore: Do you pick blue or green when eating chicken rice at Maxwell Food Centre? The former is the tableware colour of Ah Tai Hainanese Chicken Rice started by Wong Liang Tai, while the latter belongs to a rival just two stalls away where he used to serve as head chef.",
  'When Liang Tai (popularly known as Ah Tai) left the renowned Tian Tian Hainanese Chicken Rice to start his own stall a decade ago, he put up a signboard in the same blue colour as that of his former employer. According to some, this was a declaration of a "chicken rice war" that even became the subject of Poached, a mini documentary shot by David Geld, who created the popular television series Chef\'s Table. Ah Tai, however, says he simply chose his favourite colour.',
  "His stall is indeed dotted with the colour; from the staff uniform to various kitchen utensils. Moreover, blue tableware was not used by Maxwell's other chicken rice hawkers, which makes it convenient for cleaners to return the tableware to their rightful owners. Tian Tian uses green, while the others use colours such as red and white. When asked if there is a popular tableware colour for chicken rice, Ah Tai says he has seen it all in the three decades he has spent selling the dish.",
  "“I've seen blue, red, purple, but mostly white,” he says. “It's up to the individual. There are even people who use black for chicken rice.”",
  "But one thing that Ah Tai is sure of is that any blue plate of chicken rice at Maxwell belongs to him.",
  "“You watched the Apple documentary, right? I saw the blue plate and I knew that was mine,” he says. “It's part of my brand now.”",
];

const quoteText =
  "I've always liked blue. I think blue is fresh, and not too dazzling or striking. It's like the ocean,";
