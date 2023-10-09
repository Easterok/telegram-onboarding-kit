import type { _GenerationCarouselConfig } from '@tok/generation/defineConfig';

export type BasePressetProps = _GenerationCarouselConfig<any>;

export const BasePressetDefaultProps = {
  slides: () => [],
} as const;
