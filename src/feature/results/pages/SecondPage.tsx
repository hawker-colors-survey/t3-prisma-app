import { useState } from "react";
import { Button, Text } from "@mantine/core";

import { getAllRecords } from "~/src/apis";
import type { FieldsStructure } from "~/src/apis/types";
import type { ColourKey, FoodKey } from "~/src/constants";
import type { FilterState } from "~/src/feature/results/reducer";
import {
  ColourStack,
  FilterText,
  filterByAge,
  filterByArea,
  filterByFood,
  filterByFrequency,
} from "~/src/feature/results";

type ColourCount = {
  key: ColourKey;
  value: number;
};

export type FoodPercentage = {
  name: FoodKey;
  colours: ColourCount[];
};

export function SecondPage({ onNext }: { onNext: () => void }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FoodPercentage>({} as FoodPercentage);

  async function handleFetch(state: FilterState) {
    setLoading(true);
    setData({} as FoodPercentage);
    const records = await getAllRecords();
    const food = state.food.label as FoodKey;
    const cached = records
      ?.filter(
        (fields: FieldsStructure) =>
          filterByAge(fields, state.ageRange.value) &&
          filterByArea(fields, state.area.value) &&
          filterByFrequency(fields, state.frequency.value) &&
          filterByFood(fields, food)
      )
      .map((field) => field[food])
      .reduce((acc, colour) => {
        if (acc[colour]) acc[colour] += 1;
        else acc[colour] = 1;
        return acc;
      }, {} as Record<ColourKey, number>);

    const sortedResults = (Object.entries(cached) as [ColourKey, number][])
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => b.value - a.value);

    setData({ name: food, colours: sortedResults });
    setLoading(false);
  }

  const text = !Boolean(Object.keys(data?.colours || []).length)
    ? "Click the next button"
    : `Sample size: ${Object.keys(data?.colours || []).length}`;

  return (
    <>
      <FilterText
        isLoading={loading}
        onSubmit={(state) => void handleFetch(state)}
      />

      <Text span c="gray" inherit>
        {loading ? "Loading..." : text}
      </Text>

      {data.name && <ColourStack data={data}></ColourStack>}
      <Button onClick={() => onNext()}>Click Next</Button>
    </>
  );
}
