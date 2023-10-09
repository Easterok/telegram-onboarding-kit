import { DirectiveBinding, ObjectDirective } from 'vue';

type Binding = {
  onEvent: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
};

const OPTIONS: IntersectionObserverInit = {
  threshold: 1.0,
} as const;

const dict = new Map<HTMLElement, IntersectionObserver>();

function mounted(element: HTMLElement, { value }: DirectiveBinding<Binding>) {
  if (!(window && 'IntersectionObserver' in window)) {
    return;
  }

  const { options = OPTIONS } = value;

  const observer = new IntersectionObserver(value.onEvent, options);

  observer.observe(element);

  dict.set(element, observer);
}

function beforeUnmount(element: HTMLElement) {
  const observer = dict.get(element);

  observer?.disconnect();

  dict.delete(element);
}

export const IntersectionDirective: ObjectDirective<HTMLElement, Binding> = {
  mounted,
  beforeUnmount,
};
