<template>
  <span>{{ formatted }}</span>
</template>

<script setup lang="ts">
import { useMoney } from '@tok/ui/use/money';
import { computed, toRefs } from 'vue';

import { MoneyProps } from './Money.props';

const props = defineProps<MoneyProps>();

const { value } = toRefs(props);

const _money = useMoney(value);

const formatted = computed(() => _money.value.formatted);
</script>
