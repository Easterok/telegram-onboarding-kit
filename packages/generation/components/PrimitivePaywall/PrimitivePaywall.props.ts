import type { PrimitiveSlideProps } from '@tok/generation/components/PrimitiveSlide';
import type {
  _GenerationPrimitivePaywallConfig,
  _GenerationPrimitivePaywallProduct,
} from '@tok/generation/defineConfig';

export type PrimitivePaywallProps = Pick<PrimitiveSlideProps, 'active'> &
  _GenerationPrimitivePaywallConfig & {
    selectedProduct: _GenerationPrimitivePaywallProduct | null;
  };

export const PrimitivePaywallDefaultProps = {
  links: () => [],
  mainButtonText: 'Continue',
} as const;
