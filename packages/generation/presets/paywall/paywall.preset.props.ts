import type { _GenerationPaywallConfig } from '@tok/generation/defineConfig';

export type PaywallPresetProps = Omit<_GenerationPaywallConfig, 'extends'>;

export const PaywallPresetDefaultProps = {
  products: () => [],
} as const;
