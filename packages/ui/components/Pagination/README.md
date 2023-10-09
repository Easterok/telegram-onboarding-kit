# Pagination

Pagination component enables the user to select a specific page from a range of pages

## Props

All available props see in [Pagination.props.ts](./Pagination.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=154-5776&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## Usage

```vue
<template>
  <pagination v-model="index" :length="5" />
</template>

<script setup lang="ts">
import { Pagination } from '@tok/ui/components/Pagination';
import { ref } from 'vue';

const index = ref(0);
</script>
```
