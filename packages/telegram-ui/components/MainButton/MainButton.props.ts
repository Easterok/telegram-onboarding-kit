import type { HapticFeedback } from '@twa-dev/types';

type HapticStyle = Parameters<HapticFeedback['impactOccurred']>[0];

export type MainButtonProps = {
  text: string;

  disabled?: boolean;

  progress?: boolean;

  color?: string;

  textColor?: string;

  keepAlive?: boolean;

  haptic?: HapticStyle;
};

export type MainButtonEmits = {
  (e: 'onClick'): void;
};
