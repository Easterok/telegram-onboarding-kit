<template>
  <primitive-paywall v-bind="props" :selected-product="productToSend">
    <form :class="$style.form" :style="productWidthStyle" @submit.prevent>
      <div
        v-for="item in translatedProducts"
        :key="item.id"
        :class="$style.product"
      >
        <product
          v-bind="item"
          :active="activeId === item.id"
          @on-select="onProductSelect"
        />
      </div>
    </form>
  </primitive-paywall>
</template>

<script setup lang="ts">
import { PrimitivePaywall } from '@tok/generation/components/PrimitivePaywall';
import { useI18n } from '@tok/i18n';
import { computed, ref, toRefs } from 'vue';

import {
  PaywallRowPresetDefaultProps,
  PaywallRowPresetProps,
} from './paywall_row.preset.props';
import Product from './Product.vue';

const props = withDefaults(
  defineProps<PaywallRowPresetProps>(),
  PaywallRowPresetDefaultProps
);

const { products } = toRefs(props);

const i18n = useI18n();

const activeId = ref(products.value[0]?.id || null);

const translatedProducts = computed(() => {
  return products.value.map((item) => ({
    ...item,
    bestText: item.bestText && i18n.translate(item.bestText),
    title: item.title && i18n.translate(item.title),
    description: item.description && i18n.translate(item.description),
  }));
});

const productToSend = computed(() => {
  const active = activeId.value;

  return translatedProducts.value.find(({ id }) => id === active) || null;
});

const onProductSelect = (id: string) => {
  activeId.value = id;
};

const productWidthStyle = computed(() => {
  const length = products.value.length;

  if (length <= 3) {
    return {
      '--tok-product-width': `calc(100% / ${length})`,
    };
  }

  return {
    '--tok-product-width': `calc(100% / 2 - 10%)`,
  };
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.form {
  @include hidescroll;

  display: flex;
  overflow-x: auto;

  margin: 0 -0.3125rem;
}

.product {
  min-width: var(--tok-product-width);
  max-width: var(--tok-product-width);
  flex-basis: var(--tok-product-width);

  padding: 0 0.3125rem;
  box-sizing: border-box;
}
</style>
