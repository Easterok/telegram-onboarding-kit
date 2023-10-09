# @tok/telegram-ui MainButton

Wrapper around Telegram.MainButton

Unfortunately, we couldn't find a way to dynamically determine whether the `Telegram.MainButton` is displayed, so there is no fallback to [FlatButton](../../../ui/components/FlatButton/README.md) in this component, which would be useful during local development

## Props

All available props see in [MainButton.props.ts](./MainButton.props.ts)

The props mirror the props from `Telegram.MainButton` with some ours

## Usage

```vue
<template>
  <main-button v-if="isShown" @on-click="onClick" />
</template>

<script setup lang="ts">
import { MainButton } from '@tok/telegram-ui/components/MainButton';
import { ref } from 'vue';

const isShown = ref(true);

const onClick = () => {
  console.log('click!');
};
</script>
```

### Haptic Feedback

```vue
<template>
  <main-button v-if="isShown" haptic="light" @on-click="onClick" />
</template>

<script setup lang="ts">
import { MainButton } from '@tok/telegram-ui/components/MainButton';
import { ref } from 'vue';

const isShown = ref(true);

const onClick = () => {
  console.log('click!');
};
</script>
```

### KeepAlive

By default, `MainButton` attempts to hide itself when `onBeforeUnmount` occurs. You can disable this behavior with the `keepAlive` prop.

```vue
<template>
  <main-button v-if="isShown" keep-alive haptic="light" @on-click="onClick" />
</template>

<script setup lang="ts">
import { MainButton } from '@tok/telegram-ui/components/MainButton';
import { ref } from 'vue';

const isShown = ref(true);

const onClick = () => {
  console.log('click!');
};
</script>
```
