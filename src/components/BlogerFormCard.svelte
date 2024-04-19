<script>
  import BtnFirm from './ui/BtnFirm.svelte';
  import BlogersForm from './forms/BlogersForm.svelte';
  import bgPreview from '../img/bg-form-bloger.jpg';
  import { blogerFormSubmitted } from '../store/forms';

  let active = false;
  let submitted = false;

  blogerFormSubmitted.subscribe((val) => (submitted = val));
</script>

<div
  class="form-card"
  class:active
  class:submitted
  on:blur|capture={() => (active = false)}
  on:focus|capture={() => (active = true)}
  style="background-image: url({bgPreview.src});"
>
  <div class="head">
    <p class="description">
      <slot name="description" />
    </p>
  </div>
  <div class="body">
    <div class="preview">
      <BtnFirm on:click={() => blogerFormSubmitted.set(false)}>
        {#if !submitted}
          Заполнить форму
        {:else}
          Отправить ещё раз
        {/if}
      </BtnFirm>
    </div>
    <BlogersForm />
  </div>
</div>

<style lang="scss">
  .form-card {
    overflow: hidden;
    position: relative;
    background-position: center -70px;
    background-size: cover;
    z-index: 0;

    @media (max-width: 1023.98px) {
      &::after {
        z-index: -1;
        position: absolute;
        content: '';
        inset: 0;
        background-image: linear-gradient(
          to bottom,
          rgb(var(--c-bg)),
          rgb(var(--c-bg), 50%),
          rgb(var(--c-bg))
        );
      }
    }

    @media (min-width: 1024px) {
      border: var(--border-card);

      // Углы start
      --clip-lb: 120px;
      --clip-rt: 30px;
      clip-path: polygon(
        0 0,
        calc(100% - var(--clip-rt)) 0,
        100% var(--clip-rt),
        100% 100%,
        var(--clip-lb) 100%,
        0 calc(100% - var(--clip-lb))
      );
      &::after,
      &::before,
      .body::after {
        --size: calc(var(--clip-size) * 1.41);
        z-index: 1;
        content: '';
        position: absolute;
        inset: calc(var(--size) * -0.5);
        width: var(--size);
        aspect-ratio: 1 / 1;
        border-bottom: var(--border-card);
      }
      &::after,
      .body::after {
        --clip-size: var(--clip-rt);
        transform: rotate(45deg);
        bottom: auto;
        left: auto;
      }
      &::before {
        --clip-size: var(--clip-lb);
        transform: rotate(-135deg);
        top: auto;
        right: auto;
      }
      .body::after {
        background-color: rgb(var(--c-card));
        transition: border-color var(--trans-slow);
      }
      // Углы end

      // Фокус start
      &:not(.submitted):hover,
      &:not(.submitted).active {
        .body {
          background-color: rgb(var(--c-card), 90%);
          &::after {
            border-color: transparent;
          }
        }

        .preview {
          border-color: transparent;
          :global(.btn-firm) {
            opacity: 0;
          }
        }

        :global(form) {
          opacity: 1;
        }
      }
      // Фокус end
    }

    &.submitted {
      :global(form) {
        pointer-events: none;
      }
    }
  }

  .head {
    padding-inline: var(--container-offset);
    @media (min-width: 1024px) {
      background-color: rgb(var(--c-card), 90%);
    }
    @media (min-width: 1024px) {
      padding-block: 2rem;
    }
  }

  .description {
    font-size: clamp(0.75rem, -0.589rem + 5.71vw, 1.125rem);
    font-weight: 600;

    :global(span) {
      color: rgb(var(--c-accent));
    }

    @media (min-width: 1024px) {
      max-width: 410px;
    }
    @media (max-width: 1023.98px) {
      margin-bottom: 2rem;
    }
  }

  .body {
    position: relative;
    background-color: rgb(var(--c-card), 20%);

    transition: background-color var(--trans-slow);
  }

  .preview {
    display: none;
    @media (min-width: 1024px) {
      opacity: 1;
      position: absolute;
      inset: 0;
      border-top: var(--border-card);

      display: flex;
      justify-content: center;
      align-items: center;

      transition: border-color var(--trans-slow);
    }
  }

  .form-card :global(form) {
    @media (min-width: 1024px) {
      position: relative;
      opacity: 0;

      transition: opacity var(--trans-slow);
    }
  }
</style>
