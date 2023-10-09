# Root

This component uses the full power of Vue.Teleport, creating layers within the application for consistent rendering of [Alerts](../../use/alerts/README.md) and [Popups](../Popup/README.md)

## Props

All available props see in [Root.props.ts](./Root.props.ts)

## Usage

Wrap all content of your app with root component

```vue
<!-- App.vue -->
<template>
  <root>
    <!-- content of your app -->
    <router-view />
  </root>
</template>

<script setup lang="ts">
import { Root } from '@tok/ui/components/Root';
</script>
```

If you need, you can add something between portal layers:

```vue
<!-- App.vue -->
<template>
  <root>
    <!-- content of your app -->
    <router-view />

    <template #overContent>
      <!-- Content over app content -->
    </template>

    <template #overPopups>
      <!-- Content over popups -->
    </template>

    <template #overAlerts>
      <!-- Content over alerts -->
    </template>
  </root>
</template>

<script setup lang="ts">
import { Root } from '@tok/ui/components/Root';
</script>
```
