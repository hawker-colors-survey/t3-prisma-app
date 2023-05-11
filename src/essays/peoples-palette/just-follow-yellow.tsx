import { QuoteSpan } from "~/src/components/Text";
import { Stack, Text, Title, Image, Box, Flex } from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";
import { useState } from "react";
import { BlackButton } from "~/src/components";

export function JustFollowYellow({ handleBack }: { handleBack: () => void }) {
  const fileName = "just-follow-yellow";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align="center">
          “Just Follow” Yellow
        </Title>
        <Title order={4} align="center">
          Selamat Datang Warong Pak Sapari
        </Title>
        <Title order={4} align="center">
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
          <Text align="left">{bodyText[0]}</Text>
          <Text align="left">{bodyText[1]}</Text>

          <InteractiveImageStack></InteractiveImageStack>

          <Text align="left">{bodyText[4]}</Text>
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
          <QuoteSpan text={quoteText} subText="says Sumadi."></QuoteSpan>
          <Text align="left">{bodyText[5]}</Text>
          <Text align="left">{bodyText[6]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "When Sumadi Sapari joined the family business of selling mee soto and mee rebus, his late father only had one instruction: “Whatever I do, just follow”.",
  "This is why the third generation owner of Selemat Datang Warong Pak Sapari has retained everything from his father's time. From the 21 ingredients in his famous mee soto broth to the stall's distinctive red and white signage, and even its yellow melamine tableware.",
  "Sumadi reveals that the stall previously used orange melamine tableware after switching from porcelain plates. Yellow came about because his father had mixed up the colours while ordering replacements—and it was not the only mistake Sumadi inherited.",
  "“You seldom see a Malay stall with a red colour signboard with white words. Last time, my grandfather's stall had a green signboard, but the contractor made a mistake when we ordered a new one,” he says. “My dad said never mind, what is done is done.”",
  "While honouring his father's wish to keep things the way they were, Sumadi notices how the yellow tableware brings out the clarity of his mee soto broth better than if it is a darker colour. Customers have also come to recognise his store for it.",
  "Ultimately, he believes what matters to customers is the taste of the food and not how it looks.",
  "“To me, it is not because of colour. You must have good food and your quality is good lah!”",
];

const quoteText =
  "People sometimes forget the name of our stall, but they tell their friends to go to the one with the yellow bowl,";

function InteractiveImageStack() {
  const [noodleState, setNoodleState] = useState<"BW" | "Then" | "Now">("BW");
  const [signboardState, setSignboardState] = useState<
    "BW" | "Expectation" | "Reality"
  >("BW");

  const noodleFileNames = ["1-BW.webp", "1-Then.webp", "1-Now.webp"];
  const signboardFileNames = [
    "2-BW.webp",
    "2-Expectation.webp",
    "2-Reality.webp",
  ];

  return (
    <Box style={{ width: "112%", marginLeft: "-6%", paddingTop: "12%" }}>
      <Image
        src={`/images/peoples-palette/just-follow-yellow/PurpleBGTop.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
      <Box
        style={{
          background: "#CDBAFF",
          paddingLeft: "6%",
          paddingRight: "6%",
          marginTop: "-2px", // to remove white line
          marginBottom: "-2px", // to remove white line
        }}
      >
        <Stack spacing="xl" align="center">
          {/* <Image
            src={`/images/peoples-palette/just-follow-yellow/1-${noodleState}.webp`}
            alt=""
            fit="cover"
            style={{
              width: '90%',
              position: 'relative',
              marginTop: '-150px',
            }}
          /> */}
          <Flex
            mih={220}
            style={{
              position: "relative",
              width: "90%",
              marginTop: "-150px",
            }}
          >
            {noodleFileNames.map((fileName) => {
              const showingBoolean = fileName.includes(noodleState);
              return (
                <Image
                  key={fileName}
                  src={`/images/peoples-palette/just-follow-yellow/${fileName}`}
                  alt=""
                  fit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: showingBoolean ? 1 : 0,
                  }}
                />
              );
            })}
          </Flex>
          <Flex align="center" justify="center" direction="row" gap="xl">
            <BlackButton
              style={{ width: "40dvw" }}
              onClick={() => {
                setNoodleState("Then");
              }}
            >
              Then
            </BlackButton>
            <BlackButton
              style={{ width: "40dvw" }}
              onClick={() => {
                setNoodleState("Now");
              }}
            >
              Now
            </BlackButton>
          </Flex>

          <Text align="left">{bodyText[2]}</Text>
          <Text align="left">{bodyText[3]}</Text>

          <Flex
            mih={130}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            {signboardFileNames.map((fileName) => {
              const showingBoolean = fileName.includes(signboardState);
              return (
                <Image
                  key={fileName}
                  src={`/images/peoples-palette/just-follow-yellow/${fileName}`}
                  alt=""
                  fit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: showingBoolean ? 1 : 0,
                  }}
                />
              );
            })}
          </Flex>

          <Flex align="center" justify="center" direction="row" gap="xl">
            <BlackButton
              style={{ width: "40dvw" }}
              onClick={() => {
                setSignboardState("Expectation");
              }}
            >
              Expectation
            </BlackButton>
            <BlackButton
              style={{ width: "40dvw" }}
              onClick={() => {
                setSignboardState("Reality");
              }}
            >
              Reality
            </BlackButton>
          </Flex>
        </Stack>
      </Box>
      <Image
        src={`/images/peoples-palette/just-follow-yellow/PurpleBGBottom.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
    </Box>
  );
}
