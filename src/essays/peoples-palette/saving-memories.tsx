import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image, ScrollArea, Box } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";

export function SavingMemories({ handleBack }: { handleBack: () => void }) {
  const fileName = "saving-memories";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          Saving Her Colourful Memories
        </Title>
        <Title order={4} align="center">
          Kwa Li Ying
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
          <QuoteSpan
            text={quoteText}
            subText="says the recent graduate of the National University of Singapore's Division of Industrial Design."
          ></QuoteSpan>
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
          <ScrollArea
            left="-10%"
            w="120%"
            h="auto"
            style={{ overflowX: "scroll" }}
          >
            <Box>
              <Image
                src={`/images/peoples-palette/${fileName}/2.webp`}
                alt=""
                width="190%"
              />
            </Box>
          </ScrollArea>

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
          <Text align="left">{bodyText[4]}</Text>
          <Text align="left">{bodyText[5]}</Text>
          <Text align="left">{bodyText[6]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "For as long as she has eaten hawker food, Kwa Li Ying has associated ban mian with the yellow bowls served by a stall she frequents in her estate. The 27-year-old was thus surprised to learn that stalls in new hawker centres had to use standardised colour tableware as part of an initiative to centralise dishwashing. It spurred Li Ying to find ways to preserve the colours of hawker tableware for her final-year industrial design project.",
  "Through observations and interviews, Li Ying learnt of the laborious effort required in hawker centres to return used tableware to the individual hawkers. This could range from some 30 stalls in Dunman Food Centre to over 200 of them in Chinatown Market, each of which use tableware in different shape, size and colour. This is one reason why standardised tableware is preferred in existing centralised dishwashing systems as sorting is not required. Instead, cleaning companies rent out the same tableware to hawkers based on how many they need each day.",
  "Li Ying proposed a tagging system that indicates on each coloured plate the stall to which it belongs, and even a halal symbol where applicable. Such a solution would help cleaners differentiate the tableware more easily. Hopefully, this would persuade cleaning companies to allow hawkers to continue using the tableware of their choice. The names of hawker centres could also be included in the tags to create a stronger sense of collective identity.",
  "In addition, Li Ying collaborated with a team to create this website to raise awareness of the colourful aspect of Singapore's hawker culture. She recalls interviewing a hawker who was upset about switching to a standardised light stone tableware after being relocated from the now-defunct Woodlands Centre Road Food Centre to the new Marsiling Mall Hawker Centre. This hawker could no longer use the red tableware he had picked to match his last name, Ang.",
  "“He said to me, 'You know, hawkers are business owners too and it's sad that we can't decide what represents our business',” says Li Ying.",
  "Customers have formed attachments to different tableware colours too. Li Ying's mother, for instance, believes that the kway chap in her estate would be less enjoyable if served in a colour other than its current lemon green bowl.",
  "“She says that if they changed to white it will not taste the same to her anymore because the colour reminds her of hospital tableware,” says Li Ying. “If we can save the traditional colours and promote their usage across people and places, we may even avoid reinforcing these stereotypes.”",
];

const quoteText =
  "There is a connection between colours and the food I grew up eating, so I wanted to do a project that safeguards the colours around me,";
