import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function ModernisingCreation({
  handleBack,
}: {
  handleBack: () => void;
}) {
  const fileName = "modernising-creation";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center" c="white">
          Modernising His Mum&apos;s Creation
        </Title>
        <Title order={4} align="center" c="white">
          Mama&apos;s Curry
        </Title>
        <Title order={4} align="center" c="white">
          Golden Mile Food Centre
        </Title>
      </Stack>
    </>
  );
  return (
    <>
      <PeoplesPaletteLayout
        headerFolder={fileName}
        headerNode={headerNode}
        handleBack={handleBack}
      >
        <>
          <Text align="left">{bodyText[0]}</Text>
          <Image
            src="/images/peoples-palette/modernising-creation/1BG.webp"
            alt=""
            fit="contain"
            width="100dvw"
          />
          <div
            style={{ position: "relative", marginTop: "-110%", left: "15%" }}
          >
            <Image
              src="/images/peoples-palette/modernising-creation/1Bowl.gif"
              alt=""
              fit="contain"
              width="80dvw"
            />
          </div>
          <QuoteSpan text={quoteText} subText="says Dion."></QuoteSpan>
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
          <Text align="left">{bodyText[1]}</Text>
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
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "Anyone who has ever spilled curry on a white shirt knows how much hassle it is to remove the stains. Now imagine serving the dish in white melamine tableware. This was how Dion Lim's mother sold curry for years until she realised it left red and orange stains on her tableware over time.",
  "In 2022, he and his wife opened their own hawker stall selling chicken curry. While they named it “Mama's Curry” in homage to Dion's mother, they ditched the white melamine tableware for their favourite colour instead.",
  "“We love black. Our preferred colours were black and white, but the latter will stain and the appearance is not so nice,” he says.",
  "Besides its practicality, Dion believes black elevates his humble dish too. The contrast in colour makes his serving look bigger. Black also looks more “modern” compared to what he calls the “obiang” (unfashionable) colours of tableware used by hawkers in the past.",
  "In short: it's a contemporary update of his mother's curry, while retaining her traditional flavours.",
];

const quoteText =
  "Some customers don't like the stains because they think it is dirty. Or they will use it to gauge your serving portion and get upset if they think you have given them less,";
