# @tok/ui plugins

# 1. [Alerts](./alerts/Alerts.plugin.ts)

Required plugin to enable [useAlerts](../use/alerts/README.md) functionality

## Usage

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { AlertsPlugin } from '@tok/ui/plugins/alerts';

createApp(App).use(AlertsPlugin).mount('#app');
```

# 2. [Currency](./currency/currency.plugin.ts)

Allows you to globally configure options for [Money component](../components/Money/README.md)

## Usage

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { CurrencyPlugin } from '@tok/ui/plugins/currency';

const currencyOptions = {
// currency symbol alignment
// default: 'left'
align?: 'left' | 'right';

// currency symbol
// default: 'USD'
currency?: CurrencyVariants;

// separator for decimal 1.00 or 1,00 as you wish
// default '.'
decimalSeparator?: string;

// separator for thousand 1_000_000 or 1x000x000
// default '&nbsp;'
thousandSeparator?: string;
};

createApp(App).use(CurrencyPlugin, currencyOptions).mount('#app');
```
