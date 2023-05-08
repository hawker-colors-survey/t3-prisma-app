import { Fragment } from "react";
import { useRouter } from "next/router";

import { Divider, Grid, Stack, Text } from "@mantine/core";

import { Button } from "~/src/components";
import { links } from "../links";
import { HomeNavigation } from "./HomeNavigation";

export const Navigation = () => {
  const router = useRouter();

  function handleClick(link: string) {
    return () => router.push(link);
  }

  return (
    <Stack w="100%" spacing="10dvh">
      <HomeNavigation />
      {links.map(({ title, subtitle = "", link }, idx) => {
        const isEven = idx % 2;
        const display = [
          <Text
            key={title}
            style={{ height: "auto" }}
            align={isEven ? "end" : "start"}
          >
            Image Here
          </Text>,
          <Stack key={title} align={isEven ? "flex-start" : "flex-end"}>
            <Text align={isEven ? "start" : "end"} fz="18px">
              {title}
            </Text>
            <Text align={isEven ? "start" : "end"} fz="12px">
              {subtitle}
            </Text>
            <Button
              disabled={router.pathname.includes(link)}
              size="sm"
              onClick={void handleClick(link)}
            />
          </Stack>,
        ];
        const orderedDisplay = display
          .sort(() => (isEven ? -1 : 1))
          .map((item, itemIdx) => (
            <Grid.Col key={itemIdx} span={6} p={0}>
              {item}
            </Grid.Col>
          ));

        return (
          <Fragment key={title}>
            <Divider orientation="horizontal" />
            <Grid justify="space-between" p={0}>
              {orderedDisplay}
            </Grid>
          </Fragment>
        );
      })}
      <Divider orientation="horizontal" />
    </Stack>
  );
};
