import type { _GenerationFormConfig } from '@tok/generation/defineConfig';

export type FormPresetProps = Omit<_GenerationFormConfig, 'extends'>;

const defaultForm = [
  {
    id: 'id1',
    placeholder: 'placeholder for type: text',
    type: 'text' as const,
  },
];

export const FormPresetDefaultProps = {
  form: () => defaultForm,
} as const;
