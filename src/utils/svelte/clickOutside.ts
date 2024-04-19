export function clickOutside(node: HTMLElement, refs?: HTMLElement[]) {
  const handleClick = (event: MouseEvent) => {
    if (node.contains(event.target as HTMLElement)) return;
    const stopProp = refs
      ? refs.map((ref) => ref === (event.target as HTMLElement)).filter(Boolean)
      : [];
    if (stopProp.length) return;
    node.dispatchEvent(new CustomEvent("outclick"));
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
