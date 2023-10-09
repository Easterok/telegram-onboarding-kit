<template>
  <label :for="id" :class="[$style.product, active && $style.product_active]">
    <div :class="$style.title">
      <p v-html="title" />

      <p v-if="discount" v-html="discount" :class="$style.discount" />
    </div>

    <span :class="$style.money">
      <span v-if="description" v-html="description" />

      <money v-else :value="price" />
    </span>

    <input
      :id="elementId"
      type="radio"
      name="product-item"
      :class="$style.native"
      :checked="active"
      :value="elementId"
      @change="onChange"
    />
  </label>
</template>

<script setup lang="ts">
import type { _GenerationPaywallProduct } from '@tok/generation/defineConfig';
import { Money } from '@tok/ui/components/Money';
import { getElementId } from '@tok/ui/utility/getElementId';

type Props = _GenerationPaywallProduct & {
  active?: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'onSelect', id: string): void;
}>();

const elementId = getElementId();

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.checked;

  if (value) {
    emit('onSelect', props.id);
  }
};
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.product {
  @include transition(all);

  transition-property: opacity, border-color;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  border-radius: 0.75rem;

  padding: 0.375rem 0.75rem 0.625rem 0.75rem;

  border: 2px solid transparent;

  min-height: var(--tok-height-l);
  background: var(--tok-stinger);

  &_active {
    border-color: var(--tok-primary);
  }

  &:hover {
    opacity: var(--tok-hover-opacity);
  }
}

.native {
  @include clearinput;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
}

.title {
  font: var(--tok-font-l);
}

.discount {
  color: var(--tok-primary);
}

.money {
  color: var(--tok-primary);
}
</style>
