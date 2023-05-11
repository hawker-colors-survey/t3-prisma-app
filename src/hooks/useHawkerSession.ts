import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { HC_LOCAL_KEY } from "~/src/constants/keys";
import { api } from "../utils/api";

export type LocalState = {
  session: { data: HawkerSession };
};

type HawkerSession = Session & {
  type: "guest" | "provider";
};

export const useHawkerSession = () => {
  const { data } = useSession();
  const [sessionData, setSessionData] = useState<HawkerSession | null>();
  const updateUser = api.user.linkGuestToUser.useMutation();

  useEffect(() => {
    if (!localStorage) return;

    const localState = localStorage.getItem(HC_LOCAL_KEY);

    if (typeof localState !== "string") {
      return data
        ? setSessionData({ ...data, type: "provider" })
        : setSessionData(null);
    }

    const parsedState = JSON.parse(localState) as LocalState;
    // TODO Refresh session if expired or error
    if (!parsedState.session) throw new Error("Local session object not found");
    if (data === null || data === undefined) {
      setSessionData({
        ...(parsedState.session.data as Session),
        type: "guest",
      });
    } else {
      if (data.user.id !== parsedState.session.data.user.id) {
        localStorage.removeItem(HC_LOCAL_KEY);
        updateUser.mutate({
          guestEmail: parsedState.session.data.user.email || "",
          userEmail: data.user.email || "",
        });
      }

      setSessionData({ ...data, type: "provider" });
    }
  }, [data]);

  return { data: sessionData, setData: setSessionData };
};
