<template>
  <div v-bind="props" :class="$style.emodji">
    <span :class="$style.text">{{ src }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import type { EmodjiPresetProps } from './Media.preset.props';

const props = defineProps<EmodjiPresetProps>();

const { size } = toRefs(props);

const computedSize = computed(() => {
  const _size = size?.value;

  if (!_size) {
    return {
      width: '1.625em',
      height: '1.625em',
    };
  }

  if (typeof _size === 'number') {
    return {
      width: `${_size}px`,
      height: `${_size}px`,
    };
  }

  return {
    width: `${_size[0]}px`,
    height: `${_size[1]}px`,
  };
});

const width = computed(() => computedSize.value.width);
const height = computed(() => computedSize.value.height);
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.emodji {
  @include size(v-bind(width), v-bind(height));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  font: var(--tok-font-h4);

  background: var(--tok-background-color);
}

.text {
  font-size: 0.825em;
}
</style>
