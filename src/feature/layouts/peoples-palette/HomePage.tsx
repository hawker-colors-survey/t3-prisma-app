import { Center, Box, Image, Title, Text, Space } from "@mantine/core";
import { Button, Select } from "~/src/components";
import { chapters } from "~/src/pages/essays/peoples-palette/home";

const initialIndex = 0;

export function HeroNavFooter({
  currentIndex,
  onNext,
}: {
  currentIndex: number | null;
  onNext: () => void;
}) {
  return (
    <>
      <Center>
        <div
          style={{
            width: "45dvh",
            maxHeight: "15vh",
            objectFit: "contain",
          }}
        >
          {chapters.map((chapter) => {
            const showingIndex = (currentIndex ?? 0) + 1;
            return (
              <Image
                key={chapter.folder}
                src={`/images/peoples-palette/${chapter.folder}/Hero.webp`}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "15dvh",
                  zIndex: 3,
                  width: "45dvh",
                  opacity: chapter.id == showingIndex ? 1 : 0,
                }}
              />
            );
          })}
        </div>
      </Center>

      {chapters.map((chapter) => {
        // chapter id start from 1, im sorry
        const showingIndex = (currentIndex ?? 0) + 1;
        return (
          <Image
            key={chapter.folder}
            src={`/images/peoples-palette/${chapter.folder}/HeroBG.webp`}
            alt=""
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              zIndex: 2,
              opacity: chapter.id == showingIndex ? 1 : 0,
            }}
          />
        );
      })}

      <Box
        style={{
          width: "100%",
          height: "fit-content",
          bottom: "5dvh",
          position: "absolute",
          zIndex: 4,
        }}
      >
        <Center>
          <Button orientation="down" size="sm" onClick={onNext} />
        </Center>
      </Box>
    </>
  );
}

export function HomePage({
  onSelectIdx,
  chapterTitleArray,
  currentIndex,
  onNext,
}: {
  onSelectIdx: (idx: number) => void;
  chapterTitleArray: string[];
  currentIndex: number | null;
  onNext: () => void;
}) {
  return (
    <Box
      style={{
        background: "url(/images/bg.png) repeat",
        position: "relative",
        zIndex: 1,
        height: "100dvh",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25px",
          right: "5%",
          zIndex: 3,
        }}
      >
        <Button
          orientation="right"
          size="sm"
          onClick={() => {
            // router.push('/peoples-palette/test-swipe');
          }}
        ></Button>
      </div>
      <Box
        style={{
          padding: "5%",
          marginTop: "8dvh",
          height: "fit-content",
          width: "100%",
        }}
      >
        <Title order={1}>The People&apos;s Palette</Title>

        <Text fs={"italic"}>Every hawker has a colour story</Text>
        <Space h="1dvh"></Space>
        <Box>
          <Select
            onSelected={onSelectIdx}
            style={{ marginTop: "-16px" }}
            initialSlide={initialIndex}
            slidesInView={6}
            loop
            height={"30dvh"}
          >
            {chapterTitleArray}
          </Select>
        </Box>
      </Box>
      <HeroNavFooter currentIndex={currentIndex} onNext={onNext} />
    </Box>
  );
}
