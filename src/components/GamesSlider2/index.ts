import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import Root from './index.svelte';

export const swiperThumbParams: SwiperOptions = {
  modules: [Pagination, Mousewheel, EffectFade],
  effect: 'fade',
  mousewheel: true,
  autoplay: { delay: 10000 },
  speed: 700,
  pagination: {
    clickable: true,
    el: '.pagination',
    bulletClass: 'bullet',
    bulletActiveClass: 'active',
  },
};

export const swiperContentParams: SwiperOptions = {
  effect: 'creative',
  creativeEffect: {
    prev: {
      opacity: 0,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  speed: 700,
  enabled: false,
};

export { Root as GamesSlider2, Root };
