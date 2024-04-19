import { atom } from 'nanostores';
import { onMount } from 'svelte';

export type InfSlide<T> = T & { infIdx: number };

type Options = {
  speed?: number;
};

export const useInfSlides = <T>(slides: T[]) => {
  const $infSlides = atom<InfSlide<T>[]>(
    slides.map((s, idx) => ({ ...s, infIdx: idx }))
  );

  const $activeIdx = atom(1);
  const $shiftIdx = atom(0);
  const $slidingProcess = atom(false);
  const $initLeft = atom(false);

  function handleWheel(e: WheelEvent, options?: Options) {
    e.preventDefault();
    if (e.deltaY < 0) {
      moveSlide('right', options);
    }
    if (e.deltaY > 0) {
      moveSlide('left', options);
    }
  }

  function wheel(node: HTMLElement, options?: Options) {
    onMount(() => {
      node.addEventListener('wheel', (e) => handleWheel(e, options));
      return () => {
        node.removeEventListener('wheel', (e) => handleWheel(e, options));
      };
    });
  }

  function moveSlide(direction: 'left' | 'right', options?: Options) {
    if ($slidingProcess.get()) return;
    $slidingProcess.set(true);

    $initLeft.set(direction === 'right');

    let infSlides = $infSlides.get();
    let activeIdx = $activeIdx.get();
    let shiftIdx = $shiftIdx.get();
    let initLeft = $initLeft.get();

    const shift = initLeft ? 1 : -1;

    $shiftIdx.set(shiftIdx + shift);

    let newActiveIdx = activeIdx;
    if (initLeft) {
      newActiveIdx = activeIdx - 1 < 0 ? infSlides.length - 1 : activeIdx - 1;
    } else {
      newActiveIdx = activeIdx + 1 > infSlides.length - 1 ? 0 : activeIdx + 1;
    }
    $activeIdx.set(newActiveIdx);

    const nextSlide = infSlides[initLeft ? 0 : infSlides.length - 1];
    const infIdx = nextSlide.infIdx + shift * -1;

    const removedSlide = {
      ...infSlides[initLeft ? infSlides.length - 1 : 0],
      infIdx,
    };

    $infSlides.set(
      initLeft ? [removedSlide, ...infSlides] : [...infSlides, removedSlide]
    );
    infSlides = $infSlides.get();

    setTimeout(() => {
      const updatedInfSlides = initLeft
        ? infSlides.slice(0, -1)
        : infSlides.slice(1);
      $infSlides.set(updatedInfSlides);
      $slidingProcess.set(false);
    }, options?.speed || 700);
  }

  return {
    infSlides: $infSlides,
    activeIdx: $activeIdx,
    shiftIdx: $shiftIdx,
    slidingProcess: $slidingProcess,
    initLeft: $initLeft,
    moveSlide,
    wheel,
  };
};
