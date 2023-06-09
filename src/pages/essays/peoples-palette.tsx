import { Carousel, type Embla } from "@mantine/carousel";
import { useState } from "react";

import {
  AuspiciousOrange,
  BlueForPeace,
  JustFollowYellow,
  BetterColour,
  ColourYouOrder,
  ModernisingCreation,
  RedHot,
  NeutralSigns,
  ElevatingIcon,
  SavingMemories,
} from "~/src/essays/peoples-palette";
import { NavigationModal } from "~/src/feature/navigation";
import { Stack } from "@mantine/core";
import { HomePage } from "~/src/feature/layouts/peoples-palette";

export const chapters = [
  { id: 1, title: "Auspicious Orange", folder: "auspicious-orange" },
  { id: 2, title: "Blue for Peace, Not War", folder: "blue-for-peace" },
  { id: 3, title: '"Just Follow" Yellow', folder: "just-follow-yellow" },
  { id: 4, title: "Always a Better Colour", folder: "better-colour" },
  { id: 5, title: "You Are the Colour You Order", folder: "colour-you-order" },
  {
    id: 6,
    title: "Modernising His Mum's Creation",
    folder: "modernising-creation",
  },
  { id: 7, title: "Red Hot Competition", folder: "red-hot" },
  { id: 8, title: "Black or White: Neutral Signs", folder: "neutral-signs" },
  { id: 9, title: "Elevating a Humble Hawker Icon", folder: "elevating-icon" },
  { id: 10, title: "Saving Her Colourful Memories", folder: "saving-memories" },
];

export default function PeoplesPalette() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isInitial, setIsInitial] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const handleNext = () => {
    embla?.scrollNext();
  };

  function handleBack() {
    embla?.scrollPrev();
  }

  function handleNewIndex(idx: number) {
    if (idx == -1) setCurrentIndex(0);
    else if (isInitial < 2) setIsInitial(isInitial + 1);
    else setCurrentIndex(idx);
  }

  const chapterTitleArray = chapters.map((chapter) => chapter.title);

  return (
    <Stack
      p={0}
      spacing={0}
      bg="#ddd"
      style={{
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <Stack
        pt={"xl"}
        pr={"xl"}
        style={{ position: "fixed", top: 0, right: 0, zIndex: 100 }}
      >
        <NavigationModal />
      </Stack>
      <Carousel
        orientation="vertical"
        slideSize="100%"
        align="start"
        top={0}
        height="100dvh"
        draggable={false}
        getEmblaApi={setEmbla}
        withControls={false}
      >
        <Carousel.Slide
          key={-1}
          style={{ width: "100dvw", overflowY: "hidden" }}
        >
          <HomePage
            onSelectIdx={handleNewIndex}
            chapterTitleArray={chapterTitleArray}
            currentIndex={currentIndex}
            onNext={handleNext}
          />
        </Carousel.Slide>
        <Carousel.Slide
          key={currentIndex}
          style={{ width: "100dvw", overflowY: "scroll" }}
        >
          {currentIndex == 0 && <AuspiciousOrange onBack={handleBack} />}
          {currentIndex == 1 && <BlueForPeace onBack={handleBack} />}
          {currentIndex == 2 && <JustFollowYellow onBack={handleBack} />}
          {currentIndex == 3 && <BetterColour onBack={handleBack} />}
          {currentIndex == 4 && <ColourYouOrder onBack={handleBack} />}
          {currentIndex == 5 && <ModernisingCreation onBack={handleBack} />}
          {currentIndex == 6 && <RedHot onBack={handleBack} />}
          {currentIndex == 7 && <NeutralSigns onBack={handleBack} />}
          {currentIndex == 8 && <ElevatingIcon onBack={handleBack} />}
          {currentIndex == 9 && <SavingMemories onBack={handleBack} />}
        </Carousel.Slide>
      </Carousel>
    </Stack>
  );
}
