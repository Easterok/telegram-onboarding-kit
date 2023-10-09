# SvgIcon

The component is designed for displaying your SVG icons

## Props

All available props see in [SvgIcon.props.ts](./SvgIcon.props.ts)

# Predefined icons

1. [arrow-left](./icons/arrow-left.svg)
2. [arrow-right](./icons/arrow-right.svg)
3. [checkmark-fill](./icons/checkmark-fill.svg)
4. [checkmark](./icons/checkmark.svg)
5. [close](./icons/close.svg)
6. [spinner](./icons/spinner.svg)
7. [warning-fill](./icons/warning-fill.svg)

# Usage

```vue
<template>
  <svg-icon name="arrow-right" />

  <svg-icon name="arrow-right" rotate />
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
</script>
```

### You can also override or define your icons

```vue
<template>
  <svg-icon name="arrow-right" />

  <svg-icon name="fancy-icon" />
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
import { CUSTOM_ICONS_TOKEN } from '@tok/ui/tokens';
import { defineAsyncComponent, provide } from 'vue';

const icons = {
  // defineAsyncComponent is important because we are using vite-svg-loader to render icons as component
  'arrow-right': defineAsyncComponent(() => import('./custom/arrow-right.svg')),
  'fancy-icon': defineAsyncComponent(() => import('./custom/fancy-icon.svg')),
};

provide(CUSTOM_ICONS_TOKEN, icons);
</script>
```

### Sizes

By default, the icon size is set to a width of 1.5em and a height of 1.5em.

You can customize this by passing a prop to the SvgIcon component, where the size is specified in pixels (px)

```vue
<template>
  <svg-icon name="arrow-right" :size="12" />

  <svg-icon name="arrow-right" :size="[12, 56]" />
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
</script>
```
