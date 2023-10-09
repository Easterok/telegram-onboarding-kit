import type { PrimitiveSlideProps } from '@tok/generation/components/PrimitiveSlide';
import type { _GenerationSlideConfig } from '@tok/generation/defineConfig';

export type SlidePresetProps = PrimitiveSlideProps &
  Pick<_GenerationSlideConfig, 'title' | 'description' | 'pagination' | 'list'>;

export const defaultSlideListMedia = {
  type: 'icon' as const,
  src: 'checkmark-fill',
} as const;

export const SlidePresetDefaultProps = {
  title: 'Title',
  description: '',
  list: () => [],
} as const;
