import { atom } from 'nanostores';

export const servModalIsOpen = atom<boolean>(false);

export const pubModalIsOpen = atom<boolean>(false);

export const qrDonatModalIsOpen = atom<boolean>(false);

export const artistModal = atom<{
  isOpen: boolean;
  id: string | null;
}>({ isOpen: false, id: null });
