import type { _GenerationPaywallConfig } from '@tok/generation/defineConfig';

export type PaywallPressetProps = Omit<_GenerationPaywallConfig, 'extends'>;

export const PaywallPressetDefaultProps = {
  products: () => [],
} as const;
