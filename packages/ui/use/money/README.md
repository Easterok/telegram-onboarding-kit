# @tok/ui useMoney

Helper function for resolving currency configuration provided by [CurrencyOptions.token](../../tokens/README.md) and formatting money based on that configuration.

## i18n

`useMoney` natively supports [i18n](../../../i18n/README.md) all options and value inside it.

You can provide a locale token inside options with [CurrencyOptions.token](../../tokens/README.md) and value as string or number, and it will be dynamically translated

## Usage

```vue
<template>
  <span>{{ formatted }}</span>
  <span>{{ value }}</span>
  <span>{{ resolvedOptions }}</span>
</template>

<script setup lang="ts">
import { useMoney } from '@tok/ui/use/money';
import { computed, ref } from 'vue';

const valueRef = ref(20);
const _money = useMoney(20);
// or
const _money = useMoney(valueRef);

const formatted = computed(() => _money.value.formatted);
const value = computed(() => _money.value.value);
const resolvedOptions = computed(() => _money.value.options);
</script>
```
