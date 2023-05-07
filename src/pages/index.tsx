import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/src/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <p>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
      <AuthShowcase />
    </>
  );
};

export default Home;

const AuthShowcase = () => {
  const { data } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined,
    { enabled: Boolean(data?.user) }
  );

  return (
    <>
      <p>
        {data && <span>Logged in as {data.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button onClick={data ? () => void signOut() : () => void signIn()}>
        {data ? "Sign out" : "Sign in"}
      </button>
    </>
  );
};
