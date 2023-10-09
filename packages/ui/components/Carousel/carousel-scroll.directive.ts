import { isMobile } from '@tok/ui/dom/platform';
import { DirectiveBinding, ObjectDirective } from 'vue';

type Binding = {
  onEvent: (value: 1 | -1) => void;
};

type FunctionArgs<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;

const wheelListeners = new Map<HTMLElement, (event: WheelEvent) => void>();

const throttle = <T extends FunctionArgs>(_invoke: T, ms: number): T => {
  let prev = 0;

  const filter = (...args: any[]) => {
    const now = Date.now();

    if (now - prev > ms) {
      prev = now;

      return _invoke(...args);
    }
  };

  return filter as T;
};

const beforeMount = (
  element: HTMLElement,
  { value }: DirectiveBinding<Binding>
) => {
  const callback = throttle((num: 1 | -1) => {
    value.onEvent(num);
  }, 500);

  const wheel = ({ deltaX }: WheelEvent) => {
    if (Math.abs(deltaX) <= 20) {
      return;
    }

    callback(Math.sign(deltaX) as -1 | 1);

    element.scrollLeft = 10;
  };

  if (!isMobile()) {
    element.addEventListener('wheel', wheel, { passive: true });

    wheelListeners.set(element, wheel);
  }
};

const beforeUnmount = (element: HTMLElement) => {
  const listener = wheelListeners.get(element);

  if (listener) {
    element.removeEventListener('wheel', listener);

    wheelListeners.delete(element);
  }
};

/**
 * Directive for emitting scroll events with values -1 (to the left) or 1 (to the right).
 * This directive is designed for desktop use only.
 * Identifies a mobile device using the isMobile function
 */
export const CarouselScrollDirective: ObjectDirective<HTMLElement, Binding> = {
  beforeMount,
  beforeUnmount,
};
