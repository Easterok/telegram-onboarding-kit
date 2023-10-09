<template>
  <Image v-if="type === 'image'" v-bind="(props as any)" />
  <Sticker v-else-if="type === 'sticker'" v-bind="(props as any)" />
  <Icon v-else-if="type === 'icon'" v-bind="(props as any)" />
  <Video v-else-if="type === 'video'" v-bind="(props as any)" />
  <Emodji v-else-if="type === 'emodji'" v-bind="(props as any)" />
</template>

<script setup lang="ts">
import Emodji from './Emodji.vue';
import Icon from './Icon.vue';
import Image from './Image.vue';
import { MediaPresetProps } from './Media.preset.props';
import Sticker from './Sticker.vue';
import Video from './VideoPreset.vue';

const props = defineProps<MediaPresetProps>();
</script>
