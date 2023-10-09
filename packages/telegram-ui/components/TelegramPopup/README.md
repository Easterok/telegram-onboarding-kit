# TelegramPopup

Wrapper around Telegram.showPopup with fallback to [Popup](../../../ui/components/Popup/README.md)

We can determine whether the `TelegramPopup` is displayed using this following code:

```ts
try {
  Telegram.showPopup();
} catch (e) {
  // do other stuff
}
```

If the `showPopup` is not available, we will display the `Popup` as a fallback.

If you want to use only [Popup](../../../ui/components/Popup/README.md) consider using it directly instead of this.

This can be useful during local development in a browser.

You can easily switch between the telegram and web view modes if you prefer not to use `Telegram.showPopup` method

By default, component will always try to open `TelegramPopup`

## Props

All available props see in [TelegramPopup.props.ts](./TelegramPopup.props.ts)

## Usage

```vue
<template>
  <telegram-popup
    v-model="opened"
    title="Popup!"
    :buttons="buttons"
    @on-select="onSelect"
  />
</template>

<script setup lang="ts">
import { TelegramPopup } from '@tok/telegram-ui/components/TelegramPopup';
import { ref } from 'vue';

const opened = ref(true);

const buttons = [
  {
    id: 'click',
    text: 'Click me',
    type: 'default',
  },
];

const onSelect = (id: string | undefined) => {
  if (id) {
    console.log('Button selected');
  } else {
    console.log('');
  }
};
</script>
```

Same api, only difference is `type="web"`

```vue
<template>
  <telegram-popup
    v-model="opened"
    title="Popup!"
    type="web"
    :buttons="buttons"
    @on-select="onSelect"
  />
</template>

<script setup lang="ts">
import { TelegramPopup } from '@tok/telegram-ui/components/TelegramPopup';
import { ref } from 'vue';

const opened = ref(true);

const buttons = [
  {
    id: 'click',
    text: 'Click me',
    type: 'default',
  },
];

const onSelect = (id: string | undefined) => {
  if (id) {
    console.log('Button selected');
  } else {
    console.log('');
  }
};
</script>
```
