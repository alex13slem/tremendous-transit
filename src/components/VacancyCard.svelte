<script lang="ts">
  import ShareLinksBlock from './ShareLinksBlock.svelte';
  import BtnFirm from './ui/BtnFirm.svelte';
  import LinkToDetailPage from './ui/LinkToDetailPage.svelte';
  import { navigate } from 'astro:transitions/client';
  import { getWorkplaceString } from '../store/career';
  import type { VacancySelect } from '../schemas/vacancySchema';
  import ArrowDetail from './svg/ArrowDetail.svelte';

  export let linkHistoryReplace: true | null = null;
  export let vacancy: VacancySelect;
  export let isEven: boolean | null = null;
  export let size: 'sm' | 'md' = 'md';

  const { workplace, info, links } = vacancy;

  const salary =
    info?.salary &&
    new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(info.salary);

  const place = getWorkplaceString(workplace);
</script>

<article class:isEven class="size-{size}">
  <h3>{info.profession.join(' / ')}</h3>
  <p>{place}</p>
  {#if salary && size === 'md'}
    <p><b>{salary}</b></p>
  {/if}

  {#if size === 'md'}
    <a href={links.form} class="btn" target="_blank"
      ><BtnFirm>Откликнуться</BtnFirm></a
    >
  {/if}

  <LinkToDetailPage
    to="/career/{vacancy.slug}"
    replace={linkHistoryReplace}
    text="Подробнее"
    variant={size === 'sm' ? 'arrow' : 'default'}
  />

  {#if size === 'md'}
    <ShareLinksBlock
      to="/career/{vacancy.slug}"
      title={info.profession.join(' / ')}
      text="Поделиться вакансией"
    />
  {/if}
</article>

<style lang="scss">
  article {
    overflow: hidden;
    position: relative;
    padding: 20px;
    background-color: rgb(var(--c-card));
    display: grid;
    gap: 20px;

    & > :global(.link-to-detail-page) {
      justify-self: end;
      grid-column: 2;
      grid-row: 1;
    }
    &.size {
      &-sm {
        min-height: 115px;
      }
      &-md {
        grid-template-columns: 1fr auto;
        :global(.link-to-detail-page) {
          grid-column: 2;
          grid-row: 1;
        }

        @media (max-width: 629.98px) {
          padding-inline: var(--container-offset);
        }
        @media (max-width: 424.98px) {
          h3 {
            grid-column: 1;
          }

          & > :global(.share-links-block) {
            align-items: flex-start;
          }
          grid-template-columns: 1fr;
        }

        @media (max-width: 629.98px) {
          border: none;
          &::after {
            display: none;
          }
        }
      }
    }

    border: thin solid;
    border-image: linear-gradient(90deg, rgb(var(--c-card-border)), transparent)
      1;

    &::after {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-color: rgb(var(--c-card-border));
      top: -1px;
      left: -1px;
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }

    @media (min-width: 890px) {
      &.isEven {
        border-image: linear-gradient(
            -90deg,
            rgb(var(--c-card-border)),
            transparent
          )
          1;
        &::after {
          right: -1px;
          left: auto;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      }
    }

    & > * {
      grid-column: 1;
    }

    & > :global(.share-links-block) {
      align-self: end;
    }
  }

  h3 {
    text-transform: uppercase;
    font-size: clamp(1rem, 0.761rem + 1.02vw, 1.25rem);
    line-height: 1;
  }

  p {
    font-size: 12px;
    line-height: 1;
  }
</style>
