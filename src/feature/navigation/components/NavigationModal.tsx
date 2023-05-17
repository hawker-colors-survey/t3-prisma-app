import { Modal, UnstyledButton, Image, Flex, Space, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavigationStackModal } from "./Navigation";
import { OtherButton } from "~/src/components";

const maxPopupHeight = 70; // in dvh
const popupOffset = `${(100 - maxPopupHeight) / 2}dvh`;

export const NavigationModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Flex direction="row" justify="flex-end" style={{ width: "100%" }}>
        <UnstyledButton
          onClick={open}
          style={{ filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))" }}
        >
          <Image
            src="/images/empty_plates/White.webp"
            alt="logo"
            width={40}
            height={40}
          />
        </UnstyledButton>
      </Flex>
      <Modal.Root
        opened={opened}
        onClose={close}
        padding={0}
        yOffset={popupOffset}
        style={{ overflow: "hidden" }}
        transitionProps={{
          transition: "pop-top-right",
          duration: 200,
          timingFunction: "ease-in-out",
        }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body style={{ overflowX: "clip", position: "relative" }}>
            <Box
              style={{
                position: "absolute",
                right: "1em",
                top: "1em",
              }}
            >
              <OtherButton size="sm" iconItem="close" onClick={close} />
            </Box>
            <Space h={40}></Space>
            <NavigationStackModal />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
