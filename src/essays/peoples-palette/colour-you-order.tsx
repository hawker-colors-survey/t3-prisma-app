import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image, Box, Flex } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";
import { useState } from "react";
import { BlackButton } from "~/src/components";

export function ColourYouOrder({ handleBack }: { handleBack: () => void }) {
  const fileName = "colour-you-order";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          You Are the Colour You Order
        </Title>
        <Title order={4} align="center">
          Soon Lee Porridge
        </Title>
        <Title order={4} align="center">
          Clementi 448 Food Centre
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
          <QuoteSpan
            text={quoteText}
            subText="explains Benjamin Tan, a third-generation family member."
          ></QuoteSpan>
          <InteractiveStack />
          <Text align="left">{bodyText[3]}</Text>
          <Text align="left">{bodyText[4]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "The seemingly plain bowl of Hainanese porridge sold by Soon Lee Porridge belies an array of options available to customers. Pork, chicken or fish? With or without egg? To upsize or not? The answers to these questions will determine not just what lies beneath the piping hot white surface of one's porridge but also the colour of the bowl that it is served in.",
  "While most hawker stalls opt for only a single colour of tableware, Soon Lee uses a variety to mark its customers' orders. Red for pork, purple for fish and white for chicken porridge. Adding an egg to any of these changes the bowl's colours to blue, green and orange respectively, while requests for additional helping of ingredients calls for either grey or cocoa bowl, which are paired with different-coloured pegs to indicate the choice of ingredients.",
  "The family business came up with this system to communicate customers' orders among themselves.",
  "It helps that no other stall in the hawker centre uses a similar bowl shape and size, which allows the cleaners to easily identify Soon Lee's for return.",
  "According to Benjamin, the family has been using the system since the 1980s when the business moved from Bukit Timah to Clementi 448 Food Centre. It is lost in history how they settled on the colours for each ingredient, but it sure is a colourful way of serving what is arguably the plainest-looking dish in the world!",
];

const quoteText =
  "We don't have to tell the order to the one who is cooking inside. They will see the colour and know what to cook,";

function InteractiveStack() {
  const [eggState, setEggState] = useState("BW"); // BW, WithEgg, WithoutEgg
  return (
    <Box style={{ width: "112%", marginLeft: "-6%", paddingTop: "12%" }}>
      <Image
        src={`/images/peoples-palette/colour-you-order/CoralBGTop.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
      <Box
        style={{
          background: "#FFAB87",
          paddingLeft: "6%",
          paddingRight: "6%",
          marginTop: "-2px", // to remove white line
          marginBottom: "-2px", // to remove white line
        }}
      >
        <Stack spacing={0}>
          <Flex
            align="flex-end"
            justify="center"
            direction="column"
            gap="xl"
            style={{
              position: "relative",
              right: "0px",
              marginTop: "-60px",
              zIndex: 10,
            }}
          >
            <BlackButton
              onClick={() => {
                setEggState("WithEgg");
              }}
              w="120px"
              h="40px"
            >
              With Egg
            </BlackButton>
            <BlackButton
              onClick={() => {
                setEggState("WithoutEgg");
              }}
              w="150px"
              h="40px"
            >
              Without Egg
            </BlackButton>
          </Flex>
          <Image
            src={`/images/peoples-palette/colour-you-order/3-${eggState}.webp`}
            alt=""
            fit="cover"
            style={{
              position: "relative",
              marginTop: "-120px",
              width: "130%",
              left: "-15%",
            }}
          />
          <Image
            src={`/images/peoples-palette/colour-you-order/4.webp`}
            alt=""
            fit="cover"
            style={{
              position: "relative",
              width: "120%",
              left: "-10%",
              marginBottom: "-120px",
            }}
          />
        </Stack>
      </Box>
      <Image
        src={`/images/peoples-palette/colour-you-order/CoralBGBottom.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
          zIndex: -1,
        }}
      />
    </Box>
  );
}
