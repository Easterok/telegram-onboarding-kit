<template>
  <label :for="elementId" :class="$style.product">
    <div :class="$style.title">
      <primitive-radio :value="active">
        <input
          :id="elementId"
          type="radio"
          name="product-item"
          :class="$style.native"
          :checked="active"
          :value="elementId"
          @change="onChange"
        />
      </primitive-radio>

      <money :value="price" />
    </div>

    <h4 v-html="title" />

    <p v-if="description" v-html="description" :class="$style.description" />

    <p v-if="bestText" v-html="bestText" :class="$style.best" />
  </label>
</template>

<script setup lang="ts">
import type { _GenerationPaywallRowProductConfig } from '@tok/generation/defineConfig';
import { Money } from '@tok/ui/components/Money';
import { PrimitiveRadio } from '@tok/ui/components/PrimitiveRadio';
import { getElementId } from '@tok/ui/utility/getElementId';

type Props = _GenerationPaywallRowProductConfig & {
  active: boolean;
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
  position: relative;
  display: block;

  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--tok-primary);
  height: 100%;

  cursor: pointer;
}

.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--tok-text-color-08);
  margin-bottom: 0.75rem;
  font: var(--tok-font-l);
}

.description {
  margin-top: 0.25rem;

  font: var(--tok-font-xs);
}

.best {
  margin-top: 0.75rem;

  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--tok-primary);
  color: var(--tok-primary-text);
  font: var(--tok-font-s);
  text-align: center;
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
</style>
