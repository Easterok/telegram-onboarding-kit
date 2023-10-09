import type { _GenerationCarouselConfig } from '@tok/generation/defineConfig';

export type BasePresetProps = _GenerationCarouselConfig<any>;

export const BasePresetDefaultProps = {
  slides: () => [],
} as const;
