# Money

Money transforms and shows money sum. There are some ways to show currency symbol and various decimal settings

## Props

All available props see in [Money.props.ts](./Money.props.ts)

## i18n

The component natively supports [i18n](../../../i18n/README.md) for currency config and value prop.

You can provide a currency config and value with a locale tokens, and it will be dynamically translated

## Usage

```vue
<template>
  <money :value="10" />
</template>

<script setup lang="ts">
import { Money } from '@tok/ui/components/Money';
import { CURRENCY_OPTIONS_TOKEN } from '@tok/ui/tokens';
import { provide } from 'vue';

const options = {
  align: 'right',
  currency: 'USD',
  decimalSeparator: '.',
  thousandSeparator: ' ',
};

provide(CURRENCY_OPTIONS_TOKEN, options);
</script>
```

### i18n

```vue
<template>
  <money :value="value" />
</template>

<script setup lang="ts">
import { Money } from '@tok/ui/components/Money';
import { CURRENCY_OPTIONS_TOKEN } from '@tok/ui/tokens';
import { provide } from 'vue';

// Don't forget to add the i18n plugin from the @tok/i18n package
// to ensure the correct display
const options = {
  align: '_currency.align',
  currency: '_currency.symbol',
  decimalSeparator: '_currency.decimal',
  thousandSeparator: '_currency.thousand',
};

const value = '_currency.value';

provide(CURRENCY_OPTIONS_TOKEN, options);
</script>
```
