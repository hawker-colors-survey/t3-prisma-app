import { api } from "~/src/utils";

export const useUser = ({ id = "" }: { id?: string }) => {
  const { data: user, ...rest } = api.user.getUserById.useQuery(
    { id },
    { enabled: Boolean(id) }
  );
  const { mutate: createGuest } = api.user.createGuest.useMutation();
  const { mutate: linkAccount } = api.user.linkGuestToUser.useMutation();
  return { user, createGuest, linkAccount, ...rest };
};
