import type { _GenerationPaywallRowConfig } from '@tok/generation/defineConfig';

export type PaywallRowPressetProps = Omit<
  _GenerationPaywallRowConfig,
  'extends'
>;

export const PaywallRowPressetDefaultProps = {
  products: () => [],
} as const;
