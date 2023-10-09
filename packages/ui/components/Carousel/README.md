# Carousel

Allows you to rotate through arbitrary items.

Multiple items can be shown simultaneously

## Props

All available props see in [Carousel.props.ts](./Carousel.props.ts)

## Usage

```vue
<template>
  <carousel
    v-model="activeIndex"
    v-slot="{ item }"
    ref="carouselRef"
    :items="items"
    :items-count="1"
  >
    {{ item }}
  </carousel>

  <button @click="onBack">back</button>
  <button @click="onNext">next</button>
</template>

<script setup lang="ts">
import { Carousel, CarouselExpose } from '@tok/ui/components/Carousel';
import { ref } from 'vue';

const activeIndex = ref(0);
const items = [1, 2, 3, 4, 5];

const carouselRef = ref<CarouselExpose | null>(null);

const onNext = () => {
  /* 
    You can manipulate activeIndex, but please note that
    this approach is unsafe as it may lead to overlapping with the total number of items.
    You can use clamp function from '@tok/ui/utility/clamp' to make it safe
   */
  activeIndex.value = activeIndex.value + 1;

  /*
    Alternatively, you can use carouselInstance, which is a safer option
    that won't lead to overlapping with the total number of items
   */
  carouselRef.value?.next();
};

const onBack = () => {
  activeIndex.value = activeIndex.value - 1;

  // or
  carouselRef.value?.back();
};
</script>
```
