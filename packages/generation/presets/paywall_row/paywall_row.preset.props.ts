import type { _GenerationPaywallRowConfig } from '@tok/generation/defineConfig';

export type PaywallRowPresetProps = Omit<
  _GenerationPaywallRowConfig,
  'extends'
>;

export const PaywallRowPresetDefaultProps = {
  products: () => [],
} as const;
