import { onMount } from 'svelte';

export function swipe(
  node: HTMLElement,
  {
    onSwipeLeft,
    onSwipeRight,
  }: {
    onSwipeLeft: () => void | undefined;
    onSwipeRight: () => void | undefined;
  }
) {
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }

  function handleMouseDown(event: MouseEvent) {
    touchStartX = event.clientX;
  }

  function handleTouchMove(event: TouchEvent) {
    touchEndX = event.touches[0].clientX;
  }

  function handleMouseMove(event: MouseEvent) {
    touchEndX = event.clientX;
  }

  function handleTouchEnd() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
      onSwipeRight?.();
    } else if (swipeDistance < -50) {
      onSwipeLeft?.();
    }
  }

  onMount(() => {
    node.addEventListener('touchstart', handleTouchStart);
    node.addEventListener('touchmove', handleTouchMove);
    node.addEventListener('touchend', handleTouchEnd);
    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseup', handleTouchEnd);

    return () => {
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchmove', handleTouchMove);
      node.removeEventListener('touchend', handleTouchEnd);
      node.removeEventListener('mousedown', handleMouseDown);
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseup', handleTouchEnd);
    };
  });
}
