<template>
  <div :class="$style.slide">
    <div ref="focusTrapRef" tabindex="0" :class="$style.focustrap" />

    <media-preset
      v-if="media"
      v-bind="media"
      :class="[$style.media, $style['media_' + shape]]"
    />

    <div
      :class="[$style.content, $style['content_' + shape]]"
      :style="{ textAlign: textAlign, background: background }"
    >
      <slot />

      <main-button
        v-if="active && buttonText"
        haptic="light"
        :keep-alive="!!carousel"
        :text="i18nButton"
        @on-click="onClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MediaPreset } from '@tok/generation/components/Media';
import { useCarousel } from '@tok/generation/use/carousel';
import { useI18n } from '@tok/i18n';
import { MainButton } from '@tok/telegram-ui/components/MainButton';
import { setNativeFocused } from '@tok/ui/dom/focus';
import { computed, ref, toRefs, watch } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';

import {
  PrimitiveSlideDefaultProps,
  PrimitiveSlideEmits,
  PrimitiveSlideProps,
} from './PrimitiveSlide.props';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<PrimitiveSlideProps>(),
  PrimitiveSlideDefaultProps
);

const emit = defineEmits<PrimitiveSlideEmits>();

const { button, active } = toRefs(props);

const carousel = useCarousel();
const router = useRouter();

const focusTrapRef = ref<HTMLElement | null>(null);

const buttonText = computed(() => {
  const value = button.value;

  return typeof value === 'string' ? value : value ? value.content : '';
});

const buttonProps = computed<{ to?: RouteRecordRaw }>(() => {
  const value = button.value;

  return typeof value === 'string' ? {} : value || {};
});

const i18n = useI18n();
const i18nButton = i18n.useTranslated(buttonText);

watch(
  [active, focusTrapRef],
  ([value, focustrap]) => {
    if (value && focustrap) {
      setNativeFocused(focustrap, true, true);
    }
  },
  { immediate: true }
);

const onClick = () => {
  const _props = buttonProps.value;

  if (_props.to) {
    router.push(_props.to);

    return;
  }

  emit('onClick');
};
</script>

<style lang="scss" module>
.focustrap {
  width: 0;
  height: 0;
}

.slide {
  position: relative;
  min-height: var(--tg-viewport-stable-height, 100vh);
  height: 100%;
  max-height: var(--tg-viewport-stable-height, 100vh);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.media {
  width: 100%;

  &_stacked {
    position: absolute;
    height: 100vh;
    width: auto;
    max-width: 100%;
    z-index: -1;
  }
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  gap: 0.75rem;

  background: var(
    --tok-slide-background,
    linear-gradient(
      180deg,
      rgba(var(--tok-background-color-base), 0) 0%,
      var(--tok-background-color) 20%
    )
  );

  &_rounded {
    background: var(--tok-slide-background, var(--tok-background-color));
  }

  .media + &_rounded {
    margin-top: -2rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  &_stacked {
    position: absolute;
    bottom: 0;
    left: 0;
    min-height: var(--tg-viewport-stable-height, 100vh);
    height: 100%;
    width: 100%;
    overflow-y: auto;

    background: var(
      --tok-slide-background,
      linear-gradient(
        180deg,
        rgba(var(--tok-background-color-base), 0) 0%,
        var(--tok-background-color) 80%
      )
    );

    & > *:first-child {
      margin-top: auto;
    }
  }
}
</style>
