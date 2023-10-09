<template>
  <div :class="$style.page">
    <h4>{{ title }}</h4>

    <h2>{{ name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';

const i18n = useI18n();

const title = i18n.useTranslated('_story.title');
const name = i18n.useTranslated('_story.name');
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.75rem;

  background-color: rgb(var(--tok-background-color-base));
  color: var(--ark-text-color);
  text-align: center;

  min-height: var(--story-height);
  height: 100%;
}
</style>
