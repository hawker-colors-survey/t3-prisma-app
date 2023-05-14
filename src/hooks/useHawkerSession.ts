import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { HC_SESSION_KEY } from "~/src/constants/keys";
import { api } from "../utils/api";

export type SessionState = {
  session: HawkerSession;
};

type HawkerSession = Session & {
  type: "guest" | "provider";
};

// This hook merges guest session state in localStorage with provider session state

export const useHawkerSession = () => {
  const { data } = useSession();
  const [sessionData, setSessionData] = useState<HawkerSession | null>();
  const updateUser = api.user.linkGuestToUser.useMutation();

  useEffect(() => {
    if (!localStorage) return;

    const localState = localStorage.getItem(HC_SESSION_KEY);

    if (typeof localState !== "string") {
      return data
        ? setSessionData({ ...data, type: "provider" })
        : setSessionData(null);
    }

    const parsedState = JSON.parse(localState) as SessionState;
    // TODO Refresh session if expired or error
    if (!parsedState) throw new Error("Local session object not found");
    if (data === null || data === undefined) {
      setSessionData({ ...parsedState.session, type: "guest" });
    } else {
      if (data.user.id !== parsedState.session.user.id) {
        // handles session storage and local storage clash
        localStorage.removeItem(HC_SESSION_KEY);
        updateUser.mutate({
          guestEmail: parsedState.session.user.email || "",
          userEmail: data.user.email || "",
        });
      }

      setSessionData({ ...data, type: "provider" });
    }
  }, [data]);

  return { data: sessionData, setData: setSessionData };
};

// Guest mode:
// session: { type: "guest", user: { name: "Guest", email: "" }}
// journey: { step: 5, answers: {} }}

// Provider mode:
// session: { type: "provider", user: { name: "Provider", email: "" }}
// journey: { step: 5, answers: {} }}
