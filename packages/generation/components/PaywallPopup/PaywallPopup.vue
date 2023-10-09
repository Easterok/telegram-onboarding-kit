<template>
  <telegram-popup
    :type="type"
    :model-value="opened"
    :title="translatedTitle"
    :message="translatedMessage"
    :buttons="(translatedButtons as any)"
    @onSelect="onSelectOption"
    @update:model-value="onUpdate"
  >
    <template #button-icon="{ item }">
      <media-preset
        v-if="'media' in item"
        v-bind="item.media"
        :class="$style.media"
        static
      />
    </template>
  </telegram-popup>
</template>

<script setup lang="ts">
import { MediaPreset } from '@tok/generation/components/Media';
import { useI18n } from '@tok/i18n';
import { TelegramPopup } from '@tok/telegram-ui/components/TelegramPopup';
import { computed, toRefs } from 'vue';

import {
  PaywallPopupDefaultProps,
  PaywallPopupEmits,
  PaywallPopupProps,
} from './PaywallPopup.props';

const props = withDefaults(
  defineProps<PaywallPopupProps>(),
  PaywallPopupDefaultProps
);

const emit = defineEmits<PaywallPopupEmits>();

const { title, message, buttons } = toRefs(props);

const i18n = useI18n();

const translatedTitle = i18n.useTranslated(title);
const translatedMessage = i18n.useTranslated(message);

const translatedButtons = computed(() => {
  return buttons.value.map((button) => ({
    ...button,
    text: 'text' in button ? i18n.translate(button.text) : undefined,
  }));
});

const onUpdate = (value: boolean) => {
  emit('update:opened', value);
};

const onSelectOption = (value: string | undefined) => {
  emit('onSelect', value);
};
</script>

<style lang="scss" module>
.media {
  color: var(--tok-background-color);

  margin-right: 0.75rem;
}
</style>
