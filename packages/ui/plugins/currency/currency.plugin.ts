import {
  CURRENCY_OPTIONS_TOKEN,
  CurrencyOptions,
  defaultCurrencyOptions,
} from '@tok/ui/tokens';
import { Plugin } from 'vue';

export const CurrencyPlugin: Plugin<CurrencyOptions> = {
  install(app, options: CurrencyOptions) {
    app.provide(CURRENCY_OPTIONS_TOKEN, {
      ...defaultCurrencyOptions,
      ...options,
    });
  },
};
