import { Dialog, Overlay } from "@mantine/core";
import { SignIn } from "./SignIn";

// Dialog instead of Modal, because we don't want an onClose method

export const SigninModal = ({ opened }: { opened: boolean }) => {
  return (
    <>
      {opened && <Overlay />}
      <Dialog opened={opened} position={{ top: 16, left: 16 }}>
        <SignIn />
      </Dialog>
    </>
  );
};
