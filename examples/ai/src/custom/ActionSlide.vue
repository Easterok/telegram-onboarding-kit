<template>
  <slide-preset
    v-bind="props"
    pagination="count"
    shape="stacked"
    :media="_media"
    :button="null"
  >
    <div :class="$style.footer">
      <flat-button
        size="l"
        shape="rounded"
        :appearance="applied ? 'secondary' : 'primary'"
        :class="$style.footer__button"
        :icon="applied ? 'check' : 'wind'"
        @click="onToggle"
      >
        {{ translatedButton }}
      </flat-button>

      <flat-button
        v-bind="typeof nextButton === 'string' ? {} : nextButton"
        size="l"
        shape="rounded"
        @click="onNext"
      >
        {{ translatedNext }}
      </flat-button>
    </div>
  </slide-preset>
</template>

<script setup lang="ts">
import type { MediaPresetProps } from '@tok/generation/components/Media';
import { SlidePreset, SlidePresetProps } from '@tok/generation/presets/slide';
import { useCarousel } from '@tok/generation/use/carousel';
import { useI18n } from '@tok/i18n';
import { FlatButton, FlatButtonProps } from '@tok/ui/components/FlatButton';
import { CUSTOM_ICONS_TOKEN } from '@tok/ui/tokens';
import { computed, defineAsyncComponent, provide, ref, toRefs } from 'vue';

type Props = Omit<
  SlidePresetProps,
  'media' | 'button' | 'buttonAfterContent' | 'shape' | 'pagination'
> & {
  actionButton: [string, string];
  nextButton: string | (FlatButtonProps & { content: string });
  media: [MediaPresetProps, MediaPresetProps];
};

const props = defineProps<Props>();

provide(CUSTOM_ICONS_TOKEN, {
  check: defineAsyncComponent(() => import('../assets/icons/check.svg')),
  wind: defineAsyncComponent(() => import('../assets/icons/wind.svg')),
});

const { actionButton, nextButton, media } = toRefs(props);

const applied = ref(false);

const i18n = useI18n();
const carousel = useCarousel();

const action = computed(() => {
  const value = applied.value;
  const [initial, _applied] = actionButton.value;

  return value ? _applied : initial;
});

const _media = computed(() => {
  const value = applied.value;
  const [initial, _applied] = media.value;

  return value ? _applied : initial;
});

const computedNext = computed(() => {
  const value = nextButton.value;

  return typeof value === 'string' ? value : value.content;
});

const translatedButton = i18n.useTranslated(action);
const translatedNext = i18n.useTranslated(computedNext);

const onToggle = () => {
  applied.value = !applied.value;
};

const onNext = () => {
  carousel?.next();
};
</script>

<style lang="scss" module>
.slide {
  position: relative;
  min-height: var(--tg-viewport-stable-height, 100vh);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(180deg, rgba(28, 28, 29, 0) 0%, #1c1c1d 80%);
  }
}

.footer {
  display: flex;

  margin-top: 1rem;

  &__button {
    width: 100%;

    margin-right: 1rem;
  }
}

.count {
  color: var(--tok-oslo-64);

  margin-top: auto;
  margin-bottom: 1rem;
}

.media {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100vh;
  width: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}

.title {
  margin-bottom: 0.75rem;
}

.description {
  margin-bottom: 1.25rem;
}
</style>
