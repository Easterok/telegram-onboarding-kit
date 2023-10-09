# Toggle

Toggle is a switcher between two states

## Props

All available props see in [Toggle.props.ts](./Toggle.props.ts)

## Figma

[Component in figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit?type=design&node-id=154-5761&mode=design&t=4lD7Uxk1RttOTrGK-0)

## Usage

```vue
<template>
  <toggle v-model="value" />
</template>

<script setup lang="ts">
import { Toggle } from '@tok/ui/components/Toggle';
import { ref } from 'vue';

const value = ref(false);
</script>
```

### Sizes

```vue
<template>
  <toggle v-model="value" size="s" />
  <toggle v-model="value" size="m" />
</template>

<script setup lang="ts">
import { Toggle } from '@tok/ui/components/Toggle';
import { ref } from 'vue';

const value = ref(false);
</script>
```

## Customization

### Size

```vue
<template>
  <div class="container">
    <toggle v-model="value" size="l" />
  </div>
</template>

<script setup lang="ts">
import { Toggle } from '@tok/ui/components/Toggle';
import { ref } from 'vue';

const value = ref(false);
</script>

<style lang="scss" scoped>
.container {
  .tok-toggle {
    &[data-size='l'] {
      // We are utilizing font sizes to determine the width and height of the toggle
      font-size: 24px;
    }
  }
}
</style>
```

### Checked

```vue
<template>
  <div class="container">
    <toggle v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { Toggle } from '@tok/ui/components/Toggle';
import { ref } from 'vue';

const value = ref(true);
</script>

<style lang="scss" scoped>
.container {
  .tok-toggle {
    &[data-checked='true'] {
      background: red;
    }
  }
}
</style>
```

### State

```vue
<template>
  <div class="container">
    <toggle v-model="value" disabled />
  </div>
</template>

<script setup lang="ts">
import { Toggle } from '@tok/ui/components/Toggle';
import { ref } from 'vue';

const value = ref(true);
</script>

<style lang="scss" scoped>
.container {
  .tok-toggle {
    &[data-state='disabled'] {
      background: red;
    }
  }
}
</style>
```
