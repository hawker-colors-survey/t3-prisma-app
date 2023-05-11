import type { ReactNode } from "react";
import { Box, Center, Stack, Image, Space } from "@mantine/core";
import { BlackButton, Button } from "~/src/components/Button";

export function PeoplesPaletteLayout({
  headerFolder,
  headerNode,
  children,
  onBack,
}: {
  headerFolder?: string;
  headerNode: ReactNode;
  children: ReactNode;
  onBack: () => void;
}) {
  return (
    <Box
      style={{
        background: "url(/images/bg.png) repeat",
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
      }}
    >
      <Center>
        {headerFolder && (
          <>
            <Image
              src={`/images/peoples-palette/${headerFolder}/HeaderBG.webp`}
              alt=""
              fit="cover"
              style={{
                width: "100%",
                position: "relative",
                top: 0,
                zIndex: 2,
              }}
            />
          </>
        )}
        <div
          style={{ position: "absolute", top: "25px", right: "5%", zIndex: 3 }}
        >
          <Button orientation="right" size="sm"></Button>
        </div>
        <Box
          style={{
            padding: "5%",
            position: "absolute",
            top: "50px",
            zIndex: 3,
          }}
        >
          <Center>
            <BlackButton size="md" w="120px" onClick={onBack}>
              Home
            </BlackButton>
          </Center>
          <Space h="lg"></Space>
          {headerNode}
        </Box>
      </Center>
      <Box style={{ padding: "5%" }}>
        <Stack spacing="lg">
          {children}
          <Center>
            <BlackButton size="md" w="120px" onClick={onBack}>
              Home
            </BlackButton>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
}
