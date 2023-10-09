# @tok/ui directives

# [1. Dragdrop](./dragdrop/dragDrop.directive.ts)

To detect how far element was dragged

> Used in
>
> 1. [Carousel](../components/Carousel/README.md)

## Usage

```vue
<template>
  <div v-dragdrop="dragDropProps">hello</div>
</template>

<script setup lang="ts">
import { DragDropDirective as vDragDrop } from '@tok/ui/directives/dragdrop';

const onEvent = (
  element: HTMLElement | null,
  [offsetX, offsetY]: [number, number]
) => {
  // do something
};

const dragDropProps = {
  onEvent,
};
</script>
```

# [2. Intersection](./intersection/intersection.directive.ts)

Simple Directive for [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

> Used in
>
> 1. [Carousel](../components/Carousel/README.md)

## Usage

```vue
<template>
  <div v-intersection="intersectionProps">hello</div>
</template>

<script setup lang="ts">
import { IntersectionDirective as vIntersection } from '@tok/ui/directives/intersection';

const onEvent: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  // do something
};

const intersectionProps = {
  onEvent,
};
</script>
```

# [3. Ripple](./ripple/index.ts)

Simple Directive for Ripple effect

> Used in
>
> 1. [FlatButton](../components/FlatButton/README.md)
> 2. [TelegramPopupButton](../../telegram-ui/components/TelegramPopup/TelegramPopupButton.vue)

## Usage

```vue
<template>
  <button v-ripple>Click me!</button>
</template>

<script setup lang="ts">
import { RippleDirective as vRipple } from '@tok/ui/directives/ripple';
</script>
```

## Customization

You can specify ripple color via style

```vue
<template>
  <button v-ripple class="button">Click me!</button>
</template>

<script setup lang="ts">
import { RippleDirective as vRipple } from '@tok/ui/directives/ripple';
</script>

<style lang="scss" scoped>
.button {
  .tok-ripple-ink {
    background: red;
  }
}
</style>
```

# [3. Swipe](./swipe/swipe.directive.ts)

Directive allows detecting swipes on mobile devices

> Used in
>
> 1. [Carousel](../components/Carousel/README.md)

## Usage

```vue
<template>
  <div v-swipe="swipeProps">Swipe me!</div>
</template>

<script setup lang="ts">
import { Swipe, SwipeDirective as vSwipe } from '@tok/ui/directives/swipe';

const onEvent = (element: EventTarget | null, swipe: Swipe) => {
  // do something
};

const swipeProps = {
  onEvent,
  // timeout: 500, max time between touchstart and touchend
  // threshold: 30, min distance between touchstart and touchend
};
</script>
```

## Customization

You can specify ripple color via style

```vue
<template>
  <button v-ripple class="button">Click me!</button>
</template>

<script setup lang="ts">
import { RippleDirective as vRipple } from '@tok/ui/directives/ripple';
</script>

<style lang="scss" scoped>
.button {
  .tok-ripple-ink {
    background: red;
  }
}
</style>
```
