import { useI18n } from '@tok/i18n';
import {
  CURRENCY_OPTIONS_TOKEN,
  CurrencyOptions,
  defaultCurrencyOptions,
} from '@tok/ui/tokens';
import { resolveRef } from '@tok/ui/types';
import { computed, ComputedRef, inject, MaybeRefOrGetter } from 'vue';

import { CurrencyVariants } from './currency/currency';
import { formatMoney } from './formatMoney';

export function useMoney(
  value: MaybeRefOrGetter<number | string>
): ComputedRef<{
  formatted: string;
  value: number;
  options: Required<CurrencyOptions>;
}> {
  const options = inject(CURRENCY_OPTIONS_TOKEN, defaultCurrencyOptions);
  const valueRef = resolveRef(value);
  const toTranslateValue = computed(() => {
    const _value = valueRef.value;

    return typeof _value === 'string' ? _value : `${_value}`;
  });

  const i18n = useI18n();

  const translatedValue = i18n.useTranslated(toTranslateValue);
  const align = i18n.useTranslated(options.align);
  const currency = i18n.useTranslated<CurrencyVariants>(options.currency);
  const decimal = i18n.useTranslated(options.decimalSeparator);
  const thousand = i18n.useTranslated(options.thousandSeparator);

  return computed(() => {
    const _align = align.value;
    const _currency = currency.value;
    const _decimal = decimal.value;
    const _thousand = thousand.value;
    const _value = translatedValue.value;
    const clean = typeof _value === 'number' ? _value : Number(_value);

    const options: Required<CurrencyOptions> = {
      align: _align,
      currency: _currency,
      decimalSeparator: _decimal,
      thousandSeparator: _thousand,
    };

    return {
      formatted: formatMoney(clean, options),
      value: clean,
      options,
    };
  });
}
