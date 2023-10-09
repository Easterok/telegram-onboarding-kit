# Link

## Props

All available props see in [Link.props.ts](./Link.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=154-5782&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## i18n

The component natively supports [i18n](../../../i18n/README.md) for text and href values.

You can provide a text and href as a locale token, and it will be dynamically translated

## Usage

```vue
<template>
  <Link text="google.com" href="https://google.com" target="_blank" />
</template>

<script setup lang="ts">
import { Link } from '@tok/ui/components/Link';
</script>
```
