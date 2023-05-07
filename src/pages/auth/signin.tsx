import type { BuiltInProviderType } from "next-auth/providers";
import {
  getProviders,
  signIn,
  signOut,
  useSession,
  type LiteralUnion,
  type ClientSafeProvider,
} from "next-auth/react";
import { useEffect } from "react";

type SignInProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

const HC_LOCAL_KEY = "HC_LOCAL_KEY";

export default function SignIn({ providers }: SignInProps) {
  const { status, data } = useSession();

  async function handleSignIn(provider: ClientSafeProvider) {
    if (provider.id === "credentials") {
      const localState = localStorage.getItem(HC_LOCAL_KEY) || '{"email":""}';
      const { email } = JSON.parse(localState) as { email: string };
      await signIn("credentials", { email, redirect: false });
    } else {
      await signIn(provider.id, { redirect: false });
    }
  }

  function handleSignOut() {
    if (data?.user.email?.includes("@gmail.com")) {
      localStorage.removeItem(HC_LOCAL_KEY);
    }
    void signOut({ redirect: false });
  }

  useEffect(() => {
    if (status === "loading" || data === null || !localStorage) return;

    const { email = "" } = data.user;
    if (typeof email === null) throw new Error("why is email null?");

    const localState = JSON.parse(
      localStorage.getItem(HC_LOCAL_KEY) || '{"email":""}'
    ) as unknown as Record<string, string>;
    console.log("hello wolrd", { data, localState });

    if (
      localState.email?.includes("@example.com") &&
      !email?.includes("@example.com")
    ) {
      localStorage.setItem(
        HC_LOCAL_KEY,
        JSON.stringify({ ...localState, email })
      );
    } else if (email?.includes("@example.com")) {
      localStorage.setItem(HC_LOCAL_KEY, JSON.stringify({ email }));
    } else if (email?.includes("@gmail.com")) {
      localStorage.setItem(HC_LOCAL_KEY, JSON.stringify({ email }));
    }
  }, [status, data]);

  return (
    <>
      {data?.user.name}
      {data?.user.email}
      <br />
      <br />
      <br />
      {Object.values(providers).map((provider) => (
        <button key={provider.name} onClick={() => void handleSignIn(provider)}>
          Sign in with {provider.name}
        </button>
      ))}
      <br />
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

export async function getServerSideProps() {
  const providers = (await getProviders()) || {};
  return { props: { providers } };
}
