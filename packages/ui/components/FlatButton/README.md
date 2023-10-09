# FlatButton

## Props

All available props see in [FlatButton.props.ts](./FlatButton.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=139-1039&mode=design&t=6yuiDJRdwfFJ7dVT-0)

## Usage

```vue
<template>
  <flat-button>Hello!</flat-button>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>
```

#### IconButton

```vue
<template>
  <flat-button icon-button icon="checkmark" />
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>
```

#### Square

```vue
<template>
  <flat-button icon-button shape="square" icon="checkmark" />
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>
```

#### Rounded

```vue
<template>
  <flat-button shape="rounded" icon="checkmark">Hello!</flat-button>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>
```

#### Loading

```vue
<template>
  <flat-button loading icon="checkmark">Hello!</flat-button>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>
```

## Customization

All properties can be customized using data-\* attributes within the style.

The examples below illustrate how you can achieve this

### Size

```vue
<template>
  <div class="container">
    <flat-button size="xxl">Hello!</flat-button>
  </div>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>

<style lang="scss" scoped>
.container {
  .tok-button {
    // custom xxl size
    &[data-size='xxl'] {
      height: 4.5rem;
      border-radius: 2rem;

      // gap between icon <> content <> iconRight
      gap: 1rem;
    }
  }
}
</style>
```

### Appearance

```vue
<template>
  <div class="container">
    <flat-button appearance="custom">Hello!</flat-button>
  </div>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>

<style lang="scss" scoped>
.container {
  .tok-button {
    &[data-appearance='custom'] {
      background: yellow;
      color: white;

      &:disabled {
        ...
      }

      &:hover {
        ...
      }
    }
  }
}
</style>
```

### Custom padding

```vue
<template>
  <div class="container">
    <flat-button>Hello!</flat-button>
  </div>
</template>

<script setup lang="ts">
import { FlatButton } from '@tok/ui/components/FlatButton';
</script>

<style lang="scss" scoped>
.container {
  .tok-button {
    --tok-padding: 1rem;

    &[data-size='xs'] {
      --tok-padding: 0rem;
    }

    &[data-size='s'] {
      --tok-padding: 1rem;
    }

    &[data-size='m'] {
      --tok-padding: 2rem;
    }

    &[data-size='l'] {
      --tok-padding: 3rem;
    }
  }
}
</style>
```
