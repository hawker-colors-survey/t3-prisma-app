import { useCallback, useEffect, useState } from "react";
import { Carousel, type CarouselProps } from "@mantine/carousel";
import { Text } from "@mantine/core";
import type { EmblaCarouselType } from "embla-carousel-react";
import { useStyles } from "./Select.styles";

type SelectProps = CarouselProps & {
  slidesInView?: number;
  onSelected?: (index: number) => void;
  children?: React.ReactNode[];
};

export function Select({
  onSelected,
  children = [],
  initialSlide,
  slidesInView = 13,
  ...props
}: SelectProps) {
  const { classes, cx } = useStyles();
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const listLength = embla.scrollSnapList().length;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    const idx = embla.scrollSnapList().findIndex((item) => progress <= item);
    const newIndex = idx === listLength ? idx - 1 : idx;
    setActiveIndex(progress === 0 ? 0 : newIndex);
  }, [embla]);

  useEffect(() => {
    onSelected && onSelected(activeIndex);
  }, [activeIndex, onSelected]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  return (
    <Carousel
      initialSlide={initialSlide}
      speed={1}
      dragFree
      orientation="vertical"
      height="60dvh"
      slideSize={`${100 / slidesInView}%`}
      slideGap="sm"
      align="center"
      styles={{ control: { display: "none" } }}
      className={classes.container}
      getEmblaApi={setEmbla}
      {...props}
    >
      {children.map((child, idx) => {
        const isActive = idx === activeIndex;
        return (
          <Carousel.Slide key={idx}>
            <Text className={cx(classes.slide, isActive && classes.active)}>
              {child}
            </Text>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
