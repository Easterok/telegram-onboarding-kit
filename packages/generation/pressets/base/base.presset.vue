<template>
  <carousel
    v-model="activeSlide"
    v-slot="{ item, index }"
    :items-count="1"
    :items="slides"
  >
    <draw-presset
      v-bind="item"
      :active="activeSlide === index"
      :extends="String(item.extends || 'slide')"
    />
  </carousel>
</template>

<script setup lang="ts">
import { DrawPresset } from '@tok/generation/components/DrawPresset';
import { CAROUSEL_ACCESSOR_TOKEN } from '@tok/generation/use/carousel';
import { Carousel } from '@tok/ui/components/Carousel';
import { clamp } from '@tok/ui/utility/clamp';
import { computed, provide, ref, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';

import {
  BasePressetDefaultProps,
  BasePressetProps,
} from './base.presset.props';

const props = withDefaults(
  defineProps<BasePressetProps>(),
  BasePressetDefaultProps
);

const { slides } = toRefs(props);

const router = useRouter();

const slidesLength = computed(() => {
  return slides.value.length;
});

const activeIndexQuery = computed(() => {
  const route = router.currentRoute.value;
  const page = route.query.page || 0;
  const num = Number(page);

  return !Number.isNaN(num) ? clamp(num, 0, slidesLength.value - 1) : 0;
});

const activeSlide = ref(activeIndexQuery.value);

watch(
  activeIndexQuery,
  (value) => {
    activeSlide.value = value;
  },
  { immediate: true }
);

watch(
  activeSlide,
  (value, prev) => {
    if (value === prev || prev === undefined) {
      return;
    }

    const query = router.currentRoute.value.query;

    router.push({
      query: {
        ...query,
        page: value === 0 ? undefined : value,
      },
    });
  },
  { immediate: true }
);

const safeSet = (value: number) => {
  activeSlide.value = clamp(value, 0, slidesLength.value - 1);
};

const next = () => {
  safeSet(activeSlide.value + 1);
};

const back = () => {
  safeSet(activeSlide.value - 1);
};

const accessor = {
  set: safeSet,
  next,
  back,
  index: activeSlide,
  length: slidesLength,
};

provide(CAROUSEL_ACCESSOR_TOKEN, accessor);
</script>
