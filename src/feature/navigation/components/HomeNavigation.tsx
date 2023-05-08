import { useRouter } from "next/router";

import { Button as MantineButton } from "@mantine/core";

export const HomeNavigation = () => {
  const router = useRouter();

  function handleClick(link: string) {
    return () => router.push(link);
  }
  return (
    <MantineButton variant="unstyled" onClick={void handleClick("/home")}>
      HOME SWEET HOME
    </MantineButton>
  );
};
