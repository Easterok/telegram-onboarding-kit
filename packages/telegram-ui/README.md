# @tok/telegram-ui

This package offers a convenient wrapper around the [@twa-dev/sdk](https://github.com/twa-dev/SDK), providing Vue-like components and use-case solutions for Popups, MainButton, BackButton, and Theme integration.

## Components

1. [BackButton](./components/BackButton/README.md)
2. [MainButton](./components/MainButton/README.md)
3. [Sticker](./components/Sticker/README.md)
4. [TelegramPopup](./components/TelegramPopup/README.md)

# Use

## [useTelegramSdk](./use/sdk/index.ts)

Returns whole instance of [@twa-dev/sdk](https://github.com/twa-dev/SDK)

### Usage

```vue
<script setup lang="ts">
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';

const sdk = useTelegramSdk();

sdk.HapticFeedback.impactOccurred('light');
// ... and so on
</script>
```

## [useTheme](./use/theme/index.ts)

useTheme will track colorScheme from Telegram sdk in reactive way

### Usage

```vue
<script setup lang="ts">
import { useTheme } from '@tok/telegram-ui/use/theme';
import { watch } from 'vue';

const theme = useTheme();

watch(
  theme,
  (value) => {
    console.log(value);
  },
  { immediate: true }
);
</script>
```
