import type { _GenerationPaywallSingleConfig } from '@tok/generation/defineConfig';

export type PaywallSinglePresetProps = Omit<
  _GenerationPaywallSingleConfig,
  'extends'
>;

const defaultProduct = {
  id: 'id1',
  title: 'Product Title',
  price: 99.99,
  description: 'Product description',
};

export const PaywallSinglePresetDefaultProps = {
  product: () => defaultProduct,
} as const;
