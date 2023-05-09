import { type CircleConfig, Circles } from "~/src/components";

const circles = [
  [
    { size: 190, x: 45, y: 50, color: "#CDBAFF" },
    { size: 190, x: 60, y: 70, color: "#CDBAFF" },
  ],
  [
    { size: 230, x: -20, y: 60, color: "#a4e4fc" },
    { size: 165, x: 20, y: -2, color: "#a4e4fc" },
  ],
  [
    { size: 45, x: 12, y: 57, color: "#C8F255" },
    { size: 80, x: 10, y: -5, color: "#C8F255" },
  ],
];

export const Background = ({ page }: { page: number }) => {
  return (
    <Circles
      position="absolute"
      circles={circles.map((circle) => circle[page] as CircleConfig)}
    />
  );
};
