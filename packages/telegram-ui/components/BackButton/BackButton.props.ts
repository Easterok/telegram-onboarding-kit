import type { FlatButtonProps } from '@tok/ui/components/FlatButton';

export type BackButtonProps = {
  type?: 'telegram' | 'web';

  show?: boolean;

  appearance?: FlatButtonProps['appearance'];
};

export type BackButtonEmits = {
  (e: 'onClick'): void;
};

export const BackButtonDefaultProps = {
  type: 'telegram',
  appearance: 'ghost',
} as const;
