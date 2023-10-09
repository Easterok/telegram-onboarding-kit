import { inject, InjectionKey, Ref } from 'vue';

type Accessor = {
  next: () => void;
  back: () => void;
  set: (index: number) => void;
  index: Ref<number>;
  length: Ref<number>;
};

export const CAROUSEL_ACCESSOR_TOKEN = Symbol() as InjectionKey<Accessor>;

export function useCarousel(): Accessor | null {
  const accessor = inject(CAROUSEL_ACCESSOR_TOKEN, null);

  if (accessor === null) {
    console.warn(
      'You are using carousel methods outside of the carousel component'
    );
  }

  return accessor;
}
