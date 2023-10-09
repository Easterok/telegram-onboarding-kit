# InputText

## Props

All available props see in [InputText.props.ts](./InputText.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=139-1041&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## i18n

The component natively supports [i18n](../../../i18n/README.md) for placeholder values.

You can provide a placeholder as a locale token, and it will be dynamically translated

## Usage

```vue
<template>
  <input-text v-model="value" />
</template>

<script setup lang="ts">
import { InputText } from '@tok/ui/components/InputText';
import { ref } from 'vue';

const value = ref(null);
</script>
```

### Sizes

```vue
<template>
  <input-text v-model="value" size="s" />
  <input-text v-model="value" size="m" />
  <input-text v-model="value" size="l" />
</template>

<script setup lang="ts">
import { InputText } from '@tok/ui/components/InputText';
import { ref } from 'vue';

const value = ref(null);
</script>
```

## Customization

### Size

```vue
<template>
  <input-text v-model="value" size="xxl" />
</template>

<script setup lang="ts">
import { InputText } from '@tok/ui/components/InputText';
import { ref } from 'vue';

const value = ref(null);
</script>

<style lang="scss" scoped>
.container {
  .tok-input {
    // custom xxl size
    &[data-size='xxl'] {
      height: 4.5rem;
    }
  }
}
</style>
```

### State

```vue
<template>
  <input-text v-model="value" invalid disabled />
</template>

<script setup lang="ts">
import { InputText } from '@tok/ui/components/InputText';
import { ref } from 'vue';

const value = ref(null);
</script>

<style lang="scss" scoped>
.container {
  .tok-input {
    &[data-state='focused'] {
        ...
    }

    &[data-state='invalid'] {
        ...
    }

    &[data-state='disabled'] {
        ...
    }
  }
}
</style>
```
