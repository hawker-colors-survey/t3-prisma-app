import { useState, useReducer } from "react";
import { Group, Title, Modal } from "@mantine/core";

import { Button } from "~/src/components/Button";

import { FilterSelect } from "./FilterSelect";
import {
  type FilterOption,
  type FilterState,
  type FoodOption,
  filterReducer,
  filters,
  initialState,
} from "../reducer";
import { ages, frequencies, locations, foods } from "../options";
import { Hyperlinked } from "~/src/components/Text/Hyperlinked";

const maxPopupHeight = 45; // in vh
const popupOffset = `${(100 - maxPopupHeight) / 2}vh`;

const options = [ages, locations, frequencies, foods];

type FilterTextProps = {
  isLoading: boolean;
  onSubmit: (state: FilterState) => void;
};

export const FilterText = ({
  isLoading = false,
  onSubmit,
}: FilterTextProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [popupIdx, setPopupIdx] = useState(-1);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const filterKey = filters[popupIdx] as keyof FilterState;

  function handleSubmit() {
    onSubmit(state);
    setHasSubmitted(true);
  }

  function handleFilterChange(option: FilterOption | FoodOption) {
    setHasSubmitted(false);
    setPopupIdx(-1);
    dispatch({
      type: "UPDATE_FILTER",
      payload: { [filterKey]: option },
    });
  }

  function handleReset() {
    dispatch({ type: "RESET" });
    setHasSubmitted(false);
  }

  function handlePopup(num: number) {
    return () => setPopupIdx(num);
  }

  return (
    <>
      <Modal
        opened={popupIdx > -1}
        onClose={handlePopup(-1)}
        withCloseButton={false}
        centered
        yOffset={popupOffset}
        transitionProps={{ transition: "fade", exitDuration: 250 }}
      >
        <FilterSelect
          options={options[popupIdx] ?? []}
          onChange={handleFilterChange}
          initialValue={
            options[popupIdx]?.find(
              (option) => option.label === state[filterKey].label
            )?.value
          }
        />
      </Modal>
      <Group spacing={4} position="left" align="center">
        <Title order={1}>
          People{" "}
          <Hyperlinked color="violet" onClick={handlePopup(0)}>
            {state.ageRange.label}
            <br />
          </Hyperlinked>
          who frequent hawker centres in
          <br />
          <Hyperlinked color="green" onClick={handlePopup(1)}>
            {state.area.label}
          </Hyperlinked>{" "}
          region and eat hawker food
          <br />
          <Hyperlinked color="orange" onClick={handlePopup(2)}>
            {state.frequency.label}
          </Hyperlinked>{" "}
          a week prefers this colour for <br />
          <Hyperlinked color="red" onClick={handlePopup(3)}>
            {state.food.label}
          </Hyperlinked>
        </Title>
      </Group>

      <Button
        loading={isLoading}
        orientation={hasSubmitted ? "down" : "right"}
        onClick={hasSubmitted ? handleReset : handleSubmit}
        loaderPosition="center"
      />
    </>
  );
};
