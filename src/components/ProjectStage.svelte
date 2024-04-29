<script lang="ts">
  import { cn, toRoman } from '../utils/helpers';
  import { onMount } from 'svelte';
  import { parse } from 'marked';
  import ModalTrigger from './modals/ModalTrigger.svelte';
  import type { Stage } from '../schemas/gameStagesSchema';

  export let isLast: boolean = false;

  export let stage: Stage;

  let proseRef: HTMLDivElement;
  let proseMaxHeight: number;

  onMount(() => {
    proseMaxHeight = proseRef.scrollHeight;
  });

  let state: 'done' | 'process' | 'planned';
  if (stage.currentCash && stage.totalCash) {
    if (stage.currentCash >= stage.totalCash) state = 'done';
    else if (stage.currentCash < stage.totalCash && !stage.isPlanned)
      state = 'process';
  }
  if (stage.isPlanned) state = 'planned';
</script>

<svelte:window
  on:resize={() => {
    proseMaxHeight = proseRef.scrollHeight;
  }}
/>

<div
  class={cn('stage', state)}
  class:isLast
  class:isEven={!(stage.num % 2)}
  role="button"
  tabindex="0"
>
  <button class="stage-num" tabindex="-1">{toRoman(stage.num)}</button>
  <article class="stage-art">
    <h3>{stage.name}</h3>
    {#if stage.description}
      <div
        class="prose"
        bind:this={proseRef}
        style="--max-height: {proseMaxHeight}px;"
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
        {:else}
          <ModalTrigger flexPosition="end" type="qrDonat"
            >Поддержать проект</ModalTrigger
          >
        {/if}
        <div class="progress-num">
          {Math.floor((stage.currentCash / stage.totalCash) * 100)}%
        </div>
      </div>
    {/if}
  </article>
</div>

<style lang="scss">
  .stage {
    --size: 50px;
    --c-line: rgb(var(--c-border));
    position: relative;
    height: 400px;
    width: 50%;

    display: flex;
    justify-content: end;

    transition: var(--trans-default);
    transition-property: filter;
  }

  .stage.isEven {
    margin-left: auto;
  }

  .stage:not(.isLast) {
    margin-bottom: calc(var(--size) * -2);
  }
  .stage:not(.isLast)::after {
    content: '';
    position: absolute;
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
      transparent calc(var(--size) * 4.5)
    );
    width: 1px;
    right: 0;
    height: calc(var(--size) * 4);
    top: calc(var(--size) * 1.5);
  }

  .stage.isEven:not(.isLast)::after {
    left: 0;
  }

  .stage:is(:hover, :focus-visible) {
    filter: drop-shadow(var(--box-shadow-active));
  }

  .stage-num {
    --color: rgb(var(--c-border));
    z-index: 0;
    position: absolute;
    top: calc(var(--size) / 4);
    right: calc(var(--size) / -2);
    width: var(--size);
    height: var(--size);
    color: var(--color);
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    transition: var(--trans-default);
    transition-property: color;

    .stage:hover & {
      --color: rgb(var(--c-text));
    }

    .stage.isEven & {
      left: calc(var(--size) / -2);
    }
  }

  .stage-num::after {
    content: '';
    z-index: -1;
    inset: 0;
    position: absolute;
    transform: rotate(45deg);
    border: 3px solid;
    transition: var(--trans-default);
    transition-property: border-color;
  }
  .planned {
    .stage-num::after {
      border-color: var(--color);
    }
  }
  .process {
    .stage-num::after {
      border-color: rgb(var(--c-accent-dark));
    }
    &:is(:hover, :focus-visible) {
      .stage-num::after {
        border-color: rgb(var(--c-accent));
      }
    }
  }
  .done {
    --c-line: rgb(var(--c-accent));
    .stage-num {
      color: rgb(var(--c-bg));
    }
    .stage-num::after {
      background-color: rgb(var(--c-accent-dark));
      // background-image: var(--gradient);

      // border-color: transparent;
      // border: none;
      border-color: rgb(var(--c-accent-dark));
    }
    &:is(:hover, :focus-visible) {
      .stage-num::after {
        border-color: rgb(var(--c-accent));
      }
    }
  }

  .stage-art {
    overflow: clip;
    position: absolute;
    top: 0;
    // height: 140px;
    right: calc(var(--size) / 2);
    width: min(510px, calc(100% - var(--size) / 2));

    padding: 20px;
    display: flex;
    flex-direction: column;
    // gap: 20px;

    transition: var(--trans-default);
    transition-property: width, height;
    border: thin solid rgb(var(--c-card-border));

    clip-path: polygon(100% 0, 100% 100%, 39px 100%, 39px 39px, 0 0);

    .stage:is(:hover, :focus-visible) & {
      width: calc(100% - var(--size) / 2);
    }
    :not(.isEven) & {
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
    .isEven & {
      left: calc(var(--size) / 2);
      padding-left: 55px;
      border-image: linear-gradient(
          -90deg,
          rgb(var(--c-card-border)),
          transparent
        )
        1;
    }

    .planned & {
      border-width: 1px;
      background-color: rgb(var(--c-card));
    }

    .process & {
      border-width: 1px;
      background-color: rgb(var(--c-card));
    }

    .done & {
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
    .done.isEven & {
      &::after {
        right: 3px;
      }
    }
    .done:not(.isEven) & {
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
      height: 0;
      overflow: hidden;
      margin-bottom: 20px;

      transition: var(--trans-default);
      transition-property: height;

      .stage:is(:hover, :focus-visible) & {
        height: var(--max-height);
      }
    }

    h4 {
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h4 span {
      text-transform: none;
      font-weight: 400;
    }
  }

  .stage-art::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: rgb(var(--c-card-border));

    :not(.isEven) & {
      clip-path: polygon(0 0, 0% 100%, 100% 0);
      left: 0;
    }
    .isEven & {
      clip-path: polygon(100% 100%, 0 0, 100% 0);
      right: 0;
    }
  }
  .stage-art::before {
    content: '';
    position: absolute;
    inset: 0;
    top: auto;
    height: 20px;
    background-image: linear-gradient(transparent, rgb(var(--c-card)));
  }

  .bottom-block {
    overflow: hidden;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: var(--trans-default);
    transition-property: height, margin;

    .stage:is(:hover, :focus-visible) & {
      height: 75px;
      margin-top: 20px;
    }
  }

  .progress-num {
    font-size: 75px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0.7;
    color: rgb(var(--c-border));
    .done & {
      color: rgb(var(--c-text));
    }
  }

  .done-text {
    font-size: 25px;
    font-weight: 700;
  }

  .scale {
    position: relative;
    width: 300px;
    height: 10px;
    background-color: rgb(var(--c-bg));
    border: thin solid rgb(var(--c-border));

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      right: auto;
      width: calc(300px / calc(var(--max-value) / var(--value)));
      background-color: rgb(var(--c-border));
    }
  }
</style>
