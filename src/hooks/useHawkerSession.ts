import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { HC_SESSION_KEY } from "~/src/constants/keys";
import { api } from "../utils/api";

export type SessionState = {
  session: HawkerSession | null | undefined;
};

export type HawkerSession = Session & {
  type: "guest" | "provider";
};

// This hook merges guest session state in localStorage with provider session state

/**
 * This function handles User/Guest Sessions
 *
 * @return undefined- Function is not yet ready
 * @return null- No session found
 * @return Session- User/Guest Session found
 *
 */

export const useHawkerSession: () => {
  session: HawkerSession | null | undefined;
  setSession: Dispatch<SetStateAction<HawkerSession | null | undefined>>;
} = () => {
  const { data } = useSession();
  const [sessionData, setSessionData] = useState<HawkerSession | null>();
  const updateUser = api.user.linkGuestToUser.useMutation();

  useEffect(() => {
    if (!localStorage || data === undefined) return;
    const localState = localStorage.getItem(HC_SESSION_KEY);
    if (data) setSessionData({ ...data, type: "provider" });
    else setSessionData(null);
    if (!localState) return;

    const parsedState = JSON.parse(localState) as { session: HawkerSession };
    if (data && data.user.id !== parsedState.session.user.id) {
      localStorage.removeItem(HC_SESSION_KEY);
      updateUser.mutate({
        guestEmail: parsedState.session.user.email || "",
        userEmail: data.user.email || "",
      });
    }
    // will bug if for some reason there is a session in localstorage but not in database
    if (!data) setSessionData({ ...parsedState.session, type: "guest" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { session: sessionData, setSession: setSessionData };
};
