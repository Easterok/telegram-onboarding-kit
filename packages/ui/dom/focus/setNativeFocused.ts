export function setNativeFocused(
  element: HTMLElement,
  focused = true,
  preventScroll = false
) {
  if (focused) {
    element.focus({ preventScroll });
  } else {
    element.blur();
  }
}
