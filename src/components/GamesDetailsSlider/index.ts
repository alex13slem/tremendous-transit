import type { SwiperOptions } from 'swiper/types';
import Root from './index.svelte';

const swiperOptions: SwiperOptions = {
  autoplay: { delay: 10000 },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      effect: 'slide',
    },
  },
  spaceBetween: 20,
};

export { Root as GamesDetailsSlider, Root, swiperOptions };
