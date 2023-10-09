import { Currency } from './currency.enum';

type CurrencyAsString = keyof Record<Currency, string>;

export type CurrencyVariants = CurrencyAsString | Currency | string;
