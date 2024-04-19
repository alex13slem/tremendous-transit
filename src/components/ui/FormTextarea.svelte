<script lang="ts">
  import { blur } from 'svelte/transition';
  import BorderEdge from '../svg/BorderEdge.svelte';
  import { clickOutside } from '../../utils/svelte/clickOutside';

  export let placeholder: string | null = null;
  export let value: string | null = null;
  export let className: string = '';
  export let variant: 'default' | 'dark' = 'default';
  export let size: 'md' = 'md';
  export let error: string | null = null;

  let errorVisible = false;
  let errorBtn: HTMLElement;
</script>

<div
  class="form-textarea {className} v-{variant} size-{size}"
  class:typing={!!value}
>
  <textarea on:input bind:value {placeholder} {...$$restProps} />
  {#if error && errorVisible}
    <p
      class="error-message"
      transition:blur={{ duration: 300 }}
      use:clickOutside={[errorBtn]}
      on:outclick={() => (errorVisible = false)}
    >
      {error}
    </p>
  {/if}
  <div class="bg">
    {#if error}
      <button
        class="error-btn"
        bind:this={errorBtn}
        on:click={() => (errorVisible = !errorVisible)}
      />
    {/if}
    {#if variant === 'dark'}
      <BorderEdge {size} pos={'lt'} />
      <BorderEdge {size} pos={'rb'} />
    {/if}
  </div>
</div>

<style lang="scss">
  @import '../../styles/mixins';

  .form-textarea {
    @include firm-arrows($color: var(--c-border));

    isolation: isolate;
    position: relative;
    height: 100%;

    padding-inline: 1.3em;
    display: flex;
    align-items: center;
    gap: 5px;

    color: rgb(var(--c-text));

    // &.typing {
    //   textarea {
    //     font-size: 1rem;
    //   }
    // }

    &.v-default {
      --c-field: rgb(var(--c-white), 30%);
      --c-border: var(--c-field);
      color: rgb(var(--c-bg));

      // Hover and Focus state
      &:hover,
      &:not(.typing):has(textarea:focus-visible) {
        --c-field: rgb(var(--c-white), 45%);
        color: rgb(var(--c-bg));
      }

      // Typing state
      &.typing {
        --c-field: rgb(var(--c-accent), 65%);
        color: rgb(var(--c-text));
      }
    }

    &.v-dark {
      --c-field: rgb(var(--c-field_dark));
      --c-border: rgb(var(--c-field-border_dark));
      color: rgb(var(--c-field-border_dark));

      .bg {
        color: rgb(var(--c-field-border_dark));
        border: 1px solid rgb(var(--c-field-border_dark));
      }

      // Hover and Focus state
      &:hover,
      &:not(.typing):has(input:focus-visible) {
        --c-field: rgb(var(--c-white), 45%);
        color: rgb(var(--c-bg));
      }

      // Typing state
      &.typing {
        --c-field: rgb(var(--c-accent), 65%);
        color: rgb(var(--c-text));
      }
    }

    &.size-sm {
      .v-dark {
        min-width: var(--c-input-sm-width);
      }
      font-size: var(--c-input-sm-fsz);
    }

    &.size-md {
      .v-dark {
        min-width: var(--c-input-md-width);
      }
      font-size: var(--c-input-md-fsz);
    }
  }

  .error {
    &-btn {
      position: absolute;
      inset: 0;
      left: auto;
      background-color: rgb(var(--c-accent));
      width: 1.25em;
      animation: pulsar-bg-c 1s ease infinite alternate;
    }
    &-message {
      z-index: 2;
      position: absolute;
      top: 0;
      right: 1.25em;
      height: 100%;
      line-height: 1;

      display: flex;
      align-items: center;
      padding-inline: 1.25em;
      background-color: rgb(var(--c-accent), 65%);
      color: rgb(var(--c-text));
    }
  }

  .bg {
    @include firm-clip();
    position: absolute;
    inset: 0;
    overflow: hidden;

    color: rgb(var(--c-bg));

    background-color: var(--c-field);
    transition: var(--trans-default);
    transition-property: color background-color;
  }

  textarea {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    resize: none;

    padding: 1.2em 0.2em;

    background-color: transparent;
    border: none;
    outline: none;
    color: currentColor;

    &::placeholder {
      color: currentColor;
      transition: color var(--trans-default);
    }
  }
</style>
