import type { _GenerationSlideConfig } from '@tok/generation/defineConfig';

export type PrimitiveSlideProps = Pick<
  _GenerationSlideConfig,
  'media' | 'textAlign' | 'shape' | 'background' | 'button' | 'extends'
> & {
  active?: boolean;
};

export type PrimitiveSlideEmits = {
  (e: 'onClick'): void;
};

export const PrimitiveSlideDefaultProps = {
  button: 'Next',
  textAlign: 'left',
  shape: 'square',
} as const;
