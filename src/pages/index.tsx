import { type NextPage } from "next";

import { useHawkerSession } from "../hooks";
import { SignIn } from "../feature/auth";
import { Button, Stack } from "@mantine/core";
import { signOut } from "next-auth/react";
import { HC_LOCAL_KEY } from "../constants/keys";

const Home: NextPage = () => {
  const { data } = useHawkerSession();
  // const user = api.user.getUser;

  function handleClearGuest() {
    localStorage?.removeItem(HC_LOCAL_KEY);
    window.location.reload();
  }

  if (data === undefined) return <></>;
  return (
    <Stack align="center">
      <pre>You are {JSON.stringify(data, null, 2)}</pre>
      <SignIn />

      {data?.type === "provider" && (
        <Button onClick={() => void signOut()}>Sign out</Button>
      )}
      {data?.type === "guest" && (
        <Button onClick={handleClearGuest}>Clearing out guest</Button>
      )}
    </Stack>
  );
};

export default Home;
