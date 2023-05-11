import { Text } from "@mantine/core";

export function QuoteSpan({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) {
  return (
    <>
      <Text span align="left" size={24} fs="italic">
        {`\“`}
        {text}
        {`\”     `}
        <Text span align="left" size={18} fs="normal">
          {subText}
        </Text>
        {/* pass in children */}
      </Text>
    </>
  );
}
