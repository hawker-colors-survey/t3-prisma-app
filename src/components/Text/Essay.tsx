import type { ReactNode } from "react";
import { Text } from "@mantine/core";

export const Essay = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      style={{
        fontFamily: "Lora, serif",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "170%",
      }}
    >
      {children}
    </Text>
  );
};
