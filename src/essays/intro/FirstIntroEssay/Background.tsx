import { type CircleConfig, Circles } from "~/src/components";
import { Center, Image } from "@mantine/core";

export const Background = ({ step }: { step: number }) => {
  return (
    <>
      <Circles
        circles={circles.map((circle) => circle[step] as CircleConfig)}
      />
      <Center
        style={{
          position: "absolute",
          bottom: -30,
          pointerEvents: "none",
          opacity: step === 0 ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        <Image src="/images/stories/FamilyEating.webp" alt="" />
      </Center>
      <Center
        style={{
          position: "absolute",
          bottom: -30,
          pointerEvents: "none",
          opacity: step === 1 ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        <Image src="/images/stories/FamilyEatingBW.webp" alt="" />
      </Center>
    </>
  );
};

const circles: CircleConfig[][] = [
  [
    { size: 210, x: -20, y: 0, color: "#EEEEEE" },
    { size: 210, x: 60, y: -10, color: "#EEEEEE" },
  ],
  [
    { size: 115, x: -25, y: 25, color: "#C8F255" },
    { size: 115, x: -15, y: 10, color: "#C8F255" },
  ],
  [
    { size: 220, x: 20, y: 100, color: "#CDBAFF" },
    { size: 220, x: -20, y: 60, color: "#CDBAFF" },
  ],
  [
    { size: 100, x: 20, y: 100, color: "#f9cdcc" },
    { size: 100, x: 40, y: 80, color: "#f9cdcc" },
  ],
];
