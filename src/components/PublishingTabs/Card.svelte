<script lang="ts">
  import { activeIdx } from '.';
  import type { PublishingSlideSelect } from '../../schemas/publishingSlidesSchema';

  export let data: PublishingSlideSelect;
  export let idx: number;

  const { image, text, title } = data;
</script>

<button class:isActive={idx === $activeIdx} on:click={() => ($activeIdx = idx)}>
  <div class="image"><img src={image.src} alt={image.alt} /></div>
  <div class="body">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="260"
    height="260"
    viewBox="0 0 280 280"
    fill="none"
    class="border"
  >
    <path
      d="M0.5 67.2071L67.2071 0.5H279.5V279.5H0.5V67.2071Z"
      stroke="url(#paint0_linear_1600_783)"
      stroke-opacity="0.45"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1600_783"
        x1="0"
        y1="0"
        x2="183"
        y2="280"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFBE82" />
        <stop offset="0.494454" stop-color="#FFBE82" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</button>

<style lang="scss">
  button {
    aspect-ratio: 4/5;
    flex: 1 1 0;

    transform-origin: top;
    transition: var(--trans-slow);
    transition-property: transform, filter, opacity;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    cursor: pointer;

    @media (max-width: 767.98px) {
      --fact-width: clamp(13.563rem, 9.567rem + 17.05vw, 17.75rem);
    }

    &:first-child {
      transform-origin: top left;
    }
    &:last-child {
      transform-origin: top right;
    }

    &::after {
      content: '';
      opacity: 0;
      z-index: 2;
      position: absolute;
      top: 13px;
      left: 13px;
      width: calc(100% - 13px);
      aspect-ratio: 1;
      border: 1px solid;
      border-image: linear-gradient(
          135deg,
          rgb(var(--border-card-accent-color)),
          transparent 50%
        )
        30;

      border-bottom: none;
      border-right: none;

      transition: var(--trans-slow);
      transition-property: width, height, opacity;
    }
    &::before {
      content: '';
      opacity: 0;
      z-index: 2;
      position: absolute;
      inset: 0;
      width: 6px;
      height: 6px;
      top: 11px;
      left: 11px;
      background: rgb(var(--border-card-accent-color));

      transition: opacity var(--trans-slow);
    }

    &:hover {
      .image {
        filter: brightness(75%);
      }
    }
    &.isActive {
      z-index: 2;
      transform: scale(108%);

      filter: drop-shadow(var(--box-shadow-active)) brightness(100%);

      &::after,
      &::before {
        opacity: 1;
      }

      .border {
        opacity: 1;
      }
      .image {
        filter: brightness(100%);

        &::before {
          opacity: 1;
        }
      }
    }
  }

  .border {
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0;
    height: auto;
    transition: opacity var(--trans-slow);
  }

  .image {
    --clip: 62px;
    flex: 1 1 auto;
    position: relative;
    z-index: 1;
    clip-path: polygon(var(--clip) 0, 100% 0, 100% 100%, 0 100%, 0 var(--clip));
    border-bottom: 2px solid rgb(var(--border-card-accent-color));
    filter: brightness(50%);

    transition: var(--trans-slow);
    transition-property: clip-path, filter;

    @media (max-width: 767.98px) {
      --clip: clamp(3.125rem, 2.29rem + 3.56vw, 4rem);
    }

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgb(var(--c-accent), 50%) 0%,
        transparent 60%
      );

      transition: opacity var(--trans-slow);
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;

      transition: var(--trans-slow);
      transition-property: filter;
    }
  }

  .body {
    position: relative;
    padding: 1rem;

    color: rgb(var(--c-text));

    background-color: rgb(var(--c-card));
    border-image: linear-gradient(160deg, rgb(var(--c-card)), rgb(var(--c-bg)))
      30;
    border-width: 4px;
    border-style: solid;
    border-top: none;

    transition: border-image var(--trans-slow);
  }

  h3 {
    margin-bottom: clamp(0.5rem, 0.409rem + 0.39vw, 0.75rem);
    font-size: clamp(0.625rem, 0.488rem + 0.59vw, 1rem);
    text-transform: uppercase;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    margin: 0;
    font-size: clamp(0.5rem, 0.409rem + 0.39vw, 0.75rem);
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
