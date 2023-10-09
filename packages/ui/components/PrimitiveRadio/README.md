# PrimitiveRadio

Static radio for usage outside forms as visual indicator without focusing and clicking

## Props

All available props see in [PrimitiveRadio.props.ts](./PrimitiveRadio.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=139-1044&mode=design&t=4lD7Uxk1RttOTrGK-0)

## Usage

```vue
<template>
  <primitive-radio :value="value">
    <input type="radio" :checked="value" @change="onChange" />
  </primitive-radio>
</template>

<script setup lang="ts">
import { PrimitiveRadio } from '@tok/ui/components/PrimitiveRadio';
import { ref } from 'vue';

const value = ref(false);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const _value = target.value;

  // manipulate with _value
};
</script>
```
