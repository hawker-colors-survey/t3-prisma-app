import { Button, Modal } from '@mantine/core';
import { useState } from 'react';
import { Navigation } from './Navigation';

export const NavigationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click Plate</Button>
      <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
        <Navigation />
      </Modal>
    </>
  );
};
