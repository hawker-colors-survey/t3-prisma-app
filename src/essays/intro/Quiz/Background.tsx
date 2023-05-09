import { Circles } from "~/src/components";

export const Background = () => {
  return circles.map((circle, idx) => <Circles key={idx} circles={[circle]} />);
};

const circles = [
  { size: 230, x: 50, y: -10, color: "#FFA337" },
  { size: 150, x: 80, y: 65, color: "#CDBAFF" },
];
