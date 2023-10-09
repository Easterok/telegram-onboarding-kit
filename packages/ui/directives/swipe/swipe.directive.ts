import { DirectiveBinding, ObjectDirective } from 'vue';

export interface Swipe {
  direction: 'top' | 'left' | 'bottom' | 'right';
  events: [TouchEvent, TouchEvent];
}

const DEFAULT_THRESHOLD = 30;
const DEFAULT_TIMEOUT = 500;

type Fn = (event: TouchEvent) => void;

type Binding = {
  onEvent: (element: EventTarget | null, swipe: Swipe) => void;
  timeout?: number;
  threshold?: number;
};

function getSwipeDirection(deltaX: number, deltaY: number): Swipe['direction'] {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? 'top' : 'bottom';
  } else {
    return deltaX > 0 ? 'left' : 'right';
  }
}

const dict = new Map<HTMLElement, [Fn, Fn]>();

function beforeMount(
  element: HTMLElement,
  { value }: DirectiveBinding<Binding>
) {
  const events = [null, null] as [TouchEvent | null, TouchEvent | null];
  const threshold =
    typeof value.threshold === 'number' ? value.threshold : DEFAULT_THRESHOLD;
  const timeout =
    typeof value.timeout === 'number' ? value.timeout : DEFAULT_TIMEOUT;

  const handle = () => {
    const first = events[0];
    const second = events[1];

    if (first === null || second === null) {
      return;
    }

    const isHandlable =
      !!first.touches.length &&
      first.touches[0].identifier === second.changedTouches[0].identifier;

    if (!isHandlable) {
      return;
    }

    const { clientX: startX, clientY: startY } = first.touches[0];
    const { clientX: endX, clientY: endY } = second.changedTouches[0];

    const distanceX = startX - endX;
    const distanceY = startY - endY;

    const duration = second.timeStamp - first.timeStamp;

    const isSwipe =
      (Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) &&
      duration < timeout;

    if (isSwipe) {
      const swipeEvent = {
        direction: getSwipeDirection(distanceX, distanceY),
        events: [first, second] as [TouchEvent, TouchEvent],
      };

      value.onEvent(element, swipeEvent);
    }
  };

  const touchStart = (event: TouchEvent) => {
    events[0] = event;
  };

  const touchEnd = (event: TouchEvent) => {
    events[1] = event;

    handle();
  };

  dict.set(element, [touchStart, touchEnd]);

  element.addEventListener('touchstart', touchStart, { passive: true });
  document.addEventListener('touchend', touchEnd, { passive: true });
}

function beforeUnmount(element: HTMLElement) {
  const listeners = dict.get(element);

  if (!listeners) {
    return;
  }

  const [touchStart, touchEnd] = listeners;

  element.removeEventListener('touchstart', touchStart);
  document.removeEventListener('touchend', touchEnd);
}

export const SwipeDirective: ObjectDirective<HTMLElement, Binding> = {
  beforeMount,
  beforeUnmount,
};
