# Sticker

Using [Lottie-web](https://github.com/airbnb/lottie-web) inside

This component can render a `Lottie animation` using `Lottie JSON`. For rendering stickers, we unzip `.tgs` files, which are essentially `Lottie JSON`, on the fly and place this JSON inside the component.

> [!IMPORTANT]
>
> [Lottie-web](https://github.com/airbnb/lottie-web) is a heavy library that can significantly increase your application bundle size. See examples on how to load this component asynchronously

We have created a small [Vite plugin](../../../../app/_internal/tgs.loader.ts) that can unpack your `.tgs` stickers into `JSON format` with helps of [pako package](https://www.npmjs.com/package/pako/v/1.0.11) (version `1.0.11` is important in this case). It unpacks them during the build process, so it doesn't affect the runtime of your application

> [!NOTE]
>
> This is not the best solution because `.json` files are much larger than `.tgs` files. We will provide a better solution for rendering your stickers in the future.
> We are open to your suggestions on how to implement this component, so feel free to open pull requests

## Props

All available props see in [Sticker.props.ts](./Sticker.props.ts)

## Usage

```vue
<template>
  <component :is="Sticker" :json="fish" />
</template>

<script setup lang="ts">
// Bad
// import { Sticker } from '@tok/telegram-ui/components/Sticker';

// Keep in mind that this file will be unzipped.
// It may have a large bundle size,
// so you should consider loading it asynchronously as well
import fish from '@/assets/fish.tgs';

// Good
const Sticker = defineAsyncComponent(() =>
  import('@tok/telegram-ui/components/Sticker').then((m) => m.Sticker)
);
</script>
```

```vue
<template>
  <component
    :is="Sticker"
    :speed="2"
    :loop="false"
    :autoplay="false"
    :json="fish"
  />
</template>

<script setup lang="ts">
import fish from '@/assets/fish.tgs';

const Sticker = defineAsyncComponent(() =>
  import('@tok/telegram-ui/components/Sticker').then((m) => m.Sticker)
);
</script>
```
