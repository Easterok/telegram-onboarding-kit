<template>
  <svg-icon v-bind="props" :name="onlyName">
    <component
      v-if="onlyLoader"
      :is="onlyLoader"
      tabindex="-1"
      focusable="false"
      aria-hidden="true"
      width="100%"
      height="100%"
    />
  </svg-icon>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { SvgIcon } from '@tok/ui/components/SvgIcon';
import { computed, defineAsyncComponent, toRefs } from 'vue';

import { _MediaLoader, IconPresetProps } from './Media.preset.props';

const props = withDefaults(defineProps<IconPresetProps>(), {
  src: '',
  webp: '',
});

const { src } = toRefs(props);

const srcProbablyTranslated = computed(() => {
  return src.value && typeof src.value === 'string' ? src.value : '';
});

const i18n = useI18n();
const translatedSrc = i18n.useTranslated<
  string | _MediaLoader<{ render: () => void }>
>(srcProbablyTranslated);

const onlyLoader = computed(() => {
  const value = translatedSrc.value;

  if (typeof value === 'object' && 'then' in value) {
    return defineAsyncComponent(() => value);
  }

  const _src = src.value;

  if (typeof _src === 'object' && 'then' in _src) {
    return defineAsyncComponent(() => _src);
  }

  return null;
});

const onlyName = computed(() => {
  const value = translatedSrc.value;

  return typeof value === 'string' ? value : '';
});
</script>
