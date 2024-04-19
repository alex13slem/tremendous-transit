import { atom, onSet } from 'nanostores';

export const toasterHub = atom<string[]>([]);

onSet(toasterHub, () => {
  const intervalIdx = setInterval(() => {
    toasterHub.set(toasterHub.get().slice(0, toasterHub.get().length - 1));
  }, 3000);
  return () => {
    clearInterval(intervalIdx);
  };
});
