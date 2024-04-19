<script lang="ts">
  export let pos: "lt" | "rt" | "lb" | "rb" = "lt";
  export let size: "sm" | "md";
</script>

<svg
  width="86"
  height="86"
  viewBox="0 0 86 86"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  class="border-edge pos-{pos} size-{size}"
  {...$$props}
>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none"> -->
  <rect x="48" width="38" height="1" fill="currentColor" />
  <rect
    y="86"
    width="38"
    height="1"
    transform="rotate(-90 0 86)"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M43.0059 0H48V1H43.4625L1 43.4625V48H0V43.0059V43H0.00585938L43 0.00585938V0H43.0059Z"
    fill="currentColor"
  />
  <!-- <defs>
    <linearGradient
      id="paint0_linear_2153_3415"
      x1="48"
      y1="0"
      x2="86"
      y2="8.89413e-08"
      gradientUnits="userSpaceOnUse"
    >
      <stop style="stop-color: currentColor" />
      <stop offset="1" style="stop-color: currentColor" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_2153_3415"
      x1="38"
      y1="86"
      x2="0"
      y2="86"
      gradientUnits="userSpaceOnUse"
    >
      <stop style="stop-color: currentColor" />
      <stop offset="1" style="stop-color: currentColor" stop-opacity="0" />
    </linearGradient>
  </defs> -->
</svg>

<style lang="scss">
  .border-edge {
    position: absolute;

    &.size {
      &-sm {
      }
      &-md {
      }
    }

    &.pos {
      &-lt {
        &.size {
          &-sm {
            left: -14px;
            top: -14px;
          }
          &-md {
            left: -14px;
            top: -14px;
          }
        }
      }
      &-rt {
        right: 0px;
        top: 0px;
        transform: rotate(-90deg);
      }
      &-lb {
        left: 0px;
        bottom: 0px;
        transform: rotate(90deg);
      }
      &-rb {
        &.size {
          &-sm {
            right: -14px;
            bottom: -14px;
          }
          &-md {
            right: -14px;
            bottom: -14px;
          }
        }
        transform: rotate(180deg);
      }
    }
  }
</style>
