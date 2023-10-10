# @tok/ui

- [Components](./components/README.md)
- [Directives](./directives/README.md)
- [Dom](./dom/README.md)
- [Plugins](./plugins/README.md)
- [Styles](./styles/README.md)
- [Tokens](./tokens/README.md)
- [Types](./types/README.md)
- [Use](./use/README.md)
- [Utility](./utility/README.md)
- [Manual Installation Guide](#manual-installation-guide)

## Manual Installation Guide

Use this guide to manually install the UI package in your project.

1. Run the following command to add a link from your app to this package:

   ```bash
   npm install @tok/ui --workspace=<your workspace name>
   ```

2. Import our global styles in your `main.ts` file:

   ```ts
   // main.ts
   import '@tok/ui/styles/global.scss';

   import { createApp } from 'vue';
   import App from './App.vue';

   createApp(App).mount('#app');
   ```

3. If you want to use the built-in [Popups](./components/Popup/README.md) and [Alerts](./use/alerts/README.md), add the [Root](./components/Root/README.md) component to your `App.vue` file as shown below:

   ```vue
   <!-- App.vue -->
   <template>
     <root>
       <!-- other code like -->
       <!-- <router-view /> -->
     </root>
   </template>

   <script setup lang="ts">
   import { Root } from '@tok/ui/components/Root';
   </script>
   ```

4. Also for [Alerts](./use/alerts/README.md), you should add AlertsPlugin in your main.ts file:

   ```ts
   // main.ts
   import '@tok/ui/styles/global.scss';

   import { createApp } from 'vue';
   import App from './App.vue';
   import { AlertsPlugin } from '@tok/ui/plugins/alerts';

   createApp(App).use(AlertsPlugin).mount('#app');
   ```

   And use them as:

   ```vue
   <script setup lang="ts">
   import { useAlerts } from '@tok/ui/use/alerts';

   const alertsService = useAlerts();

   alertsService.show('Hello there!');
   </script>
   ```

5. If you want to use Currency, you can specify config for currency once:

   ```ts
   // main.ts
   import '@tok/ui/styles/global.scss';

   import { createApp } from 'vue';
   import App from './App.vue';
   import { CurrencyPlugin } from '@tok/ui/plugins/currency';

   const currencyOptions = {
    // currency symbol alignment
    // default: 'left'
    align?: 'left' | 'right';

    // currency symbol
    // default: 'USD'
    currency?: CurrencyVariants;

    // separator for decimal 1.00 or 1,00 as you wish
    // default '.'
    decimalSeparator?: string;

    // separator for thousand 1_000_000 or 1x000x000
    // default '&nbsp;'
    thousandSeparator?: string;
   };

   createApp(App).use(CurrencyPlugin, currencyOptions).mount('#app');
   ```

   Or you can specify currency config in place:

   ```vue
   <template>
     <money :value="10" />
   </template>

   <script setup lang="ts">
   import { Money } from '@tok/ui/components/Money';
   import { CURRENCY_OPTIONS_TOKEN } from '@tok/ui/tokens';
   import { provide } from 'vue';

   // same options as below
   provide(CURRENCY_OPTIONS_TOKEN, {});
   </script>
   ```

6. If you want to use our mixins, import them in your component:

   ```vue
   <template>
     <!-- ... -->
   </template>

   <script>
   <!-- ... -->
   </script>

   <style lang="scss">
   @import '@tok/ui/styles/local.scss';

   div {
     @import hidescroll;
     // ...
   }
   </style>
   ```

7. For localization use TokI18nPlugin from [i18n packages](../i18n/README.md)
