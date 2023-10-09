<template>
  <div v-bind="props" :class="$style.container">
    <component
      v-if="loaded"
      v-bind="props"
      :is="TelegramSticker"
      :json="loaded"
      :class="$style.sticker"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, toRefs, watch } from 'vue';

import type { StickerPresetProps } from './Media.preset.props';

// We have to do it this way because Lottie-web's bundled size is around 80kb
const TelegramSticker = defineAsyncComponent(() =>
  import('@tok/telegram-ui/components/Sticker').then((m) => m.Sticker)
);

const props = withDefaults(defineProps<StickerPresetProps>(), {
  src: null,
});

const { src, size } = toRefs(props);

const loaded = ref<TelegramStickerJson | undefined>();

const computedSize = computed(() => {
  const _size = size?.value;

  if (!_size) {
    return {
      width: '100%',
      height: '100%',
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

const loadStickerJson = (loader: Promise<typeof import('*.tgs')>) => {
  loader.then((m) => {
    loaded.value = (m as { default: TelegramStickerJson }).default;
  });
};

watch(
  src,
  (value) => {
    if (value && typeof value === 'string') {
      console.error(
        'Sticker Preset: The sticker src is string. You need to use import like that: `import("./assets/.tgs")`. Otherwise it won\'t loaded'
      );

      return;
    }

    if (value && typeof value === 'object' && 'then' in value) {
      loadStickerJson(value);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.container {
  height: v-bind(height);
  aspect-ratio: 1/1;
  max-height: 40vw;
}

.sticker {
  width: v-bind(width);
  height: v-bind(height);
  max-height: inherit;
  margin: 0 auto;
}
</style>
