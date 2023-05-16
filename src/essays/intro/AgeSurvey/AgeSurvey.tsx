import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import {
  Box,
  Center,
  Flex,
  Input,
  Space,
  Title,
  UnstyledButton,
} from "@mantine/core";

import { Button } from "~/src/components";

import { Background } from "./Background";
import { Numpad } from "./Numpad";
import type { IntroPageProps } from "~/src/feature/profile";

const maxValidYear = new Date().getFullYear() - 101;
const minValidYear = new Date().getFullYear() - 13;
const currentYear = new Date().getFullYear();

const isNumber = (str: string) => /^[0-9]+$/.test(str);

export const AgeSurvey = ({ onNext }: IntroPageProps) => {
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);
  const [isTooYoung, setIsTooYoung] = useState(false);

  function handleInputChange(newAge: string) {
    setIsTooYoung(false);
    if (!isNumber(newAge) && newAge !== "") return;
    if (newAge.length > 4) return;

    const invalidYear =
      Number(newAge) > currentYear || Number(newAge) < maxValidYear;

    const isInvalid = invalidYear && newAge.length === 4;
    setIsError(isInvalid);
    setAge(isInvalid ? "" : newAge);
  }

  function handleNumpadChange(val: string) {
    handleInputChange(age + val);
  }

  function handleClear() {
    setAge("");
    setIsError(false);
  }

  function handleSubmit() {
    if (Number(age) > minValidYear) {
      setIsTooYoung(true);
      setAge("");
    } else onNext(Number(age));
  }

  const showError = isError || isTooYoung;

  return (
    <>
      <Background />
      <Box pl="xl" pr="xl" style={{ height: "87dvh" }}>
        <Space h="10dvh" />
        <Box>
          <Title order={1}>When were</Title>
          <Title order={1}>you born?</Title>
        </Box>
        <Flex gap="md" align="center">
          <Input
            variant="unstyled"
            size="lg"
            value={age}
            onChange={(e) => handleInputChange(e.target.value)}
            styles={{
              input: {
                fontSize: "50px",
                height: "70px",
                fontWeight: 600,
                fontFamily: "Source Sans Pro",
                paddingBottom: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                width: "36dvw",
                paddingLeft: "8px",
              },
            }}
          />

          <UnstyledButton
            onClick={handleClear}
            style={{
              marginLeft: "-8px",
              marginBottom: "-16px",
              fontSize: "34px",
            }}
          >
            <FiDelete />
          </UnstyledButton>
        </Flex>
        <Space h="1dvh" />
        <Box
          style={{
            visibility: showError ? "visible" : "hidden",
            fontSize: 20,
            fontWeight: 500,
            lineHeight: "120%",
            letterSpacing: "5.5%",
          }}
        >
          {isTooYoung ? (
            <Title order={2}>You have to be above 13 to participate!</Title>
          ) : (
            <Title order={2}>Enter a valid year of birth!</Title>
          )}
        </Box>
        <Space h="1dvh" />
        <Center
          style={{ height: "44dvh", paddingLeft: "3dvh", paddingRight: "3dvh" }}
        >
          <Numpad onTap={handleNumpadChange} />
        </Center>
        <Space h="2dvh" />
        <Center>
          <Button
            size="sm"
            disabled={age.length !== 4}
            onClick={handleSubmit}
          />
        </Center>
      </Box>
    </>
  );
};
