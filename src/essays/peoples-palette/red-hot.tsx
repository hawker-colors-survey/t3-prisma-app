import { QuoteSpan } from "~/src/components/Text";
import {
  Stack,
  Text,
  Title,
  Image,
  Box,
  Flex,
  Grid,
  Center,
} from "@mantine/core";
import { PeoplesPaletteLayout } from "~/src/feature/layouts";
import { type CSSProperties, type ReactNode, useState } from "react";

export function RedHot({ handleBack }: { handleBack: () => void }) {
  const fileName = "red-hot";
  const headerNode = (
    <>
      <Stack spacing={0}>
        <Title order={1} align={"center"}>
          Red Hot Competition
        </Title>
        <Title order={4} align={"center"}>
          N.M. Abdul Rahim
        </Title>
        <Title order={4} align={"center"}>
          Ayer Rajah Food Centre
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

          <InteractiveStack>
            <QuoteSpan
              text={quoteText}
              subText="says Rahim, who spoke through his daughter Banu."
            ></QuoteSpan>
          </InteractiveStack>

          <Text align={"left"}>{bodyText[1]}</Text>
          <ThirdFoodGrid />

          <Text align={"left"}>{bodyText[2]}</Text>
          <Text align={"left"}>{bodyText[3]}</Text>
        </>
      </PeoplesPaletteLayout>
    </>
  );
}

const bodyText = [
  "From mee goreng to sup tulang, Abdul Rahim serves what are arguably the brightest hawker dishes in Singapore. They are the result of colouring that makes the food look spicy and appetising. As if this is not striking enough, Rahim also serves the dishes in matching red melamine plates to stand out from his competitors.",
  "Indeed, there are at least three other stalls selling mee goreng along the same row as N.M. Abdul Rahim. But only he uses the red-on-red combination that has become a fiery sign for what many regard to be the best mee goreng in Singapore. Besides standing out, Rahim worried his red dishes would stain tableware of other colours. Hence, he picked out red after taking over the shop from his father when it relocated from Shenton Way to Ayer Rajah in 1982.",
  "Although his mee goreng has become synonymous with red tableware after four decades of use, Rahim is unsentimental about it. It is simply a convenient solution, although his daughter believes that it attracts potential customers too.",
  "“If you're new to the area, you will look at what most people are eating and you can see from their faces if the food they ordered is yummy or not,” she says. “If our mee goreng looks good, the red plates will let customers know which stall to get from!”",
];

const quoteText =
  "You see, at Ayer Rajah Food Centre, there is not one but plenty of mee goreng stalls. So we need to use a colour that avoids confusion,";

function InteractiveStack({ children }: { children: ReactNode }) {
  return (
    <Box
      style={{
        width: "112%",
        marginLeft: "-6%",
        paddingTop: "12%",
        marginBottom: "200px",
      }}
    >
      <Image
        src={`/images/peoples-palette/red-hot/BlueBGTop.webp`}
        alt=""
        fit="cover"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
      <FirstFoodGrid />
      <Box
        style={{
          background: "#A5E6FE",
          marginTop: "-2px", // to remove white line
          marginBottom: "-2px", // to remove white line
          paddingTop: "50px",
        }}
      >
        <Box
          style={{
            padding: "6%",
            position: "static",
          }}
        >
          {children}
        </Box>
      </Box>
      <SecondFoodGrid />
      <Image
        src={`/images/peoples-palette/red-hot/BlueBGBottom.webp`}
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

function FirstFoodGrid() {
  return (
    <Grid
      grow
      gutter={0}
      justify="center"
      align="center"
      style={{ background: "#A5E6FE", marginTop: "-2px" }}
    >
      <Grid.Col span={1} style={{ marginTop: "-200px" }}>
        <Center>
          <ImagesWithNamePopup
            filename="BeeHoonGoreng"
            style={{
              width: "120%",
              marginTop: "20%",
            }}
          />
        </Center>
      </Grid.Col>
      <Grid.Col span={1} style={{ marginTop: "-200px" }}>
        <Flex direction={"column"} align={"space-around"}>
          <ImagesWithNamePopup
            filename="KwayTeowGoreng"
            style={{
              width: "140%",
              marginLeft: "-40%",
            }}
          />
          <ImagesWithNamePopup
            filename="SupTulang"
            style={{
              width: "120%",
              marginLeft: "-20%",
            }}
          />
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

function SecondFoodGrid() {
  return (
    <Grid
      grow
      gutter={0}
      justify="center"
      align="center"
      style={{ background: "#A5E6FE", marginBottom: "-2px" }}
    >
      <Grid.Col
        span={1}
        style={{
          marginBottom: "-300px",
          marginRight: "-25px",
        }}
      >
        <Center>
          <ImagesWithNamePopup filename="MeeKuah" style={{ width: "100%" }} />
        </Center>
      </Grid.Col>
      <Grid.Col
        span={1}
        style={{
          marginBottom: "-300px",
          marginLeft: "-25px",
        }}
      >
        <Flex direction={"column"} align={"space-around"}>
          <ImagesWithNamePopup
            filename="MuttonSteak"
            style={{ width: "100%" }}
          />
          <ImagesWithNamePopup
            filename="MeeGoreng"
            style={{
              width: "125%",
              marginLeft: "-25%",
            }}
          />
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

function ThirdFoodGrid() {
  return (
    <Box
      style={{
        width: "112%",
        left: "-6%",
        position: "relative",
        marginTop: "15%",
        marginBottom: "1%",
      }}
    >
      <Image
        src={`/images/peoples-palette/red-hot/BlueBGCurve.webp`}
        alt=""
        fit="cover"
        style={{
          position: "relative",
          zIndex: -1,
        }}
      />
      <div
        style={{
          marginTop: "-100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Flex
          direction="row"
          justify="flex-start"
          style={{
            width: "100%",
            maxHeight: "100%",
            position: "relative",
            // border: '1px solid black',
          }}
        >
          <ImagesWithNamePopup
            filename="NasiGoreng"
            style={{
              maxWidth: "450px",
              width: "70%",
            }}
          />
        </Flex>
        <Flex
          direction="row"
          justify="flex-end"
          style={{
            width: "100%",
            maxHeight: "100%",
            position: "relative",
            // border: '1px solid black',
          }}
        >
          <ImagesWithNamePopup
            filename="MaggiGoreng"
            style={{
              maxWidth: "300px",
              // border: '1px solid black',
              objectFit: "contain",
            }}
          />
        </Flex>
      </div>
    </Box>
  );
}

function ImagesWithNamePopup({
  filename,
  style,
}: {
  filename: string;
  style?: CSSProperties;
}) {
  const [showName, setShowName] = useState(false);

  let fullFilename = filename;

  if (showName) {
    fullFilename = `${filename}Text`;
  }

  return (
    <Box onClick={() => setShowName(!showName)} style={{ height: "240px" }}>
      <Image
        src={`/images/peoples-palette/red-hot/${fullFilename}.webp`}
        alt={filename}
        fit="cover"
        style={style}
      />
    </Box>
  );
}
