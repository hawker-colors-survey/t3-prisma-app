import { type AppType } from "next/app";
import { type Session } from "next-auth";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import { api } from "~/src/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Hawker Colours</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            fontFamily: "Lora, serif",
            headings: { fontFamily: "Ubuntu, sans-serif" },
            fontSizes: {
              xs: "15px",
              sm: "18px",
              md: "18px",
              lg: "32px",
              xl: "72px",
            },
            components: {
              Title: {
                styles: {
                  root: {
                    "&:is(h1)": { fontWeight: 800 },
                    "&:is(h2)": { fontSize: 24, fontWeight: 500 },
                  },
                },
              },
            },
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
