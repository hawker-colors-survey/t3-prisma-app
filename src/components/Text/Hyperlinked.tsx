import type { ReactNode } from "react";
import { Text } from "@mantine/core";

interface HyperlinkProps {
  children: ReactNode;
  color?: string;
  onClick?: () => void;
}

export function Hyperlinked({
  children,
  color = "blue",
  onClick,
}: HyperlinkProps) {
  return (
    <Text span c={color} inherit onClick={onClick}>
      {children}
    </Text>
  );
}
