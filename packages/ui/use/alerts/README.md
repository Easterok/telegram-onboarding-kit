# @tok/ui useAlerts

useCase to show Web Alerts

> [!IMPORTANT]
> useAlerts won't work outside setup components

## Usage

### Simple

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';

const alertsService = useAlerts();

alertsService.show('Hello!');
</script>
```

### Error

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';

const alertsService = useAlerts();

alertsService.show('Error :(', {
  type: 'error',
});
</script>
```

### "Telegram Like"

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';

const alertsService = useAlerts();

alertsService.show('Error :(', {
  type: 'telegram',
});
</script>
```

### Available options

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';

const alertsService = useAlerts();

alertsService.show('Error :(', {
  // default: success
  // type?: 'success' | 'error' | 'telegram' | string;
  //
  // default: true
  // autoClose?: boolean | number;
  //
  // default: true
  // hasClose?: boolean;
  //
  // data?: T;
  //
  // onClose?: () => void;
});
</script>
```

### Use with component

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';
import AlertContent from './AlertContent.vue'

const alertsService = useAlerts();

alertsService.show(AlertContent, {
  data: {
    hello: 'hello!'
  },
  onClose: () => {
    alertsService.show('Closed!')
  };
});
</script>
```

```vue
<!-- AlertContent.vue -->
<template>
  <div>{{ context.data.hello }}</div>
  <button @click="context.close">Close alert</button>
</template>

<script setup lang="ts">
import { AlertContextProps } from '@tok/ui/components/Alert';

defineProps<
  AlertContextProps<{
    hello: string;
  }>
>();
</script>
```

## Other

```vue
<script setup lang="ts">
import { useAlerts } from '@tok/ui/use/alerts';

const alertsService = useAlerts();

const id = alertsService.show('Hello');
alertsService.close(id);

alertsService.show('Hello');
alertsService.closeLast();
</script>
```
