<template>
  <div
    class="tok-toggle"
    :data-checked="!!modelValue"
    :data-state="state"
    :data-size="size"
  >
    <span class="tok-toggle-circle" />

    <input
      :id="id"
      type="checkbox"
      role="switch"
      :checked="modelValue"
      class="tok-toggle-native"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import { ToggleDefaultProps, ToggleEmits, ToggleProps } from './Toggle.props';

const props = withDefaults(defineProps<ToggleProps>(), ToggleDefaultProps);

const emit = defineEmits<ToggleEmits>();

const { disabled } = toRefs(props);

const state = computed(() => {
  if (disabled.value) {
    return 'disabled';
  }

  return undefined;
});

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const checked = target.checked;

  emit('update:modelValue', checked);
};
</script>

<style lang="scss" scoped>
@import '@tok/ui/styles/local.scss';

.tok-toggle {
  @include transition(background);

  position: relative;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  background-color: var(--tok-text-color-32);
  border-radius: 1em;
  color: var(--tok-white);
  height: 2em;
  width: 3.5em;

  &[data-size='s'] {
    font: var(--tok-font-s);
  }

  &[data-size='m'] {
    font: var(--tok-font-m);
  }

  &[data-checked='true'] {
    background: var(--tok-primary);
  }

  &[data-state='disabled'] {
    pointer-events: none;
    opacity: var(--tok-disabled-opacity);
  }
}

.tok-toggle-circle {
  @include transition(transform);

  position: absolute;

  display: inline-block;
  height: 2em;
  width: 2em;
  border-radius: 100%;
  flex-shrink: 0;

  left: 0;
  top: 50%;

  background-color: currentColor;

  transform: translate(0, -50%) scale(0.925);

  .tok-toggle[data-checked='true'] & {
    transform: translate(1.5em, -50%) scale(0.925);
  }
}

.tok-toggle-native {
  @include clearinput;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
