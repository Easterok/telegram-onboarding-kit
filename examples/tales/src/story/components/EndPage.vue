<template>
  <div :class="$style.page">
    <picture>
      <source type="image/webp" :srcset="lastStory.webp" />

      <img
        alt="endpage background"
        :src="lastStory.image"
        :class="$style.image"
      />
    </picture>

    <h3 :class="$style.title">{{ end }}</h3>

    <flat-button :class="$style.button" @click="onClick">
      {{ back }}
    </flat-button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { FlatButton } from '@tok/ui/components/FlatButton';
import { useRouter } from 'vue-router';

import { storyStub } from '../story.stub';

const lastStory = storyStub[storyStub.length - 1];

const sdk = useTelegramSdk();
const router = useRouter();
const i18n = useI18n();

const end = i18n.useTranslated('_story.end');
const back = i18n.useTranslated('_story.back');

const onClick = () => {
  sdk.HapticFeedback.impactOccurred('light');

  router.push('/?page=6');
};
</script>

<style lang="scss" module>
.page {
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  color: var(--tok-white);
  text-align: center;
  overflow: hidden;

  min-height: var(--story-height);
  height: 100%;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    z-index: -1;
  }
}

.title {
  margin-top: auto;
}

.image {
  position: absolute;
  left: 50%;
  top: 50%;

  z-index: -1;

  transform: translate(-50%, -50%);
}

.button {
  margin-top: auto;
}
</style>
