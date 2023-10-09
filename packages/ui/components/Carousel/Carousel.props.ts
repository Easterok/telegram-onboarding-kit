import { VNode } from 'vue';

export type CarouselProps<T> = {
  // Current index
  modelValue: number;

  // Number of slides shown at the same time
  itemsCount: number;

  // Elements inside carousel
  items: ReadonlyArray<T>;

  /* 
    Whether or not slider can be dragged by clicking and holding

    This parameter only works on desktop devices and is ignored on mobile devices.
    The determination of whether the device is mobile is made through the `isMobile` function
  */
  draggable?: boolean;

  /*
    Number of pixels that must be traversed before the carousel recognizes a dragging action
    It's helpful when there's a scrollable element inside the carousel
  */
  threshold?: number;

  // Custom padding between elements
  paddingPx?: number;
};

export type CarouselEmits = {
  // update current index
  (e: 'update:modelValue', value: number): void;
};

export type CarouselSlots<T> = {
  default: (props: { item: T; index: number }) => ReadonlyArray<VNode>;
};

export type CarouselExpose = {
  next: () => void;
  back: () => void;
};

export const CarouselDefaultProps = {
  draggable: false,
  threshold: 0,
  paddingPx: 8,
} as const;
