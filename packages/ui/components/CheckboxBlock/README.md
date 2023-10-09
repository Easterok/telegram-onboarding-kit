# CheckboxBlock

## Props

All available props see in [CheckboxBlock.props.ts](./CheckboxBlock.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=139-1045&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## i18n

The component natively supports [i18n](../../../i18n/README.md) for placeholder values.

You can provide a placeholder as a locale token, and it will be dynamically translated

## Usage

```vue
<template>
  <checkbox-block v-model="value" placeholder="Checkbox" />
</template>

<script setup lang="ts">
import { CheckboxBlock } from '@tok/ui/components/CheckboxBlock';
import { ref } from 'vue';

const value = ref(true);
</script>
```

## Customization

### Sizes

```vue
<template>
  <div class="container">
    <checkbox-block v-model="value" size="xxl" />
  </div>
</template>

<script setup lang="ts">
import { CheckboxBlock } from '@tok/ui/components/CheckboxBlock';
import { ref } from 'vue';

const value = ref(true);
</script>

<style lang="scss" scoped>
.container {
  .tok-checkboxblock {
    // custom xxl size
    &[data-size='xxl'] {
      ...
    }

    // customize check icon styles if you want
    &-check {
        ...
    }
  }
}
</style>
```

### State

```vue
<template>
  <div class="container">
    <checkbox-block v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { CheckboxBlock } from '@tok/ui/components/CheckboxBlock';
import { ref } from 'vue';

const value = ref(true);
</script>

<style lang="scss" scoped>
.container {
  .tok-checkboxblock {
    // when v-model is true
    &[data-state='checked'] {
        ...
    }

    // when invalid is true
    &[data-state='invalid'] {
        ...
    }

    // when disabled is true
    &[data-state='disabled'] {
        ...
    }
  }
}
</style>
```

### Shape

```vue
<template>
  <div class="container">
    <checkbox-block v-model="value" shape="custom" />
  </div>
</template>

<script setup lang="ts">
import { CheckboxBlock } from '@tok/ui/components/CheckboxBlock';
import { ref } from 'vue';

const value = ref(true);
</script>

<style lang="scss" scoped>
.container {
  .tok-checkboxblock {
    // custom shape
    &[data-shape='custom'] {
        ...
    }
  }
}
</style>
```
