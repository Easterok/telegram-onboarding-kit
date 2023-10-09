# Popup

Optional built-in implementation of modals

> [!IMPORTANT]
> To make popups work, it is essential to wrap your entire application in the [Root](../Root/README.md) component

## Props

All available props see in [Popup.props.ts](./Popup.props.ts)

## i18n

The component natively supports [i18n](../../../i18n/README.md) for **title** and **message** prop.

You can provide a title and message with a locale tokens, and it will be dynamically translated

## Usage

```vue
<template>
  <popup v-model="opened" title="Hello!"> How are you? </popup>

  <flat-button @click="onToggle">Open popup</flat-button>
</template>

<script setup lang="ts">
import { Popup } from '@tok/ui/components/Popup';
import { FlatButton } from '@tok/ui/components/FlatButton';
import { ref } from 'vue';

const opened = ref(false);

const onToggle = () => {
  opened.value = !opened.value;
};
</script>
```
