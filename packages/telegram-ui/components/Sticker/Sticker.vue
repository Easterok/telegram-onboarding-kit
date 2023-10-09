<template>
  <div ref="lottieContainerRef" @click="onClick" @touchdown="onClick" />
</template>

<script setup lang="ts">
import lottie, { AnimationItem } from 'lottie-web';
import { ref, toRefs, watch } from 'vue';

import { StickerDefaultProps, StickerProps } from './Sticker.props';

const props = withDefaults(defineProps<StickerProps>(), StickerDefaultProps);

const { json, loop, speed } = toRefs(props);

const lottieContainerRef = ref<HTMLElement | null>(null);
const lottieItem = ref<AnimationItem | null>(null);

const initialize = ([container, animationData]: [
  HTMLElement | null,
  StickerProps['json']
]) => {
  if (!container || !animationData) {
    return;
  }

  lottieItem.value = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoplay,
    animationData,
  });
};

watch(
  lottieItem,
  (value, _, onCleanup) => {
    onCleanup(() => {
      value?.destroy();
    });
  },
  { immediate: true }
);

watch([lottieContainerRef, json], initialize, { immediate: true });

watch(
  [lottieItem, loop],
  ([item, _loop]) => {
    item?.setLoop(_loop);
  },
  { immediate: true }
);

watch(
  [lottieItem, speed],
  ([item, _speed]) => {
    item?.setSpeed(_speed);
  },
  { immediate: true }
);

const onClick = () => {
  if (props.playOnClick) {
    play();
  }
};

const play = () => {
  lottieItem.value?.resetSegments(true);
  lottieItem.value?.play();
};

const stop = () => {
  lottieItem.value?.stop();
};

const resetSegments = (...args: Parameters<AnimationItem['resetSegments']>) => {
  lottieItem.value?.resetSegments(...args);
};

defineExpose({
  play,
  stop,
  resetSegments,
});
</script>
