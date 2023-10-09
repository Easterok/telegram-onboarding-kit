export type ToggleProps = {
  modelValue: boolean;

  id?: string;

  size?: 's' | 'm' | string;

  disabled?: boolean;
};

export type ToggleEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

export const ToggleDefaultProps = {
  size: 'm',
} as const;
