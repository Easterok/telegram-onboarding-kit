import { CHAR_NO_BREAK_SPACE } from '@tok/ui/consts';
import type { CurrencyVariants } from '@tok/ui/use/money/currency';
import type { InjectionKey } from 'vue';

export type CurrencyOptions = {
  align?: 'left' | 'right' | string;
  currency?: CurrencyVariants;
  decimalSeparator?: string;
  thousandSeparator?: string;
};

export const defaultCurrencyOptions = {
  align: 'left',
  currency: 'USD',
  decimalSeparator: '.',
  thousandSeparator: CHAR_NO_BREAK_SPACE,
} as const;

export const CURRENCY_OPTIONS_TOKEN = Symbol() as InjectionKey<
  Required<CurrencyOptions>
>;
