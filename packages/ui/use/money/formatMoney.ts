import { CHAR_NO_BREAK_SPACE } from '@tok/ui/consts';
import type { CurrencyOptions } from '@tok/ui/tokens';
import { formatNumber } from '@tok/ui/utility/formatNumber';

import { getCurrencySymbol } from './currency';

export const defaultFormatMoney = {
  align: 'left' as const,
  precision: 2,
  currency: 'USD',
  decimalSeparator: '.',
  thousandSeparator: CHAR_NO_BREAK_SPACE,
};

export function formatMoney(
  _value: number,
  options: Required<CurrencyOptions>
) {
  const formatted = formatNumber(
    _value,
    options.decimalSeparator,
    options.thousandSeparator
  );
  const currencySymbol = getCurrencySymbol(options.currency);
  const [prefix, postfix] =
    options.align === 'left' ? [currencySymbol, ''] : ['', currencySymbol];

  return `${prefix}${formatted}${postfix}`;
}
