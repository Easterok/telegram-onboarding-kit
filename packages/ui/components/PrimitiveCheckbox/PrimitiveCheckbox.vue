<template>
  <div :class="[$style.checkbox, !!value && $style.checkbox_checked]">
    <svg-icon
      name="checkmark-fill"
      :class="[$style.mark, value !== false && $style.mark_on]"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';

import type { PrimitiveCheckboxProps } from './PrimitiveCheckbox.props';

defineProps<PrimitiveCheckboxProps>();
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.checkbox {
  @include transition(outline-color);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  outline: 2px solid var(--tok-text-color-24);
  border-radius: 100%;

  &_checked {
    outline-color: transparent;
  }
}

.mark {
  @include transition(transform, 0.2s);

  transform: scale(0);

  color: var(--tok-primary);

  &_on {
    transform: scale(1.2);
  }
}
</style>
