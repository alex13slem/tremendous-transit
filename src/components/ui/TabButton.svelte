<script lang="ts">
  export let selected: boolean = false;
</script>

<button class="tab-link" class:active={selected}>
  <slot />
  <span class="dot" />
</button>

<style lang="scss">
  .tab-link {
    // all: unset;
    // box-sizing: border-box;
    width: 100%;
    text-align: left;
    overflow: hidden;
    position: relative;
    padding-inline: 2ch;

    font-weight: 700;
    line-height: 3em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color var(--trans-default);

    &:hover,
    &:focus-visible {
      outline: none;
      background-color: rgb(var(--c-white), 3%);
    }

    &.active {
      background-image: linear-gradient(
        90deg,
        rgb(var(--c-accent), 25%),
        rgb(var(--c-accent), 25%)
      );
      animation: load var(--trans-default) var(--time-default) 1 both;
      background-repeat: no-repeat;
      background-color: transparent;

      &::after {
        height: 100%;
      }
      &::before {
        opacity: 1;
        animation: rightBorderHide calc(var(--time-default) * 3)
          calc(var(--time-default) * 2) 1 forwards;
      }
      .dot {
        animation: dotBlink calc(var(--time-default))
          calc(var(--time-default) * 2) 3 alternate both;
      }

      // Треугольники
      // &::after,
      // &::before {
      //   opacity: 1;
      //   right: -1em;
      // }
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 0;
    }

    &::after {
      bottom: 0;
      left: 0;
      background-color: rgb(var(--c-accent));
      transition: var(--trans-default);
      transition-property: height;
    }

    &::before {
      opacity: 0;
      bottom: 7px;
      right: 0;
      background-origin: bottom;
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to bottom,
        rgb(var(--c-accent)),
        rgb(var(--c-accent))
      );
      transition: var(--trans-default) calc(var(--time-default) * 2);
    }

    .dot {
      opacity: 0;
      position: absolute;
      width: 5px;
      height: 5px;
      bottom: 0;
      right: 0;
      background-color: rgb(var(--c-accent));
    }

    // Треугольники
    // &::after,
    // &::before {
    //   content: "";
    //   opacity: 0;
    //   position: absolute;
    //   transform: rotate(45deg);
    //   width: 2em;
    //   height: 2em;

    //   right: -2em;
    //   background-color: rgb(var(--c-accent));

    //   transition: var(--trans-default);
    //   transition-property: opacity, right;
    // }
    // &::after {
    //   top: -1em;
    // }
    // &::before {
    //   bottom: -1em;
    // }
    @keyframes load {
      0% {
        background-size: 0% 100%;
      }
      100% {
        background-size: 100% 100%;
      }
    }
    @keyframes rightBorderHide {
      0% {
        height: 100%;
        background-size: 100% 0%;
      }
      50% {
        height: 100%;
        background-size: 100% 100%;
      }
      100% {
        height: 2px;
      }
    }
    @keyframes dotBlink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
