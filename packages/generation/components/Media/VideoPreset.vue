<template>
  <div v-bind="props" :class="$style.container">
    <video
      v-if="loaded"
      ref="videoRef"
      playsinline
      muted
      loop
      :controls="false"
      :class="$style.video"
      :poster="loadedPoster"
    >
      <source :src="loaded" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div v-if="!videoPlaying" :class="$style.tapAnimation" />

    <button v-if="!videoPlaying" :class="$style.fallback" @click="forceRefresh">
      Video not playing?<br />Tap here
    </button>
  </div>
</template>

<script setup lang="ts">
import { WAS_INTERACTION_TOKEN } from '@tok/generation/tokens';
import { noop } from '@tok/ui/utility/noop';
import { inject, ref, toRefs, watch } from 'vue';

import { VideoPresetProps } from './Media.preset.props';
import { useLoadedImage } from './useLoadedImage';

const props = defineProps<VideoPresetProps>();

const { src, poster } = toRefs(props);

const loaded = useLoadedImage(src);
const loadedPoster = useLoadedImage(poster);

const videoRef = ref<HTMLVideoElement | null>(null);
const wasInteraction = inject(WAS_INTERACTION_TOKEN, ref(false));

// Required for iOS devices to initiate the first interaction with the page;
// otherwise, the video will not play automatically
// Note: MainButton is located outside of the miniapp, so the browser doesn't register the first interaction event
const forceRefreshEvents = ref(NaN);
const videoPlaying = ref(false);

const forceRefresh = () => {
  forceRefreshEvents.value = Date.now();
};

const onVideoPlay = () => {
  videoPlaying.value = true;
};

watch(
  [videoRef, loaded, wasInteraction, forceRefreshEvents],
  ([_video], _, onCleanup) => {
    onCleanup(() => {
      _video?.removeEventListener('play', onVideoPlay);
    });

    if (_video) {
      _video.addEventListener('play', onVideoPlay);

      _video.play().catch(noop);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.container {
  position: relative;

  aspect-ratio: 16/9;
}

.video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: transparent;
}

.fallback {
  @include clearbutton;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font: var(--tok-body-xs);
  color: var(--tok-text-color-64);
}

.tapAnimation {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  pointer-events: none;
  user-select: none;

  background: var(--tok-text-color-16);
  transform: translate(-50%, -50%);
  margin-left: -1rem;
  margin-top: -1rem;

  animation: _tapAnimation 1s infinite ease-in-out;
}

@keyframes _tapAnimation {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  60% {
    opacity: 0.82;
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
