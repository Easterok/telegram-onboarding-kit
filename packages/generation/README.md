# @tok/generation

The primary package for generating projects via a configuration file. It offers presets that can be easily extended within the configuration file.

1. [Components](./components/README.md)
2. [Presets](./presets/README.md)
3. [Plugins](./plugins/README.md)
4. [Tokens](./tokens/README.md)
5. [Use](./use/README.md)
6. [Bootstrap](#bootstrapts)
7. [DefineConfig](#defineconfigts)
8. [Root](#rootvue)

## [bootstrap.ts](./bootstrap.ts)

The main generation function. It will create all the necessary parameters, plugins, routes, and mount the app

It is responsible for:

1. Importing [global styles](../ui/styles/README.md) from [@tok/ui](../ui/README.md).
2. Mounting [AlertsPlugin](../ui/plugins/README.md) from [@tok/ui](../ui/README.md).
3. Mounting [CurrencyPlugin](../ui/plugins/README.md) from [@tok/ui](../ui/README.md).
4. Mounting [TokI18nPlugin](../i18n/plugins/index.ts) from [@tok/i18n](../i18n/README.md).
5. Handling router errors to reload your app after a new release of the onboarding.
6. Ensuring that users stay within defined routes if they attempt to navigate to an unknown route.

## [defineConfig.ts](./defineConfig.ts)

A helper function solely intended to provide TypeScript definitions for your config, without containing any logic (for now)

## [Root.vue](./Root.vue)

The primary component in the generation process.
It is responsible for:

1. Automatically resolving the theme from Telegram.
2. Handling BackButton navigation.
3. Listening for the first interaction on the page to trigger the start of a video if necessary.
4. Defining supported localizations.
5. Notifying Telegram when the app is ready to use (after localization is loaded).
6. Ensuring the app is always expanded upon loading.
7. Wraping your entire app with [Root](../ui/components/Root/README.md) component from [@tok/ui](../ui/README.md)
