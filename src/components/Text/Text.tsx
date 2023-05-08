import { Text as ManText } from "@mantine/core";
import type { ReactNode } from "react";

export const Text = ({ children }: { children: ReactNode }) => {
  return (
    <ManText
      style={{
        fontFamily: "Source Sans Pro, sans-serif",
        fontWeight: 600,
        fontSize: "20px",
      }}
    >
      {children}
    </ManText>
  );
};
