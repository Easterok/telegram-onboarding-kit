<template>
  <div :class="$style.pagination">
    <span
      v-for="(i, index) in length"
      :key="i"
      :class="[$style.item, index === modelValue && $style.item_active]"
    />

    <input
      type="range"
      :value="modelValue"
      :class="$style.slider"
      :min="0"
      :max="length - 1"
      :step="1"
      :style="style"
      @input="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import { PaginationEmits, PaginationProps } from './Pagination.props';

const props = defineProps<PaginationProps>();

const emit = defineEmits<PaginationEmits>();

const { length } = toRefs(props);

const style = computed(() => {
  const value = length.value;

  return {
    width: `calc(${value - 1} * 2rem - 1rem)`,
  };
});

const onEmit = (index: number) => {
  emit('update:modelValue', index);
};

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  onEmit(Number(target.value));
};
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.pagination {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.slider {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2em;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.item {
  position: relative;
  width: 1rem;
  height: 1rem;
  padding: 0 1rem;

  &:after {
    @include transition(background-color);

    transition-property: background-color, transform;

    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    background-color: var(--tok-text-color-32);
  }

  &_active {
    &:after {
      background-color: var(--tok-primary);
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
}
</style>
