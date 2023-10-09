# BackButton

Wrapper around Telegram.BackButton with fallback to [FlatButton](../../../ui/components/FlatButton/README.md)

We can determine whether the `TelegramSdk.BackButton` is displayed using
the `TelegramSdk.BackButton.isVisible` property after calling the `TelegramSdk.BackButton.show()` method.
If the `BackButton` is not available, we will display the `FlatButton` as a fallback.
This can be useful during local development in a browser.

You can easily switch between the telegram and web view modes if you prefer not to use `Telegram.BackButton`.

By default, the type is set to 'telegram'

## Props

All available props see in [BackButton.props.ts](./BackButton.props.ts)

## Usage

```vue
<template>
  <back-button :show="isShown" @on-click="onClick" />
</template>

<script setup lang="ts">
import { BackButton } from '@tok/telegram-ui/components/BackButton';
import { ref } from 'vue';

const isShown = ref(true);

const onClick = () => {
  console.log('click!');
};
</script>
```

switch to FlatButton:

```vue
<template>
  <back-button type="web" :show="isShown" @on-click="onClick" />
</template>

<script setup lang="ts">
import { BackButton } from '@tok/telegram-ui/components/BackButton';
import { ref } from 'vue';

const isShown = ref(true);

const onClick = () => {
  console.log('click!');
};
</script>
```
