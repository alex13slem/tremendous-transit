<script lang="ts">
  import { cn } from '../utils/helpers';
  import Icon from '@iconify/svelte';
  import type { CompanySocial } from '../store/socials';

  export let data: CompanySocial;
  export let className: string | null = null;
  const { title, href, iconifyId } = data;
</script>

<article class={cn('social-card', className)}>
  <a {href} target="_blank">
    <div class="bg"></div>
    <svg
      class="border"
      width="100%"
      height="100%"
      viewBox="0 0 190 111"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g>
        <mask id="path-1-inside-1_2129_2928${iconifyId}" fill="currentColor">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M85 111H0V23.0952H85.2148L108.31 0H190V87.69L166.69 111H119.983H85Z"
          ></path>
        </mask>
        <path
          d="M0 111H-1V112H0V111ZM0 23.0952V22.0952H-1V23.0952H0ZM85.2148 23.0952V24.0952H85.629L85.9219 23.8023L85.2148 23.0952ZM108.31 0V-1H107.896L107.603 -0.707107L108.31 0ZM190 0H191V-1H190V0ZM190 87.69L190.707 88.3971L191 88.1042V87.69H190ZM166.69 111V112H167.104L167.397 111.707L166.69 111ZM0 112H85V110H0V112ZM-1 23.0952V111H1V23.0952H-1ZM85.2148 22.0952H0V24.0952H85.2148V22.0952ZM85.9219 23.8023L109.017 0.707107L107.603 -0.707107L84.5077 22.3881L85.9219 23.8023ZM108.31 1H190V-1H108.31V1ZM189 0V87.69H191V0H189ZM189.293 86.9829L165.983 110.293L167.397 111.707L190.707 88.3971L189.293 86.9829ZM166.69 110H119.983V112H166.69V110ZM85 112H119.983V110H85V112Z"
          fill="currentColor"
          mask="url(#path-1-inside-1_2129_2928${iconifyId})"
        ></path>
      </g>
    </svg>

    <h3>{title}</h3>
    <div class="body">
      <Icon icon={iconifyId} />
      <span>{title}</span>
    </div>
  </a>
</article>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
  .social-card {
    --clip-height: 26px;
    --clip-width: 95px;

    overflow: hidden;
    position: relative;
    height: 122px;

    display: flex;
    flex-direction: column;

    color: rgb(var(--c-white), 60%);
    cursor: pointer;

    transition: filter var(--trans-default);

    &:hover {
      filter: drop-shadow(var(--box-shadow-hover));

      color: rgb(var(--c-white));

      .bg {
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

    transition: var(--trans-default);
    transition-property: color;
  }

  .bg {
    position: absolute;
    z-index: -1;
    inset: 0;
    clip-path: polygon(
      calc(var(--clip-width) + var(--clip-height)) 0,
      100% 0,
      100% calc(100% - var(--clip-height)),
      calc(100% - var(--clip-height)) 100%,
      0 100%,
      0 var(--clip-height),
      var(--clip-width) var(--clip-height)
    );
    background-color: rgb(var(--c-card));

    &::before {
      inset: 0;
      content: '';
      position: absolute;

      opacity: 0;
      background: var(--gradient);
      transition: var(--trans-default);
      transition-property: opacity;
    }
  }

  .social-card a {
    display: contents;
  }

  h3 {
    position: relative;
    align-self: flex-start;
    min-width: var(--clip-width);
    min-height: var(--clip-height);
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
    transition: var(--trans-default);
    transition-property: border-color, color;
  }

  .body {
    font-size: 24px;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: currentColor;
    transition: color var(--trans-default);
    font-family: 'Kanit', sans-serif;
    font-weight: 800;
    :global(svg) {
      font-size: 34px;
    }
  }
</style>
