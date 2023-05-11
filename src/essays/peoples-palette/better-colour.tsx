import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image, Box, Flex } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";
import { useState } from "react";
import { BlackButton } from "~/src/components";

export function BetterColour({ handleBack }: { handleBack: () => void }) {
  const fileName = "better-colour";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align={"center"}>
          Always a Better Colour
        </Title>
        <Title order={4} align={"center"}>
          Noo Cheng Adam Road
        </Title>
        <Title order={4} align={"center"}>
          Big Prawn Mee
        </Title>
        <Title order={4} align={"center"}>
          Adam Road Food Centre
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
          <QuoteSpan text={quoteText} subText="says Aik Cheng."></QuoteSpan>
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
          <Text align={"left"}>{bodyText[1]}</Text>
          <Text align={"left"}>{bodyText[2]}</Text>
          <RevealAnswerStack />
          <Text align={"left"}>{bodyText[3]}</Text>
          <Text align={"left"}>{bodyText[4]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "When it's time to replace missing or worn out melamine tableware, many hawkers tend to stick to the same ones they started out with. Not for Teo Aik Cheng, who firmly believes in continually “upgrading” his offerings. The hawker used to serve his prawn noodles in white tableware before switching to lemon green. A few years ago, he replaced them with a new design embossed with wave patterns around its base.",
  "As the second-generation owner of a stall started by his parents over three decades ago, Aik Cheng recognises that many customers enjoy hawker food because it is value for money. However, that does not mean what he serves should look cheap.",
  "“In the past, we used plain bowls but we began buying more expensive ones over the years so that our food looks of value,” says Aik Cheng.",
  "It is also important to pick the colours that contribute to customers' experience. He picked lemon green because it contrasts against the reddish prawn noodles and it is his favourite colour. Customers who choose the stall's most expensive item also get their orders served in larger black tableware, which Aik Cheng believes visually communicate that they are getting their money's worth.",
  "“If I give you a big and pretty bowl, you won't think $10 is expensive. But if I serve you in a small bowl, you will think it is expensive even though the amount of food is the same,” he explains.",
];

const quoteText =
  "There are always new designs and colours, so you have to upgrade to make sure your food looks presentable and appetising to customers,";

function RevealAnswerStack() {
  const [revealed, setRevealed] = useState(false);
  const fileNames = ["3", "3-Answer"];
  return (
    <Box style={{ width: "112%", marginLeft: "-6%" }}>
      <Image
        src={`/images/peoples-palette/better-colour/TealBGTop.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
      <Box
        style={{
          background: "#8CF2E6",
          padding: "6%",
          marginTop: "-2px", // to remove white line
          marginBottom: "-2px", // to remove white line
        }}
      >
        <Stack spacing={"xl"} align="center">
          <Title align={"left"} order={3}>
            {'Which colour is more "premium"?'}
          </Title>

          <Flex
            mih={200}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            {fileNames.map((fileName) => {
              const showingBoolean = fileName.includes("Answer");
              return (
                <Image
                  key={fileName}
                  src={`/images/peoples-palette/better-colour/${fileName}.webp`}
                  alt=""
                  fit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: showingBoolean == revealed ? 1 : 0,
                  }}
                />
              );
            })}
          </Flex>

          <div style={{ marginBottom: "-60px" }}>
            <BlackButton
              w={120}
              h={40}
              onClick={() => {
                setRevealed(!revealed);
              }}
            >
              Answer
            </BlackButton>
          </div>
        </Stack>
      </Box>
      <Image
        src={`/images/peoples-palette/better-colour/TealBGBottom.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
          zIndex: -1,
          top: "-20px",
        }}
      />
    </Box>
  );
}
