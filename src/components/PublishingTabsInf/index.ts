import type { PublishingSlideSelect } from '../../schemas/publishingSlidesSchema';
import { publishingSlides } from '../../store/publishing-slides';
import { useInfSlides, type InfSlide } from '../../utils/svelte/useInfSlides';
import Root from './index.svelte';

const {
  activeIdx,
  infSlides,
  initLeft,
  shiftIdx,
  slidingProcess,
  moveSlide,
  wheel,
} = useInfSlides(publishingSlides.get());

export type InfPublishingSlide = InfSlide<PublishingSlideSelect>;

export {
  Root as PublishingTabs,
  Root,
  activeIdx,
  infSlides,
  initLeft,
  moveSlide,
  shiftIdx,
  slidingProcess,
  wheel,
};
