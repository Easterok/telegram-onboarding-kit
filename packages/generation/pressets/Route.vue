<template>
  <draw-presset v-bind="config" :extends="String(config.extends || 'base')" />
</template>

<script setup lang="ts">
import { DrawPresset } from '@tok/generation/components/DrawPresset';
import { BootstrapConfig } from '@tok/generation/defineConfig';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const config = computed(() => {
  const value = router.currentRoute.value;

  return value.meta.config as BootstrapConfig<any>['pages'][number];
});
</script>
