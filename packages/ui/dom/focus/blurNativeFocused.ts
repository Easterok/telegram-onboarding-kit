import { getNativeFocused } from './getNativeFocused';
import { setNativeFocused } from './setNativeFocused';

export function blurNativeFocused() {
  const activeElement = getNativeFocused();

  if (activeElement instanceof HTMLElement) {
    setNativeFocused(activeElement, false);
  }
}
