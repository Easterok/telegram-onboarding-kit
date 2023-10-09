<template>
  <a
    v-html="translatedText"
    :class="$style.link"
    :href="translatedHref"
    :target="target"
  />
</template>

<script setup lang="ts">
import { useI18n } from '@tok/i18n';
import { toRefs } from 'vue';

import { LinkDefaultProps, LinkProps } from './Link.props';

const props = withDefaults(defineProps<LinkProps>(), LinkDefaultProps);

const { text, href } = toRefs(props);

const i18n = useI18n();

const translatedText = i18n.useTranslated(text);
const translatedHref = i18n.useTranslated(href);
</script>

<style lang="scss" module>
.link {
  font: var(--tok-font-s);
}
</style>
