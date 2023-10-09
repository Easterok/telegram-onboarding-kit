# @tok/ui useFocused

useCase to detect focus on element

> Used in:
> [InputText](../../components/InputText/README.md)

## Usage

```vue
<template>
  <p>{{ focused }}</p>

  <div ref="divRef">
    <input />

    <button>Button</button>
  </div>
</template>

<script setup lang="ts">
import { useFocused } from '@tok/ui/use/focused';
import { ref } from 'vue';

const divRef = ref<HTMLElement | null>(null);

const focused = useFocused(divRef);
</script>
```
