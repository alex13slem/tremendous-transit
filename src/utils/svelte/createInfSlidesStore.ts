import { writable } from 'svelte/store';

// Define InfSlide type
export type InfSlide<T> = T & { infIdx: number };

type Options = {
  speed?: number;
};

export const createInfSlidesStore = <T>(slides: T[]) => {
  const $infSlides = writable<InfSlide<T>[]>(
    slides.map((s, idx) => ({ ...s, infIdx: idx }))
  );
  const $activeIdx = writable(1);
  const $shiftIdx = writable(0);
  const $slidingProcess = writable(false);
  const $initLeft = writable(false);

  const setLoading = (loading: boolean, direction?: 'left' | 'right') => {
    $slidingProcess.set(loading);
    if (loading && direction) {
      $initLeft.set(direction === 'right');
    }
  };

  const updateIndexes = (
    direction: 'left' | 'right',
    infSlides: InfSlide<T>[],
    activeIdx: number
  ) => {
    const shift = direction === 'right' ? 1 : -1;
    const newActiveIdx =
      direction === 'right'
        ? activeIdx - 1 < 0
          ? infSlides.length - 1
          : activeIdx - 1
        : activeIdx + 1 > infSlides.length - 1
        ? 0
        : activeIdx + 1;

    return { shift, newActiveIdx };
  };

  const moveSlide = (direction: 'left' | 'right', options: Options = {}) => {
    $slidingProcess.update((slidingProcess) => {
      if (slidingProcess) return true;
      setLoading(true, direction);

      let infSlides: InfSlide<T>[];
      $infSlides.update((currentSlides) => {
        infSlides = currentSlides;
        return currentSlides;
      });

      let activeIdx: number;
      $activeIdx.update((currentIdx) => {
        activeIdx = currentIdx;
        return currentIdx;
      });

      const { shift, newActiveIdx } = updateIndexes(
        direction,
        infSlides!,
        activeIdx!
      );
      $shiftIdx.update((shiftIdx) => shiftIdx + shift);
      $activeIdx.set(newActiveIdx);

      const nextSlide =
        infSlides![direction === 'right' ? 0 : infSlides!.length - 1];
      const infIdx = nextSlide.infIdx + shift * -1;
      const removedSlide = {
        ...infSlides![direction === 'right' ? infSlides!.length - 1 : 0],
        infIdx,
      };

      $infSlides.set(
        direction === 'right'
          ? [removedSlide, ...infSlides!]
          : [...infSlides!, removedSlide]
      );

      setTimeout(() => {
        $infSlides.update((currentSlides) => {
          return direction === 'right'
            ? currentSlides.slice(0, -1)
            : currentSlides.slice(1);
        });
        setLoading(false);
      }, options.speed || 700);

      return true;
    });
  };

  const handleWheel = (e: WheelEvent, options?: Options) => {
    e.preventDefault();
    if (e.deltaY < 0) moveSlide('right', options);
    if (e.deltaY > 0) moveSlide('left', options);
  };

  const wheel = (node: HTMLElement, options?: Options) => {
    const handleWheelBound = (e: WheelEvent) => handleWheel(e, options);

    node.addEventListener('wheel', handleWheelBound);
    return {
      destroy() {
        node.removeEventListener('wheel', handleWheelBound);
      },
    };
  };

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
