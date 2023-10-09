<template>
  <primitive-paywall v-bind="props" :selected-product="selectedProduct">
    <div :class="$style.content">
      <div v-if="product.media" :class="$style.media">
        <media-preset v-bind="product.media" />
      </div>

      <div :class="$style.container">
        <div :class="$style.title">
          <h4 v-html="selectedProduct.title" />

          <money :value="product.price" />
        </div>

        <p v-html="selectedProduct.description" :class="$style.description" />
      </div>
    </div>
  </primitive-paywall>
</template>

<script setup lang="ts">
import { MediaPreset } from '@tok/generation/components/Media';
import { PrimitivePaywall } from '@tok/generation/components/PrimitivePaywall';
import { useI18n } from '@tok/i18n';
import { Money } from '@tok/ui/components/Money';
import { computed, toRefs } from 'vue';

import {
  PaywallSinglePresetDefaultProps,
  PaywallSinglePresetProps,
} from './paywall_single.preset.props';

const props = withDefaults(
  defineProps<PaywallSinglePresetProps>(),
  PaywallSinglePresetDefaultProps
);

const { product } = toRefs(props);

const i18n = useI18n();

const selectedProduct = computed(() => {
  const value = product.value;

  return {
    ...value,
    title: value.title ? i18n.translate(value.title) : '',
    description: value.description ? i18n.translate(value.description) : '',
  };
});
</script>

<style lang="scss" module>
.content {
  display: flex;

  padding: 0.75rem;
  border-radius: 0.75rem;
  text-align: left;

  box-shadow: 0px 0.25rem 1.5rem 0px var(--tok-text-color-08);
}

.container {
  width: 100%;
}

.media {
  color: var(--tok-primary);

  margin-right: 0.75rem;
}

.title {
  display: flex;
  justify-content: space-between;

  padding-top: 0.5rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--tok-text-color-08);
  font: var(--tok-font-h4);
}

.description {
  font: var(--tok-font-xs);
}
</style>
