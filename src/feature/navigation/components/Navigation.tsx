import { useRouter } from "next/router";

import { Box, Flex, Grid, Image, Stack, Text } from "@mantine/core";

import { Button } from "~/src/components";
import { links } from "../links";
import { HomeNavigation } from "./HomeNavigation";
import { ColourBGNames, ImageFileNames, TextAligns } from "../utils";

export const Navigation = () => {
  const router = useRouter();

  function handleClick(link: string) {
    return () => router.push(link);
  }

  return (
    <Stack
      w="100.1%"
      spacing={0}
      style={{
        background: "transparent",
      }}
    >
      <Box w="100%" pl="lg" pr="lg" mt="lg">
        <HomeNavigation />
      </Box>
      {links.map(({ title, subtitle = "", link }, idx) => {
        const isEven = idx % 2;
        const lastIdx = links.length - 1;
        const display = [
          <Flex
            key={title}
            align={isEven ? "end" : "start"}
            style={{
              height: "auto",
            }}
            mih={120}
          >
            {idx != lastIdx && (
              <Image
                alt=""
                maw={idx == lastIdx - 1 ? 100 : 150}
                mih={120}
                src={`/images/navigation-home/${ImageFileNames[idx]}.webp`}
                style={{ zIndex: 10 + idx }}
              />
            )}
          </Flex>,
          <Stack
            key={title}
            align={isEven ? "flex-start" : "flex-end"}
            justify="center"
            spacing={"xs"}
          >
            <Text
              align={isEven ? "start" : "end"}
              fz="18px"
              fw={600}
              style={{ zIndex: 10 }}
            >
              {title}
            </Text>
            <Text
              align={isEven ? "start" : "end"}
              fz="12px"
              style={{ zIndex: 10 }}
            >
              {subtitle}
            </Text>
            <Button
              disabled={router.pathname.includes(link)}
              size="sm"
              onClick={handleClick(link)}
            />
          </Stack>,
        ];
        const orderedDisplay = display
          .sort(() => (isEven ? -1 : 1))
          .map((item, itemIdx) => {
            const isImage = isEven ? itemIdx == 1 : itemIdx == 0;
            return (
              <Grid.Col key={itemIdx} span={isImage ? 3 : 5} p={0}>
                {item}
              </Grid.Col>
            );
          });

        return (
          <Box
            key={title}
            pt="lg"
            pb="sm"
            style={{
              position: "relative",
            }}
          >
            <Image
              alt=""
              src={`/images/navigation-home/${ColourBGNames[idx]}.webp`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0 + idx,
              }}
            />
            <Box
              pl={isEven ? "lg" : 0}
              pr={isEven ? "0" : "lg"}
              style={{
                zIndex: 10 + idx,
                position: "relative",
              }}
            >
              <Grid
                justify="space-between"
                p={0}
                m={0}
                grow
                columns={8}
                align={TextAligns[idx]}
              >
                {orderedDisplay}
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export const NavigationStackModal = () => {
  const router = useRouter();

  function handleClick(link: string) {
    return () => router.push(link);
  }

  const ColourBGNames = [
    "YellowBG",
    "BlueBG",
    "PurpleBG",
    "PinkBG",
    "GreyBG",
    "GreenBG",
    "OrangeBG",
  ];

  const TextAligns = [
    "center",
    "flex-end",
    "center",
    "flex-end",
    "flex-end",
    "flex-end",
    "flex-end",
  ];

  return (
    <Stack
      w="100%"
      spacing={0}
      style={{ background: "transparent", overflow: "hidden" }}
    >
      <Box w="100%" pl="lg" pr="lg" mt="lg" mb="18%">
        <HomeNavigation />
      </Box>
      {links.map(({ title, subtitle = "", link }, idx) => {
        const isEven = idx % 2;
        const display = [
          <Flex
            key={title}
            align={isEven ? "end" : "start"}
            style={{
              height: "auto",
            }}
          />,
          <Stack
            key={title}
            align={isEven ? "flex-start" : "flex-end"}
            justify="center"
            spacing={5}
          >
            <Text
              align={isEven ? "start" : "end"}
              fz="18px"
              fw={600}
              style={{ zIndex: 10 }}
            >
              {title}
            </Text>
            <Text
              align={isEven ? "start" : "end"}
              fz="12px"
              style={{ zIndex: 10 }}
            >
              {subtitle}
            </Text>
            <Button
              disabled={router.pathname.includes(link)}
              size="sm"
              onClick={handleClick(link)}
            />
          </Stack>,
        ];
        const orderedDisplay = display
          .sort(() => (isEven ? -1 : 1))
          .map((item, itemIdx) => {
            const isImage = isEven ? itemIdx == 1 : itemIdx == 0;
            return (
              <Grid.Col key={itemIdx} span={isImage ? 3 : 5} p={0}>
                {item}
              </Grid.Col>
            );
          });

        return (
          <Box
            key={title}
            pt="lg"
            style={{
              position: "relative",
              marginTop: "-12%",
            }}
          >
            <Image
              alt=""
              src={`/images/navigation-popup/${ColourBGNames[idx]}.webp`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 0 + idx,
              }}
            />
            <Box
              pl={isEven ? "lg" : 0}
              pr={isEven ? "0" : "lg"}
              style={{ zIndex: 10 + idx, position: "relative" }}
            >
              <Grid
                justify="space-between"
                pb={0}
                mt="6%"
                mb="3%"
                grow
                columns={8}
                align={TextAligns[idx]}
              >
                {orderedDisplay}
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};
