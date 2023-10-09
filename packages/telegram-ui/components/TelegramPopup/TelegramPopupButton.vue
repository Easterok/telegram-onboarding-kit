<template>
  <button
    v-ripple
    :class="[
      $style.button,
      border && $style.button_border,
      $style['button_' + type],
    ]"
  >
    <slot name="icon" />

    <div :class="$style.content">
      <p>{{ text }}</p>

      <svg-icon name="arrow-right" :class="$style.icon" :size="24" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
import { RippleDirective as vRipple } from '@tok/ui/directives/ripple';
import type { PopupButton } from '@twa-dev/types';

type ButtonType = PopupButton['type'];

withDefaults(
  defineProps<{
    id?: string;
    text?: string;
    border?: boolean;
    type?: ButtonType;
  }>(),
  {
    text: '',
    type: 'default',
  }
);
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.button {
  @include clearbutton;
  @include transition(opacity);

  position: relative;

  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;

  padding: 0.6875rem 0.75rem;

  text-align: left;
  color: var(--tok-text-color);

  font: var(--tok-font-l);
  cursor: pointer;
  border-radius: inherit;

  &_border {
    &:after {
      position: absolute;
      content: '';
      right: 0.6875rem;
      bottom: 0;
      width: calc(100% - 4.125rem);
      height: 1px;
      background: var(--tok-text-color-08);
    }
  }

  &_destructive {
    color: var(--tok-error-fill);
    background: var(--tok-error-bg);
  }

  &:hover {
    opacity: var(--tok-hover-opacity);
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  margin-left: 0.125rem;
  color: var(--tok-text-color-32);
}
</style>
