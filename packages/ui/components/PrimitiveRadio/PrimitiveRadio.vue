<template>
  <div :class="[$style.radio, !!value && $style.radio_checked]">
    <span :class="[$style.mark, !!value && $style.mark_on]" />

    <slot />
  </div>
</template>

<script setup lang="ts">
import { PrimitiveRadioProps } from './PrimitiveRadio.props';

defineProps<PrimitiveRadioProps>();
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.radio {
  @include transition(outline-color);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;

  border: 2px solid var(--tok-text-color-24);
  border-radius: 100%;
  box-sizing: border-box;

  &_checked {
    border-color: transparent;
  }
}

.mark {
  @include transition(transform, 0.2s);

  transform: scale(0);
  width: 1.25em;
  height: 1.25em;
  border-radius: inherit;
  border: 0.25rem solid var(--tok-primary);
  box-sizing: border-box;
  background-color: var(--tok-white);

  &_on {
    transform: scale(1);
  }
}
</style>
