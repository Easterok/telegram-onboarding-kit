# @tok/i18n

A minimalistic package for handling localization in your applications

## Setup

```ts
// main.ts
import { TokI18nPlugin } from '@tok/i18n';
import { createApp } from 'vue';
import App from './App.vue';

const locales = {
    default: 'en',
    asyncLocales: {
      ch: import('./locale/ch.json')
    },
    messages: {
        en: {
            'hello': 'Hello!'
        }
    }
;}

createApp(App).use(TokI18nPlugin, locales).mount('#app');
```

## Usage

### useTranslated

This will track the value in the hello ref and always return the translated value if available.

```vue
<template>
  {{ translatedHello }}
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { ref } from 'vue';

const i18n = useI18n();

const hello = ref('hello');
const translatedHello = i18n.useTranslated(hello);
```

### Fallback value

If there is no token in the current or fallback locale, we will return the fallback value.

```ts
import { i18n } from '@tok/i18n';
import { ref } from 'vue';

const i18n = useI18n();

const unknown = ref('unknown');

const fallback = i18n.useTranslated(unknown, 'Value from fallback!');
```

### Inside computed

```ts
import { i18n } from '@tok/i18n';
import { computed } from 'vue';

const i18n = useI18n();

const insideComputed = computed(() => {
  const value = 'someKey';

  return i18n.translate(value);
});
```

### Change locale on the fly

To change the locale on the fly. Keep in mind that you will need to load messages manually.

```ts
import { i18n } from '@tok/i18n';

const i18n = useI18n();

i18n.locale.value = 'ch';
```

This is an example of how you can load such locales:

```ts
import { i18n } from '@tok/i18n';
import { watch } from 'vue';

const i18n = useI18n();

watch(
  i18n.locale,
  (locale) => {
    // It will return a Promise.reject if there are no loaders for this locale
    i18n.load(locale).then((messages) => {
      i18n.setMessages(locale, messages);
    });
  },
  { immediate: true }
);
```

### Other properties

```ts
import { i18n } from '@tok/i18n';

const i18n = useI18n();

// Get fallback locale. en by default
const fallback = i18n.fallbackLocale;

// Available locales: (en|ch|...)[]
const available = i18n.available;

// Get all messages config:
const messages = i18n.messages;
</script>
```
