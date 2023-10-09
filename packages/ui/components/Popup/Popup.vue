<template>
  <Portal v-if="popupsContainer" append-to="#tok-popups-host">
    <transition
      :enter-from-class="$style[`tok-popup-enter-from`]"
      :enter-active-class="$style[`tok-popup-enter-active`]"
      :leave-active-class="$style[`tok-popup-leave-active`]"
      :leave-to-class="$style[`tok-popup-leave-to`]"
    >
      <section
        v-if="modelValue"
        aria-modal="true"
        role="dialog"
        :class="$style.wrapper"
        @click="onWrapperClick"
      >
        <div :class="$style.popup">
          <div ref="contentRef" :class="$style.content">
            <div :class="$style.content__header">
              <h4 v-html="translatedTitle" :class="$style.content__title" />

              <flat-button
                ref="closeButtonRef"
                icon-button
                aria-label="close popup"
                icon="close"
                appearance="ghost"
                shape="square"
                @click.prevent="close"
              />
            </div>

            <div :class="$style.content__rest">
              <p
                v-if="translatedMessage"
                v-html="translatedMessage"
                :class="$style.message"
              />

              <slot :close="close" />
            </div>
          </div>
        </div>
      </section>
    </transition>
  </Portal>
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { FlatButton } from '@tok/ui/components/FlatButton';
import { Portal } from '@tok/ui/components/Portal';
import { POPUPS_HOST_TOKEN } from '@tok/ui/tokens';
import { getElementId } from '@tok/ui/utility/getElementId';
import {
  ComponentPublicInstance,
  inject,
  onBeforeUnmount,
  ref,
  toRefs,
  watch,
} from 'vue';

import { PopupDefaultProps, PopupEmits, PopupProps } from './Popup.props';

const props = withDefaults(defineProps<PopupProps>(), PopupDefaultProps);

const emit = defineEmits<PopupEmits>();

const { modelValue, title, message } = toRefs(props);

const popupsContainer = inject(POPUPS_HOST_TOKEN, ref(null));
const contentRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<ComponentPublicInstance | null>(null);

const i18n = useI18n();
const translatedTitle = i18n.useTranslated(title);
const translatedMessage = i18n.useTranslated(message);

const id = getElementId();

const close = () => {
  emit('update:modelValue', false);
};

const onWrapperClick = (event: MouseEvent) => {
  const target = event.target as Node | null;
  const shouldClose = !!contentRef.value && !contentRef.value.contains(target);

  if (shouldClose) {
    close();
  }
};

watch(
  [popupsContainer, modelValue],
  ([content, value]) => {
    content?.setOpened(id, value);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  popupsContainer.value?.remove(id);
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overscroll-behavior: contain;
  display: flex;
  align-items: flex-start;
  outline: none;
  overflow: auto;
  overflow: overlay;
  bottom: auto;
}

.popup {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 0.625rem solid transparent;

  min-width: 100%;
  width: 100%;
  max-width: 100%;
  margin: auto 0 0;
}

.content {
  border-radius: inherit;
  background: var(--tok-background-color);
  padding: 0.25rem;

  &:focus-visible {
    outline: none;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    padding-top: 0.75rem;
    padding-left: 0.75rem;
  }

  &__rest {
    padding: 0.75rem;
  }
}

.close {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.tok-popup-enter-active,
.tok-popup-leave-active {
  @include transition(all);

  transition-property: transform, opacity;
  transform: translate(0);
  opacity: 1;
}

.tok-popup-enter-from,
.tok-popup-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}

.message {
  margin-bottom: 0.5rem;
}
</style>
