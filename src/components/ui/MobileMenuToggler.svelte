<script lang="ts">
  import { isOpen } from '../../store/site-menu';
</script>

<button class:open={$isOpen} on:click={() => isOpen.set(!$isOpen)}>
  <span />
  <span />
  <span />
</button>

<style lang="scss">
  button {
    align-self: center;
    position: relative;
    width: 20px;
    height: 22px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  span {
    background-color: #fff;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 2px;
    transition-duration: 500ms;
    transform-origin: right;
  }
  span:nth-child(2) {
    opacity: 1;
  }
  button.open span:nth-child(1) {
    transform: rotate(-45deg);
  }
  button.open span:nth-child(2) {
    opacity: 0;
  }
  button.open span:nth-child(3) {
    transform: rotate(45deg);
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }
  }
</style>
