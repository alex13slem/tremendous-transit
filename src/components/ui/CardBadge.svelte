<script lang="ts">
  export let type: string;
</script>

<div class="card-badge {type}">
  <span>{type}</span>
</div>

<style>
  .card-badge {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 58px;
    height: 58px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-badge.new {
    background: linear-gradient(
      135deg,
      #ff7c96 0%,
      #d72749 40%,
      #d72749 59%,
      transparent 60%
    );
    filter: drop-shadow(-3px -3px 0px rgba(255, 155, 174, 0.2))
      drop-shadow(0px 0px 13px rgba(255, 23, 68, 0.5));
  }
  .card-badge.test {
    background: linear-gradient(
      135deg,
      #64a4ed 0%,
      #1d6dc8 40%,
      #1d6dc8 59%,
      transparent 60%
    );
    filter: drop-shadow(-3px -3px 0px rgba(37, 177, 255, 0.2))
      drop-shadow(0px 0px 13px rgba(37, 177, 255, 0.5));
  }
  .card-badge.hot {
    background: linear-gradient(
      135deg,
      #f4b67b 0%,
      #df7614 40%,
      #df7614 59%,
      transparent 60%
    );
    filter: drop-shadow(-3px -3px 0px rgba(255, 186, 122, 0.2))
      drop-shadow(0px 0px 13px rgba(239, 129, 27, 0.5));
  }
  .card-badge.dev {
    background: linear-gradient(
      135deg,
      #78f89c 0%,
      #1fb148 40%,
      #1fb148 59%,
      transparent 60%
    );
    filter: drop-shadow(-3px -3px 0px rgba(44, 244, 100, 0.2))
      drop-shadow(0px 0px 13px rgba(0, 195, 55, 0.5));
  }

  .card-badge::after {
    position: absolute;
    content: '';
    width: 75%;
    height: 75%;
    top: 5px;
    left: 5px;
    border-top: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
  }
  .card-badge::before {
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    top: 3px;
    left: 3px;
    background-color: #f5f5f5;
  }

  .card-badge span {
    text-shadow: 0px 0px 4px rgb(var(--c-bg), 50%);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    transform: rotate(-45deg) translateY(-2px);
  }
</style>
