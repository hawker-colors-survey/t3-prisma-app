import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function NeutralSigns({ handleBack }: { handleBack: () => void }) {
  const fileName = "neutral-signs";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align={"center"}>
          Black or White:
        </Title>
        <Title order={1} align={"center"}>
          Neutral Signs
        </Title>
        <Title order={4} align={"center"}>
          Big Image Group and Phocept
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
          <Text align={"left"}>{bodyText[0]}</Text>
          <Text align={"left"}>{bodyText[1]}</Text>
          <Image
            src={`/images/peoples-palette/${fileName}/1.webp`}
            alt=""
            fit="cover"
            style={{
              width: "100%",
              position: "relative",
            }}
          />
          <QuoteSpan text={quoteText} subText="says Finn."></QuoteSpan>
          <Image
            src={`/images/peoples-palette/${fileName}/2.webp`}
            alt=""
            fit="cover"
            caption="Various signboards designed by Phocept."
            style={{
              width: "120%",
              position: "relative",
              left: "-10%",
            }}
          />
          <Text align={"left"}>{bodyText[2]}</Text>
          <Text align={"left"}>{bodyText[3]}</Text>
          <Image
            src={`/images/peoples-palette/${fileName}/3.webp`}
            alt=""
            fit="cover"
            style={{
              width: "100%",
              position: "relative",
            }}
          />
          <Text align={"left"}>{bodyText[4]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "Look closer at the array of signboards hanging above each stall in a hawker centre and one thing stands out. Be it chicken rice, nasi lemak or fish ball soup, the dishes are more likely than not depicted in white or black tableware. This is the work of signboard makers such as Phocept and Big Image Group.",
  "They typically propose to photograph hawker dishes in white or black tableware regardless of the actual colours they are served in. Such neutral colours help the food stand out, says Finn Law, an account manager at Big Image Group which started out in 1995.",
  "Another reason why the pictures of food on hawker signboards look similar is that many customers opt for the more affordable stock images provided by the makers. These typically come in black or white tableware that do not give away where they originate from.",
  "Such cookie cutter food photography is changing, however, with a new generation of hawkers joining the trade. Many do not serve traditional dishes captured by stock photography. They also pay more attention to the branding of their stalls, says Justin Lee, the co-founder of Phocept.",
  "“Young hawkers are selective of their cutlery, signboard and the design of the whole stall,” says the photographer who has worked with hawkers for over a decade. “These hawkers tend to use the same exquisite tableware for business to plate the food for the photoshoot.”",
];

const quoteText =
  "Asian cuisines are normally very vibrant in colours and textures, hence the need to have a neutral background, in this case, the plate. Colourful plates are more distracting and will make the overall visual 'busy' in that sense,";
