<template>
  <div
    ref="host"
    ondragstart="return false;"
    :class="[$style.container, draggable && $style.container_draggable]"
  >
    <div v-carousel-scroll="carouselScrollProps" :class="$style.scroller">
      <div :class="$style.wrapper">
        <div
          v-drag-drop="dragDropProps"
          v-swipe="swipeProps"
          :class="[$style.items, transitioned && $style.items_transitioned]"
          :style="transform"
        >
          <div
            v-for="(item, index) in computedItems"
            v-intersection="getIntersectionProps(index + itemIndexCorrection)"
            :key="index + itemIndexCorrection"
            :style="computedStyle"
            :class="$style.item"
          >
            <slot :item="item" :index="index + itemIndexCorrection" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { DragDropDirective as vDragDrop } from '@tok/ui/directives/dragdrop';
import { IntersectionDirective as vIntersection } from '@tok/ui/directives/intersection';
import { Swipe, SwipeDirective as vSwipe } from '@tok/ui/directives/swipe';
import { isMobile } from '@tok/ui/dom/platform';
import { clamp } from '@tok/ui/utility/clamp';
import { computed, onBeforeUnmount, onMounted, ref, toRefs, watch } from 'vue';

import {
  CarouselDefaultProps,
  CarouselEmits,
  CarouselExpose,
  CarouselProps,
  CarouselSlots,
} from './Carousel.props';
import { CarouselScrollDirective as vCarouselScroll } from './carousel-scroll.directive';

const props = withDefaults(
  defineProps<CarouselProps<T>>(),
  CarouselDefaultProps
);

const emit = defineEmits<CarouselEmits>();

defineSlots<CarouselSlots<T>>();

const { itemsCount, modelValue, items, draggable, threshold, paddingPx } =
  toRefs(props);
const transitioned = ref(true);
const translate = ref(0);
const host = ref<HTMLElement | null>(null);

const computedStyle = computed(() => {
  const _itemsCount = itemsCount.value;
  const percent = 100 / _itemsCount;
  const correctionForAlignLeft = (paddingPx.value * 2) / _itemsCount;

  const width = `calc(${percent}% + ${correctionForAlignLeft}px)`;

  const virtualTransformPercent = virtualIndexStartEnd.value.start * 100;
  const _transform = `translateX(${virtualTransformPercent}%)`;

  return {
    minWidth: width,
    maxWidth: width,
    flexBasis: width,
    transform: _transform,
  };
});

const computedTranslate = computed(() => -modelValue.value / itemsCount.value);

const transform = computed(() => {
  const x = transitioned.value ? computedTranslate.value : translate.value;
  const padding = paddingPx.value;
  const paddingCorrection = padding * (1 - 2 * x);

  return {
    transform: `translateX(${100 * x}%) translateX(-${paddingCorrection}px)`,
  };
});

// This is a solution for implementing "virtual scroll" to enhance performance when dealing with a large number of elements in a carousel
const virtualIndexStartEnd = computed(() => {
  const value = modelValue.value;
  const length = items.value.length;

  return {
    start: clamp(value - 1, 0, length - 1),
    end: clamp(value + itemsCount.value + 1, 0, length - 1),
  };
});

const itemIndexCorrection = computed(() => {
  const value = modelValue.value;

  return (value === 0 ? 0 : -1) + value;
});

const computedItems = computed(() => {
  const { start, end } = virtualIndexStartEnd.value;

  return items.value.slice(start, end + 1);
});

const computedDraggable = computed(() => isMobile() || draggable.value);

onMounted(() => {
  const element = host.value;

  if (element) {
    element.addEventListener('touchstart', startTouch, { passive: true });
    element.addEventListener('touchend', endTouch, { passive: true });

    element.addEventListener('mousedown', startTouch, { passive: true });
    document.addEventListener('mouseup', endTouch, { passive: true });
  }
});

const updateIndex = (index: number) => {
  const max = clamp(
    items.value.length - 1,
    0,
    Math.max(0, items.value.length - itemsCount.value)
  );

  emit('update:modelValue', clamp(index, 0, max));
};

watch(itemsCount, () => {
  updateIndex(0);
});

const next = () => {
  updateIndex(modelValue.value + 1);
};

const back = () => {
  updateIndex(modelValue.value - 1);
};

const onDragDrop = (
  element: HTMLElement | null,
  [offsetX]: [number, number]
) => {
  const filtered = Math.abs(offsetX) < threshold.value;

  if (!computedDraggable.value || !element || filtered) {
    return;
  }

  const { clientWidth } = element;
  const min = 1 - items.value.length / itemsCount.value;

  translate.value = clamp(offsetX / clientWidth + translate.value, min, 0);
};

const startTouch = () => {
  transitioned.value = false;

  translate.value = computedTranslate.value;
};

const endTouch = () => {
  transitioned.value = true;
};

const memoIntersection = new Map<
  number,
  {
    onEvent: IntersectionObserverCallback;
    options: IntersectionObserverInit;
  }
>();

// find a way to improve this behavior instead memo solution
const getIntersectionProps = (correctIndex: number) => {
  if (memoIntersection.has(correctIndex)) {
    return memoIntersection.get(correctIndex)!;
  }

  const intersection = {
    onEvent: (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting, intersectionRatio } = entries[0];

      if (!isIntersecting) {
        return;
      }

      if (intersectionRatio && intersectionRatio !== 1 && !transitioned.value) {
        updateIndex(
          modelValue.value < correctIndex
            ? correctIndex - itemsCount.value + 1
            : correctIndex
        );
      }
    },
    options: {
      threshold: 0.01,
    },
  };

  memoIntersection.set(correctIndex, intersection);

  return intersection;
};

const onScroll = (delta: 1 | -1) => {
  updateIndex(modelValue.value + delta);
};

const onSwipe = (_: unknown, swipe: Swipe) => {
  const direction = swipe.direction;

  if (
    Math.round(translate.value) !== -modelValue.value ||
    !computedDraggable.value
  ) {
    return;
  }

  if (direction === 'left') {
    next();
  } else if (direction === 'right') {
    back();
  }
};

const carouselScrollProps = { onEvent: onScroll };

const dragDropProps = { onEvent: onDragDrop };

const swipeProps = { onEvent: onSwipe };

const paddingComputed = computed(() => {
  return `${paddingPx.value}px`;
});

onBeforeUnmount(() => {
  const element = host.value;

  memoIntersection.clear();

  if (element) {
    element.removeEventListener('touchstart', startTouch);
    element.removeEventListener('touchend', endTouch);

    element.removeEventListener('mousedown', startTouch);
    document.removeEventListener('mouseup', endTouch);
  }
});

defineExpose<CarouselExpose>({
  next,
  back,
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.container {
  position: relative;
  display: block;
  overflow: hidden;

  &_draggable {
    user-select: none;

    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
}

.scroller {
  @include hidescroll;

  display: flex;
  overflow: auto;
  overscroll-behavior-x: none;
  transform: translateZ(0);
  will-change: transform;
  touch-action: pan-x;

  &:before,
  &:after {
    content: '';
    display: block;
    min-width: 1rem;
  }
}

.items {
  display: flex;
  align-items: center;

  &_transitioned {
    transition: transform 0.4s ease;
  }
}

.wrapper {
  position: sticky;
  left: 0;
  right: 0;
  min-width: 100%;
  overflow: hidden;
}

.item {
  padding: 0 v-bind(paddingComputed);
}
</style>
