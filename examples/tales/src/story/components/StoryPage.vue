<template>
  <div :class="$style.page">
    <div
      :class="$style.container"
      :style="{
        '--tok-story-image': `url(${page.webp})`,
      }"
    >
      <picture>
        <source type="image/webp" :srcset="page.webp" />

        <img alt="story image" :src="page.image" :class="$style.image" />
      </picture>
    </div>

    <div :class="$style.text">{{ translatedText }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { computed, toRefs } from 'vue';

import { storyStub } from '../story.stub';

const props = defineProps<{ index: number }>();

const { index } = toRefs(props);

const page = computed(() => {
  const value = index.value - 1;

  return storyStub[value];
});

const text = computed(() => {
  return page.value.text;
});

const i18n = useI18n();
const translatedText = i18n.useTranslated(text);
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;

  min-height: var(--story-height);
  max-height: var(--story-height);
  height: 100%;
}

.container {
  position: relative;
  max-height: calc(var(--story-height) / 2);

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    background-image: var(--tok-story-image);
    filter: blur(1rem);
    -webkit-filter: blur(1rem);
  }
}

.image {
  display: block;
  object-fit: contain;
  width: 100%;
  max-height: calc(var(--story-height) / 2);
}

.text {
  flex: 1;
  overflow: auto;
  background-color: rgb(var(--tok-background-color-base));
  color: var(--ark-text-color);
  padding: 1rem;

  font: var(--tok-font-xl);
}
</style>
