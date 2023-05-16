import { type NextPage } from "next";

import { useHawkerSession } from "../hooks";
import { SignIn } from "../feature/auth";
import { Button, Stack } from "@mantine/core";
import { signOut } from "next-auth/react";
import { HC_SESSION_KEY } from "../constants/keys";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { session } = useHawkerSession();
  const router = useRouter();

  function handleClearGuest() {
    localStorage?.removeItem(HC_SESSION_KEY);
    window.location.reload();
  }

  useEffect(() => {
    router.push("/intro");
    // TODO fetch for user answers and if incomplete, route to /intro
  }, [session, router]);

  if (session === undefined) return <></>;
  return (
    <Stack align="center">
      <pre>You are {JSON.stringify(session, null, 2)}</pre>
      <SignIn />

      {session?.type === "provider" && (
        <Button onClick={() => void signOut()}>Sign out</Button>
      )}
      {session?.type === "guest" && (
        <Button onClick={handleClearGuest}>Clearing out guest</Button>
      )}
    </Stack>
  );
};

export default Home;
