<template>
  <component
    v-ripple
    :is="computedComponent"
    class="tok-button"
    :data-appearance="appearance"
    :data-size="size"
    :data-shape="computedShape"
    :data-loading="loading"
    :disabled="disabled"
    :href="href"
    :to="to"
  >
    <slot name="icon">
      <svg-icon v-if="icon" :name="icon" :rotate="rotate" :size="iconSize" />
    </slot>

    <slot v-if="!iconButton" />

    <slot name="iconRight">
      <svg-icon
        v-if="iconRight"
        :name="iconRight"
        :rotate="rightRotate"
        :size="iconSize"
      />
    </slot>

    <svg-icon v-if="loading" name="spinner" class="spinner" />
  </component>
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
import { RippleDirective as vRipple } from '@tok/ui/directives/ripple';
import { computed, toRefs } from 'vue';

import { FlatButtonDefaultProps, FlatButtonProps } from './FlatButton.props';

const props = withDefaults(
  defineProps<FlatButtonProps>(),
  FlatButtonDefaultProps
);

const { icon, size, iconRight, shape, iconButton, href, to } = toRefs(props);

const computedShape = computed(() => {
  const _shape = shape.value;

  if (_shape === 'square') {
    return 'square';
  }

  return iconButton.value ? 'icon' : _shape;
});

const computedComponent = computed(() => {
  const isLink = !!href?.value;

  if (isLink) {
    return 'a';
  }

  const isVueLink = !!to?.value;

  return isVueLink ? 'router-link' : 'button';
});
</script>

<style lang="scss" scope>
@import '@tok/ui/styles/local.scss';

.tok-button {
  @include clearbutton;
  @include transition(background-color);

  transition-property: background-color, opacity, color;

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  gap: 0.5rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-decoration: none;
  outline: none;

  cursor: pointer;

  &[data-size='xs'] {
    height: var(--tok-height-xs);
    min-height: var(--tok-height-xs);
    gap: 0.25rem;

    padding: 0 var(--tok-padding, 0.375rem);
    border-radius: var(--tok-radius-xs);

    font: var(--tok-font-xs);
  }

  &[data-size='s'] {
    gap: 0.375rem;

    padding: 0 var(--tok-padding, 0.75rem);
    height: var(--tok-height-s);
    min-height: var(--tok-height-s);

    font: var(--tok-font-m);

    border-radius: var(--tok-radius-s);
  }

  &[data-size='m'] {
    padding: 0 var(--tok-padding, 1.5rem);
    height: var(--tok-height-m);
    min-height: var(--tok-height-m);

    font: var(--tok-font-l);

    border-radius: var(--tok-radius-m);
  }

  &[data-size='l'] {
    padding: 0 var(--tok-padding, 2.25rem);
    height: var(--tok-height-l);
    min-height: var(--tok-height-l);

    font: var(--tok-font-l);

    border-radius: var(--tok-radius-l);
  }

  &[data-appearance='primary'] {
    background: var(--tok-primary);
    color: var(--tok-primary-text);
  }

  &[data-appearance='secondary'],
  &[data-appearance='ghost'] {
    background: transparent;
    color: var(--tok-primary);

    .tok-ripple-ink {
      background: var(--tok-primary);
      opacity: 0.5;
    }
  }

  &[data-appearance='secondary'] {
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: '';
      border-radius: inherit;
      border: 2px solid currentColor;
      pointer-events: none;
      color: var(--tok-primary);
    }
  }

  &[data-shape='square'],
  &[data-shape='icon'] {
    padding: 0;

    &[data-size='xs'] {
      width: var(--tok-height-xs);
      min-width: var(--tok-height-xs);
    }

    &[data-size='s'] {
      width: var(--tok-height-s);
      min-width: var(--tok-height-s);
    }

    &[data-size='m'] {
      width: var(--tok-height-m);
      min-width: var(--tok-height-m);
    }

    &[data-size='l'] {
      width: var(--tok-height-l);
      min-width: var(--tok-height-l);
    }
  }

  &[data-shape='rounded'] {
    border-radius: 6.25rem;
  }

  &[data-shape='icon'] {
    border-radius: 100%;
  }

  &[data-loading='true'] {
    pointer-events: none;

    & > *:not(.spinner) {
      opacity: 0 !important;
    }
  }

  &:hover {
    opacity: var(--tok-hover-opacity);
  }

  &:disabled {
    pointer-events: none;
    opacity: var(--tok-disabled-opacity);
  }
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
