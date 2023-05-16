import { Modal, UnstyledButton, Image, Flex, Space } from "@mantine/core";
import { useState } from "react";
import { NavigationStackModal } from "./Navigation";
import { OtherButton } from "~/src/components";

const maxPopupHeight = 70; // in dvh
const popupOffset = `${(100 - maxPopupHeight) / 2}dvh`;

export const NavigationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex direction="row" justify="flex-end" style={{ width: "100%" }}>
        <UnstyledButton
          onClick={() => setIsOpen(true)}
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
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        padding={0}
        yOffset={popupOffset}
        style={{ overflow: "hidden" }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body style={{ overflowX: "clip", position: "relative" }}>
            <Modal.CloseButton
              style={{
                position: "absolute",
                right: "1em",
                top: "1em",
              }}
            >
              <OtherButton size="sm" iconItem="close" />
            </Modal.CloseButton>
            <Space h={40}></Space>
            <NavigationStackModal />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
