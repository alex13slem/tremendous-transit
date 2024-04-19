<script lang="ts">
  import { cn } from '../../utils/helpers';

  export let checked: boolean = false;
  export let className: string = '';
</script>

<label class={cn('checkbox', className)}>
  <input type="checkbox" on:input on:blur bind:checked {...$$restProps} />
  <span />
</label>

<style lang="scss">
  .checkbox {
    flex: 0 0 auto;
    width: 17px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 1px solid rgb(var(--c-white), 50%);
    cursor: pointer;
  }

  span {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 1px;
    transition: background-color var(--trans-default);
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  input:hover ~ span {
    background-color: rgb(var(--c-white), 30%);
  }
  input:checked ~ span {
    background-color: rgb(var(--c-accent));
  }
  input[invalid='true'] ~ span {
    animation: pulsar-bg-c 1s ease infinite alternate;
  }
</style>
