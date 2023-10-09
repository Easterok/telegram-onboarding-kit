import { PopupButton } from '@twa-dev/types';

export type TelegramPopupProps<T extends PopupButton> = {
  type?: 'web' | 'telegram';
  modelValue: boolean;
  title: string;
  message?: string;
  buttons: T[];
};

export type TelegramPopupEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'onSelect', value: string | undefined): void;
};

export type TelegramPopupSlots<T> = {
  'button-icon'?: (props: { item: T }) => void;
};

const buttons: PopupButton[] = [];

export const TelegramPopupDefaultProps = {
  title: '',
  message: '',
  type: 'telegram',
  buttons: () => buttons,
} as const;
