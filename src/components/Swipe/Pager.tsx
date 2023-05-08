import { useState } from "react";
import { Center, Stack } from "@mantine/core";
import { Carousel, type Embla } from "@mantine/carousel";

export const Pager = ({}) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [pages, setPages] = useState([
    { id: 1, content: "Page 1", backgroundColor: "blue" },
    { id: 2, content: "Page 2", backgroundColor: "yellow" },
    { id: 3, content: "Page 3", backgroundColor: "red" },
    { id: 4, content: "Page 4", backgroundColor: "orange" },
    { id: 5, content: "Page 5", backgroundColor: "purple" },
    { id: 6, content: "Page 6", backgroundColor: "cyan" },
    { id: 7, content: "Page 7", backgroundColor: "brown" },
  ]);

  function handleAdd() {
    setPages([
      ...pages,
      {
        id: pages.length + 1,
        content: `Page ${pages.length + 1}`,
        backgroundColor: "green",
      },
    ]);
  }

  function handleNext() {
    embla?.scrollNext();
  }

  function handleBack() {
    embla?.scrollPrev();
  }

  return (
    <Carousel
      orientation="vertical"
      slideSize="100%"
      align="start"
      height="100dvh"
      draggable={false}
      getEmblaApi={setEmbla}
      withControls={false}
    >
      {pages.map((page) => (
        <Carousel.Slide
          key={page.id}
          style={{ width: "100dvw", overflowY: "scroll" }}
          bg={page.backgroundColor}
        >
          <Center style={{ height: "120dvh" }}>
            <Stack>
              <button onClick={handleAdd}>Add</button>
              <button onClick={handleNext}>Next</button>
              <button onClick={handleBack}>Back</button>
              {page.content}
            </Stack>
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
