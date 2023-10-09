export type PaginationProps = {
  // Active page index
  modelValue: number;

  // Total pages count
  length: number;
};

export type PaginationEmits = {
  (e: 'update:modelValue', value: number): void;
};
