export type InputTextProps<T = string | null> = {
  modelValue: T;
  size?: 's' | 'm' | 'l';
  placeholder?: string;
  type?: string;
  autocomplete?: string;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  inputmode?:
    | 'text'
    | 'search'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined;
  hasCleaner?: boolean;
};

export type InputTextEmits = {
  (e: 'update:modelValue', value: string | null): void;
};

export const InputTextDefaultProps = {
  type: 'text',
  size: 'm',
  inputmode: 'text',
  hasCleaner: true,
  placeholder: '',
} as const;
