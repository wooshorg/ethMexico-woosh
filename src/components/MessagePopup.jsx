import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './global/Button';

const MessagePopup = (props) => {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <div onClick={() => openModal()}>
          <Button size="sm">
            {props.thanks ? 'Send thanks' : '+ Add a message'}
          </Button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal className="h-screen w-full z-50">
        <Dialog.Overlay
          className="h-screen w-full bg-black/80 fixed inset-0"
          onClick={() => {
            closeModal();
          }}
        />
        <Dialog.Content className="bg-dark top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed flex flex-col py-8 px-5">
          <Dialog.Close className="self-end" onClick={() => closeModal()}>
            <img src="assets/close.svg" />
          </Dialog.Close>
          <Dialog.Title className="mb-4">
            {props.thanks ? 'Send thanks to @user.lens' : 'Write your message'}
          </Dialog.Title>
          <input
            placeholder="Optional message here"
            className="w-[40ch] rounded-100vw px-6 py-4 mb-10 text-black"
          />
          <Button size="sm">Send</Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MessagePopup;
