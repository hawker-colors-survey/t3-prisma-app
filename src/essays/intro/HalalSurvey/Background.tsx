import { Box } from '@mantine/core';

export const Background = () => {
  return (
    <Box
      style={{
        backgroundColor: '#8CF2E6',
        zIndex: -999,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    />
  );
};
