import localforage from "localforage";
import { atom } from "nanostores";

// BLOGERS START

export const blogerFormSubmitted = atom<boolean>(false);

try {
  const submitted = await localforage.getItem("blogerFormSubmitted");
  if (submitted) {
    blogerFormSubmitted.set(true);
  }
} catch (error) {
  console.error(error);
}
// BLOGERS END

// PUBLISHES START

export const pubFormSubmitted = atom<boolean>(false);
export const pubTargetSlug = atom<string | null>(null);

try {
  const submitted = await localforage.getItem("pubFormSubmitted");
  if (submitted) {
    pubFormSubmitted.set(true);
  }
} catch (error) {
  console.error(error);
}
// PUBLISHES END

// SERVICES START

export const servFormSubmitted = atom<boolean>(false);
export const servTargetSlug = atom<string | null>(null);

try {
  const submitted = await localforage.getItem("servFormSubmitted");
  if (submitted) {
    servFormSubmitted.set(true);
  }
} catch (error) {
  console.error(error);
}
// SERVICES END
