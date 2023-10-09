# PrimitiveCheckbox

Static checkbox for usage outside forms as visual indicator without focusing and clicking

## Props

All available props see in [PrimitiveCheckbox.props.ts](./PrimitiveCheckbox.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=139-1043&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## Usage

```vue
<template>
  <primitive-checkbox :value="value">
    <input type="checkbox" :checked="value" @change="onChange" />
  </primitive-checkbox>
</template>

<script setup lang="ts">
import { PrimitiveCheckbox } from '@tok/ui/components/PrimitiveCheckbox';
import { ref } from 'vue';

const value = ref(false);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const _value = target.value;

  // manipulate with _value
};
</script>
```
