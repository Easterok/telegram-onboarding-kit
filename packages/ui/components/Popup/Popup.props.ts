export type PopupProps = {
  modelValue: boolean;

  title: string;

  message?: string;
};

export type PopupEmits = {
  (event: 'update:modelValue', value: boolean): void;
};

export const PopupDefaultProps = {
  modelValue: false,
  title: '',
  message: '',
} as const;
