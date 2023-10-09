<template>
  <primitive-slide v-bind="props" @on-click="onClick">
    <p v-if="carousel && pagination === 'count'" :class="$style.count">
      {{ slideCount }}
    </p>

    <h2 v-html="i18nTitle" :class="$style.title" />

    <p
      v-if="i18nDescription"
      v-html="i18nDescription"
      :class="$style.description"
    />

    <ul v-if="computedList.length > 0">
      <list-item
        v-for="(item, index) in computedList"
        :key="index"
        v-bind="item"
        :class="$style.listItem"
      />
    </ul>

    <slot />
  </primitive-slide>
</template>

<script setup lang="ts">
import { ListItem } from '@tok/generation/components/ListItem';
import { PrimitiveSlide } from '@tok/generation/components/PrimitiveSlide';
import { useCarousel } from '@tok/generation/use/carousel';
import { useI18n } from '@tok/i18n';
import { computed, toRefs } from 'vue';

import {
  defaultSlideListMedia,
  SlidePresetDefaultProps,
  SlidePresetProps,
} from './slide.preset.props';

const props = withDefaults(
  defineProps<SlidePresetProps>(),
  SlidePresetDefaultProps
);

const { title, description, list } = toRefs(props);

const i18n = useI18n();
const carousel = useCarousel();

const i18nTitle = i18n.useTranslated(title);
const i18nDescription = i18n.useTranslated(description);

const slideCount = computed(() => {
  if (!carousel) {
    return null;
  }

  return `${carousel.index.value + 1} / ${carousel.length.value}`;
});

const computedList = computed(() => {
  return (list?.value || []).map((item) => {
    if (typeof item === 'string') {
      return {
        media: defaultSlideListMedia,
        text: item,
      };
    }

    return item;
  });
});

const onClick = () => {
  carousel?.next();
};
</script>

<style lang="scss" module>
.count {
  font: var(--tok-font-s);
  color: var(--tok-text-color-64);

  padding-top: 0.5rem;
}

.listItem:not(:first-child) {
  margin-top: 0.75rem;
}
</style>
