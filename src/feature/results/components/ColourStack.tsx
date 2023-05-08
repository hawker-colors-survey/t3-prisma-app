import { HEX_LIST } from "~/src/constants";
import { Box, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import type { FoodPercentage } from "../pages";

export function ColourStack({ data }: { data: FoodPercentage }) {
  const { name = "", colours = [] } = data || {};
  const colourSum: number = data.colours.reduce(
    (acc, { value }) => acc + value,
    0
  );
  const colourKey = colours[0]?.key || "";

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (!window) return;
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        position: "relative",
      }}
    >
      {colours.map(({ key, value }, idx) => {
        const height = `${(value * windowHeight * 0.3) / colourSum}px`;
        return (
          <Box
            key={key}
            style={{
              backgroundImage:
                key == "LightStone"
                  ? "url('/images/misc/LightStone100px.webp')"
                  : "",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              backgroundColor: HEX_LIST[key],
              height,
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              paddingLeft: "1rem",
            }}
          >
            {idx < 3 && (
              <Text span inherit c={key == "Black" ? "White" : "Black"}>
                {`${((value * 100) / colourSum).toFixed(1)}%`}
              </Text>
            )}
          </Box>
        );
      })}
      {Boolean(colours.length) && (
        <Image
          alt=""
          width="50dvw"
          src={`/images/foods/${toSnakeCase(name)}/${colourKey}.webp`}
          fit="contain"
          withPlaceholder
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </div>
  );
}

function toSnakeCase(str: string) {
  return str
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("_");
}
