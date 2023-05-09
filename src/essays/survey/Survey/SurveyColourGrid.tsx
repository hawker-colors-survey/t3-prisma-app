import { Center, SimpleGrid } from "@mantine/core";
import { type ColourKey, colours } from "~/src/constants";
import { PinButton } from "~/src/components";

export const SurveyColourGrid = ({
  selected,
  onSelected,
}: {
  selected: ColourKey | "";
  onSelected: (colour: ColourKey) => void;
}) => {
  return (
    <Center pl="5%" pr="5%" style={{ height: "100%", width: "100%" }} pt="md">
      <SimpleGrid
        cols={5}
        style={{ height: "100%", width: "90%" }}
        spacing="xs"
      >
        {colours.map((colour) => {
          return (
            <PinButton
              key={colour}
              onClick={() => onSelected(colour)}
              selected={selected === colour}
              colour={colour}
            />
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
