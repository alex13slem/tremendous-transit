<script lang="ts">
  import { siteMenuStore } from '../../store/site-menu';

  const { close: closeMenu } = siteMenuStore;

  export let href = '/';
  export let active = false;
  export let onHeader = false;
  export let onMobMenu = false;

  function handleClick() {
    onMobMenu && closeMenu();
  }
</script>

<a
  class="nav-link"
  class:onHeader
  class:onMobMenu
  class:active
  on:click={handleClick}
  {href}
  {...$$restProps}><span /><slot /></a
>

<style lang="scss">
  @import '../../styles/mixins';
  .nav-link {
    position: relative;
    padding-inline: 2.5ch;
    display: inline-flex;

    font-size: 14px;
    line-height: 3.5em;
    font-weight: 700;
    color: rgb(var(--c-text));

    text-transform: uppercase;

    transition:
      background-color var(--trans-default),
      color var(--trans-default),
      text-shadow var(--trans-steps);
    @media (max-width: 1023.98px) {
      font-size: 3vmax;
    }
  }

  .nav-link::after {
    opacity: 0;
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      transparent 47%,
      rgb(var(--c-accent), 0.25) 100%
    );
    transition: opacity var(--trans-default);
    @media (max-width: 1023.98px) {
      display: none;
    }
  }

  .nav-link:hover,
  .nav-link.active {
    @include hover-text1($t-color: rgb(var(--c-accent)));

    &::after {
      opacity: 1;
    }
  }

  .nav-link::before,
  .nav-link:first-of-type span {
    bottom: -2px;
    content: '';
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(69, 72, 87, 0) 17.61%,
      #575969 100%
    );
    width: 1px;
    height: 100%;

    @media (max-width: 1023.98px) {
      display: none;
    }
  }
  .nav-link::before {
    right: -3px;
  }
  .nav-link:first-of-type span {
    left: -3px;
  }
</style>
