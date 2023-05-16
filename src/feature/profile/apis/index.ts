import type { SessionState } from "~/src/hooks";
import { api } from "~/src/utils/api";

export type ColourPref = "white" | "coloured";

export const useProfile = ({ session }: SessionState) => {
  const {
    data: profile,
    refetch: refetchProfile,
    ...rest
  } = api.profile.getProfile.useQuery(
    { userId: session?.user.id || "" },
    { enabled: Boolean(session) }
  );
  const { mutate: createProfile } = api.profile.createProfile.useMutation({
    onSuccess: () => refetchProfile(),
  });
  const { mutate: updateProfile } = api.profile.patchProfile.useMutation({
    onSuccess: () => refetchProfile(),
  });

  return { profile, createProfile, updateProfile, ...rest };
};
