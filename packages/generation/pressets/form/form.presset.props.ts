import type { _GenerationFormConfig } from '@tok/generation/defineConfig';

export type FormPressetProps = Omit<_GenerationFormConfig, 'extends'>;

const defaultForm = [
  {
    id: 'id1',
    placeholder: 'placeholder for type: text',
    type: 'text' as const,
  },
];

export const FormPressetDefaultProps = {
  form: () => defaultForm,
} as const;
