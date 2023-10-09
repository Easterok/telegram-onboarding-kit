<template>
  <div>
    <carousel
      v-model="activePage"
      v-slot="{ item, index }"
      ref="carouselRef"
      :threshold="10"
      :items="pages"
      :items-count="1"
    >
      <component :is="item" :index="index" :style="style" />
    </carousel>

    <footer :class="$style.footer">
      <flat-button
        rotate
        icon-button
        size="s"
        icon="arrow-right"
        :class="activePage === 0 && $style.hide"
        @click="onBack"
      />

      <span :class="$style.counter">
        {{ activePage + 1 }} / {{ pages.length }}
      </span>

      <flat-button
        icon-button
        size="s"
        icon="arrow-right"
        :class="activePage === pages.length - 1 && $style.hide"
        @click="onNext"
      />
    </footer>

    <main-button
      haptic="light"
      :text="translatedText"
      @on-click="onMainButton"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { MainButton } from '@tok/telegram-ui/components/MainButton';
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { Carousel, CarouselExpose } from '@tok/ui/components/Carousel';
import { FlatButton } from '@tok/ui/components/FlatButton';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import EndPage from './components/EndPage.vue';
import StartPage from './components/StartPage.vue';
import StoryPage from './components/StoryPage.vue';
import { storyStub } from './story.stub';

const router = useRouter();
const sdk = useTelegramSdk();

const i18n = useI18n();
const translatedText = i18n.useTranslated('_story.mainButton');

const carouselRef = ref<CarouselExpose | null>(null);

const pages = [StartPage]
  .concat(new Array(storyStub.length).fill(StoryPage))
  .concat(EndPage);

const activePage = ref(0);

const style = computed(() => {
  return {
    '--story-height': 'calc(100vh - 4rem)',
  };
});

const onBack = () => {
  sdk.HapticFeedback.impactOccurred('light');

  carouselRef.value?.back();
};

const onNext = () => {
  sdk.HapticFeedback.impactOccurred('light');

  carouselRef.value?.next();
};

const onMainButton = () => {
  router.push('/?page=6');
};
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.footer {
  @include transition(background);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  background-color: rgb(var(--tok-background-color-base));
  color: var(--tok-text-color);
}

.counter {
  font-weight: 700;
}

.hide {
  opacity: 0;
  pointer-events: none;
}
</style>
