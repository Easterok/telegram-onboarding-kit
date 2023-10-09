import { DirectiveBinding, ObjectDirective } from 'vue';

type Binding = {
  onEvent: (element: HTMLElement | null, offset: [number, number]) => void;
};

type FilterEvent = (event: MouseEvent | TouchEvent) => boolean;

type MapperEvent = (event: MouseEvent | TouchEvent) => {
  clientX: number;
  clientY: number;
};

const docListeners = new Map<
  HTMLElement,
  [(event: TouchEvent | MouseEvent) => void, () => void]
>();
const elListeners = new Map<
  HTMLElement,
  (event: TouchEvent | MouseEvent) => void
>();

const eventFilter: FilterEvent = (event: MouseEvent | TouchEvent) => {
  return event instanceof MouseEvent ? true : event.touches.length < 2;
};

const eventMapper: MapperEvent = (event: MouseEvent | TouchEvent) => {
  return event instanceof MouseEvent
    ? {
        clientX: event.clientX,
        clientY: event.clientY,
      }
    : {
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientX,
      };
};

const beforeMount = (
  element: HTMLElement,
  { value }: DirectiveBinding<Binding>
) => {
  const _callback = (event: TouchEvent | MouseEvent) => {
    if (!eventFilter(event)) {
      return;
    }

    const mappedEvent = eventMapper(event);

    let currentPosition = {
      x: mappedEvent.clientX,
      y: mappedEvent.clientY,
    };

    const move = (moveEvent: TouchEvent | MouseEvent) => {
      if (!eventFilter(moveEvent)) {
        return;
      }

      const mappedMoveEvent = eventMapper(moveEvent);

      value.onEvent(element, [
        mappedMoveEvent.clientX - currentPosition.x,
        mappedMoveEvent.clientY - currentPosition.y,
      ]);

      currentPosition = {
        x: mappedMoveEvent.clientX,
        y: mappedMoveEvent.clientY,
      };
    };

    const end = () => {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousemove', move);

      document.removeEventListener('touchend', end);
      document.removeEventListener('mouseup', end);

      docListeners.delete(element);
    };

    document.removeEventListener('touchmove', move);
    document.removeEventListener('mousemove', move);

    document.removeEventListener('mouseup', end);
    document.removeEventListener('touchend', end);

    docListeners.delete(element);

    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('mousemove', move, { passive: true });

    document.addEventListener('touchend', end, { passive: true });
    document.addEventListener('mouseup', end, { passive: true });

    docListeners.set(element, [move, end]);
  };

  element.addEventListener('touchstart', _callback, { passive: true });
  element.addEventListener('mousedown', _callback, { passive: true });

  elListeners.set(element, _callback);
};

const beforeUnmount = (element: HTMLElement) => {
  const listener = elListeners.get(element);

  if (listener) {
    element.removeEventListener('touchstart', listener);
    element.removeEventListener('mousedown', listener);

    elListeners.delete(element);
  }

  const docListener = docListeners.get(element);

  if (docListener) {
    document.removeEventListener('touchmove', docListener[0]);
    document.removeEventListener('mousemove', docListener[0]);

    document.removeEventListener('mouseup', docListener[1]);
    document.removeEventListener('touchend', docListener[1]);

    docListeners.delete(element);
  }
};

export const DragDropDirective: ObjectDirective<HTMLElement, Binding> = {
  beforeMount,
  beforeUnmount,
};
