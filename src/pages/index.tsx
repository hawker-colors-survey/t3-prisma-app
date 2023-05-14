import { type NextPage } from "next";

import { useHawkerSession } from "../hooks";
import { SignIn } from "../feature/auth";
import { Button, Stack } from "@mantine/core";
import { signOut } from "next-auth/react";
import { HC_SESSION_KEY } from "../constants/keys";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data } = useHawkerSession();
  const router = useRouter();
  // const user = api.user.getUser;

  function handleClearGuest() {
    localStorage?.removeItem(HC_SESSION_KEY);
    window.location.reload();
  }
  
  useEffect(() => {
    router.push("/intro");
    // TODO fetch for user answers and if incomplete, route to /intro
  }, [data, router]);

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
