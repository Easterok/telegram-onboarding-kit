<template>
  <li :class="$style.li">
    <media-preset v-if="media" v-bind="media" static :class="$style.media" />

    <span v-html="translatedText" />
  </li>
</template>

<script setup lang="ts">
import { MediaPreset } from '@tok/generation/components/Media';
import { useI18n } from '@tok/i18n';
import { toRefs } from 'vue';

import { ListItemDefaultProps, ListItemProps } from './ListItem.props';

const props = withDefaults(defineProps<ListItemProps>(), ListItemDefaultProps);

const { text } = toRefs(props);

const i18n = useI18n();

const translatedText = i18n.useTranslated(text);
</script>

<style lang="scss" module>
.li {
  display: flex;
  text-align: left;
  align-items: center;
}

.media {
  align-self: flex-start;

  margin-right: 0.75rem;
  color: var(--tok-primary);
}
</style>
