import { useEffect, useState } from "react";
import { getProviders, useSession, signIn } from "next-auth/react";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import type { BuiltInProviderType } from "next-auth/providers";

import { Box, Button } from "@mantine/core";
import { api } from "~/src/utils/api";
import { v4 as uuid } from "uuid";
import { HC_SESSION_KEY } from "~/src/constants/keys";
import type { SessionState } from "~/src/hooks";

type ProviderId = LiteralUnion<BuiltInProviderType, string>;
type Providers = Record<ProviderId, ClientSafeProvider> | null;

export function SignIn({ callbackUrl = "" }: { callbackUrl?: string }) {
  const [providers, setProviders] = useState<Providers>();
  const createMutation = api.user.createGuest.useMutation();
  const { data, status } = useSession();

  function handleContinueAsGuest() {
    const id = uuid();
    createMutation.mutate({ id });
    const now = new Date();
    const expirationTime = new Date(now.getTime() + 12 * 60 * 60 * 1000);

    const guestState: SessionState = {
      session: {
        type: "guest",
        user: { id, email: `${id}@example.com`, name: "Guest User" },
        expires: expirationTime.toISOString(),
      },
    };

    localStorage.setItem(HC_SESSION_KEY, JSON.stringify(guestState));
    window.location.reload();
  }

  async function handleSignIn(providerId: ProviderId) {
    const props: Record<string, any> = {};
    if (callbackUrl) props.callbackUrl = callbackUrl;
    await signIn(providerId, props);
  }

  useEffect(() => {
    async function fetchProviders() {
      setProviders(await getProviders());
    }
    void fetchProviders();
  }, []);

  if (!providers) return null;

  return (
    <>
      <Box>Status: {status}</Box>
      <pre>data: {JSON.stringify(data, null, 2)}</pre>

      {Object.values(providers).map(({ name, id }) => (
        <Button key={name} onClick={() => void handleSignIn(id)}>
          Sign in with {name}
        </Button>
      ))}
      <Button variant="default" onClick={handleContinueAsGuest}>
        Continue as Guest
      </Button>
    </>
  );
}
