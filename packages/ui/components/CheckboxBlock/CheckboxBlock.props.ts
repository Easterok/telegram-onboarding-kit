export type CheckboxBlockProps = {
  modelValue: boolean | null;

  placeholder?: string;

  size?: 's' | 'm' | 'l' | string;

  shape?: 'rounded' | string;

  disabled?: boolean;

  invalid?: boolean;
};

export type CheckboxBlockEmits = {
  (e: 'update:modelValue', v: boolean): void;
};

export const CheckboxBlockDefaultProps = {
  placeholder: '',
  size: 'm',
} as const;
