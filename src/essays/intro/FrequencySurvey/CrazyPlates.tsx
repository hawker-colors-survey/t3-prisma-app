import { Box, Image } from '@mantine/core';

const plates = [
  { size: 120, x: 40, y: 30 },
  { size: 120, x: 70, y: 50 },
  { size: 120, x: 70, y: 20 },
  { size: 120, x: 35, y: 65 },
  { size: 120, x: 50, y: -5 },
  { size: 120, x: -10, y: 10 },
  { size: 120, x: 80, y: 75 },
];

export const CrazyPlates = ({ freq }: { freq: number | undefined }) => (
  <Box style={{ position: 'relative' }}>
    {plates.map(({ size, x, y }, idx) => {
      if (freq === undefined) return null;
      if (freq < idx + 1) return null;
      return (
        <Box
          key={idx}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}dvw`,
            top: `${y}dvh`,
            zIndex: -90,
          }}
        >
          <Image
            alt=""
            fit="cover"
            src="/images/empty_plates/DarkOrange.webp"
          />
        </Box>
      );
    })}
  </Box>
);
