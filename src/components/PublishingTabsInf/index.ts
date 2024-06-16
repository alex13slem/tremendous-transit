import type { PublishingSlideSelect } from '../../schemas/publishingSlidesSchema';
import { publishingSlides } from '../../store/publishing-slides';
import {
  createInfSlidesStore,
  type InfSlide,
} from '../../utils/svelte/createInfSlidesStore';
import Root from './index.svelte';

const {
  activeIdx,
  infSlides,
  initLeft,
  shiftIdx,
  slidingProcess,
  moveSlide,
  wheel,
} = createInfSlidesStore(publishingSlides);

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
