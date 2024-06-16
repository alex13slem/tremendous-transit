<script lang="ts">
  import { cn, toRoman } from '../utils/helpers';
  import { parse } from 'marked';
  import type { GameDevStageSelect } from '../schemas/gamesSchema';
  import DonatQrModal from './modals/DonatQrModal.svelte';
  import BtnFirm from './ui/BtnFirm.svelte';
  import { useragent } from '@sveu/browser';
  import { scale } from 'svelte/transition';
  const { mobile } = useragent();

  export let isLast: boolean = false;

  export let stage: GameDevStageSelect;

  let proseRef: HTMLDivElement;
  let modalIsOpen = false;

  let state: 'done' | 'process' | 'planned' = 'done';
  if (stage.currentCash && stage.totalCash)
    if (stage.currentCash < stage.totalCash && !stage.isPlanned) {
      state = 'process';
    }
  if ((stage.currentCash && !stage.totalCash) || stage.isPlanned)
    state = 'planned';
  if (stage.isPlanned) state = 'planned';
</script>

<div
  class={cn('stage', state)}
  class:isLast
  class:isEven={!(stage.num % 2)}
  role="button"
  tabindex="0"
>
  <button class="stage-num" tabindex="-1">{toRoman(stage.num)}</button>
  <article class="stage-art">
    <h3>{stage.title}</h3>
    {#if stage.description}
      <div
        transition:scale={{ delay: 300, duration: 300 }}
        class="prose"
        bind:this={proseRef}
      >
        {@html parse(stage.description)}
      </div>
    {/if}
    {#if !stage.isPlanned && stage.currentCash && stage.totalCash}
      <div class="scale-block">
        <h4>
          Собранно средств
          <span>($ {stage.currentCash} из {stage.totalCash})</span>
        </h4>
        <div
          class="scale"
          style="
      --max-value: {stage.totalCash};
      --value: {stage.currentCash};
      "
        />
      </div>
      <div class="bottom-block">
        {#if state === 'done'}
          <p class="done-text">ЭТАП ЗАВЕРШЁН</p>
        {:else if $mobile}
          <a href={`/games/${stage.gameSlug}/dev-stages/${stage.slug}`}>
            <BtnFirm>Поддержать проект</BtnFirm>
          </a>
        {:else}
          <BtnFirm on:click={() => (modalIsOpen = true)}
            >Поддержать проект</BtnFirm
          >
        {/if}
        <div class="progress-num">
          {Math.floor((stage.currentCash / stage.totalCash) * 100)}%
        </div>
      </div>
    {/if}
  </article>
</div>

{#if stage.crowdfundingPlatforms}
  <DonatQrModal
    bind:isOpen={modalIsOpen}
    crowdfundingPlatforms={stage.crowdfundingPlatforms}
  />
{/if}

<style lang="scss">
  .stage {
    --size: 52px;
    --c-line: rgb(var(--c-border));
    position: relative;
    @media (max-width: 1279.98px) {
      margin-top: 80px;
    }
    @media (min-width: 1280px) {
      height: 600px;
      width: 50%;

      display: flex;
      justify-content: end;

      transition: var(--trans-default);
      transition-property: filter;
      &.isEven {
        margin-left: auto;
        &:not(.isLast)::after {
          left: 0;
        }
      }
      &::after,
      &::before {
        width: 1px;
        right: 0;
        height: calc(var(--size) * 8);
        position: absolute;
        top: calc(var(--size) * 1.5);
      }
      &::after {
        z-index: -1;
        content: '';
        background-image: linear-gradient(
          to top,
          transparent 0%,
          transparent calc(var(--size) / 2),
          var(--c-line) calc(var(--size) / 2),
          var(--c-line) calc(var(--size) * 1.5),
          transparent calc(var(--size) * 1.5),
          transparent calc(var(--size) * 2.5),
          var(--c-line) calc(var(--size) * 2.5),
          var(--c-line) calc(var(--size) * 3.5),
          transparent calc(var(--size) * 3.5),
          transparent calc(var(--size) * 4.5),
          var(--c-line) calc(var(--size) * 4.5),
          var(--c-line) calc(var(--size) * 5.5),
          transparent calc(var(--size) * 5.5),
          transparent calc(var(--size) * 6.5),
          var(--c-line) calc(var(--size) * 6.5),
          var(--c-line) calc(var(--size) * 7.5),
          transparent calc(var(--size) * 7.5),
          transparent calc(var(--size) * 8.5)
        );
      }

      &.isLast {
        &::before {
          content: '';
          background-image: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--c-bg))
          );
        }
      }
      &:not(.isLast) {
        margin-bottom: calc(var(--size) * -2);
      }
      &:is(:hover, :focus-visible) {
        filter: drop-shadow(var(--box-shadow-active));
      }
      &.done {
        --c-line: rgb(var(--c-accent));
      }
    }
  }

  .stage-num {
    --color: rgb(var(--c-border));
    z-index: 0;
    position: absolute;
    width: var(--size);
    height: var(--size);
    color: var(--color);
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    transition: var(--trans-default);
    transition-property: color;

    @media (max-width: 1279.98px) {
      top: calc(var(--size) / -2);
      margin-inline: auto;
      left: 0;
      right: 0;
      &::after {
        background-color: rgb(var(--c-card));
        border: 1px solid;
        border-bottom: none;
        border-right: none;
      }
      .stage.process & {
        color: rgb(var(--c-accent));
      }
    }
    @media (min-width: 1280px) {
      top: calc(var(--size) / 4);
      right: calc(var(--size) / -2);

      &::after {
        border: 3px solid;
      }

      .stage:hover & {
        --color: rgb(var(--c-text));
      }

      .stage.isEven & {
        left: calc(var(--size) / -2);
      }

      .stage.process:is(:hover, :focus-visible) & {
        &::after {
          border-color: rgb(var(--c-accent));
        }
      }

      .stage.done:is(:hover, :focus-visible) & {
        &::after {
          border-color: rgb(var(--c-accent));
        }
      }
    }

    &::after {
      content: '';
      z-index: -1;
      inset: 0;
      position: absolute;
      transform: rotate(45deg);
      transition: var(--trans-default);
      transition-property: border-color;
    }

    .stage.planned & {
      &::after {
        border-color: var(--color);
      }
    }
    .stage.process & {
      &::after {
        border-color: rgb(var(--c-accent-dark));
      }
    }

    .stage.done & {
      color: rgb(var(--c-bg));
      &::after {
        background-color: rgb(var(--c-accent-dark));
        border-color: rgb(var(--c-accent-dark));
      }
    }
  }

  .stage-art {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--c-card));
    border: thin solid;

    @media (max-width: 1279.98px) {
      border-inline: none;
      padding-top: 40px;

      .stage.planned & {
        border-color: rgb(var(--c-card-border));
      }

      .stage.process & {
        border-color: rgb(var(--c-accent));
      }
    }
    @media (min-width: 1280px) {
      overflow: clip;
      position: absolute;
      top: 0;
      right: calc(var(--size) / 2);
      width: min(510px, calc(100% - var(--size) / 2));
      clip-path: polygon(100% 0, 100% 100%, 39px 100%, 39px 39px, 0 0);

      transition: var(--trans-default);
      transition-property: width, height;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background-color: rgb(var(--c-card-border));

        .stage:not(.isEven) & {
          clip-path: polygon(0 0, 0% 100%, 100% 0);
          left: 0;
        }
        .stage.isEven & {
          clip-path: polygon(100% 100%, 0 0, 100% 0);
          right: 0;
        }
      }

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        top: auto;
        height: 20px;
        background-image: linear-gradient(transparent, rgb(var(--c-card)));
      }

      .stage:is(:hover, :focus-visible) & {
        width: calc(100% - var(--size) / 2);
      }
      .stage:not(.isEven) & {
        padding-right: 55px;
        clip-path: polygon(
          100% 0,
          calc(100% - 39px) 39px,
          calc(100% - 39px) 100%,
          0 100%,
          0 0
        );
        border-image: linear-gradient(
            90deg,
            rgb(var(--c-card-border)),
            transparent
          )
          1;
      }
      .stage.isEven & {
        left: calc(var(--size) / 2);
        padding-left: 55px;
        border-image: linear-gradient(
            -90deg,
            rgb(var(--c-card-border)),
            transparent
          )
          1;
      }
    }

    .stage.done & {
      background-image: var(--gradient);
      border: none;
      &::after {
        background-color: rgb(var(--c-bg));
        top: 3px;
        width: 20px;
        height: 20px;
      }
      &::before {
        background-image: linear-gradient(transparent, rgb(var(--c-accent)));
      }
    }
    .stage.done.isEven & {
      &::after {
        right: 3px;
      }
    }
    .stage.done:not(.isEven) & {
      &::after {
        left: 3px;
      }
    }

    h3 {
      text-transform: uppercase;
      font-size: 20px;
      line-height: 1;
      margin-bottom: 20px;
    }

    .prose {
      overflow: hidden;
      margin-bottom: 20px;

      @media (min-width: 1280px) {
        max-height: 0;

        transition: var(--trans-default);
        .stage:is(:hover, :focus-visible) & {
          max-height: 600px;
        }
      }
    }

    h4 {
      text-transform: uppercase;
      margin-bottom: 10px;
      & span {
        text-transform: none;
        font-weight: 400;
      }
      @media (max-width: 1279.98px) {
        font-size: 14px;
      }
    }
  }

  .bottom-block {
    overflow: hidden;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1279.98px) {
      margin-top: 20px;
    }

    @media (min-width: 1280px) {
      height: 0;
      transition: var(--trans-default);
      transition-property: height, margin;

      .stage:is(:hover, :focus-visible) & {
        height: 75px;
        margin-top: 20px;
      }
    }
  }

  .progress-num {
    min-width: fit-content;
    font-size: clamp(3.125rem, 1.634rem + 6.36vw, 4.688rem);
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    color: rgb(var(--c-border));
    .stage.done & {
      color: rgb(var(--c-text));
    }
  }

  .done-text {
    font-size: 25px;
    font-weight: 700;
    @media (max-width: 1279.98px) {
      font-size: 1rem;
    }
  }

  .scale {
    --base-width: 300px;
    position: relative;
    width: calc(var(--base-width) + 2px);
    height: 10px;
    background-color: rgb(var(--c-bg));
    border: thin solid rgb(var(--c-bg));

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      right: auto;
      width: calc(var(--base-width) / calc(var(--max-value) / var(--value)));
      background-color: rgb(var(--c-border));
    }
  }
</style>
