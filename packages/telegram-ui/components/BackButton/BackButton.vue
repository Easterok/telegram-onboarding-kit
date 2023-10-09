<template>
  <flat-button
    v-if="showWebButton"
    size="s"
    icon="arrow-left"
    :appearance="appearance"
    :class="$style.button"
    :icon-size="16"
    @click="onClick"
  >
    <slot>Back</slot>
  </flat-button>
</template>

<script setup lang="ts">
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { FlatButton } from '@tok/ui/components/FlatButton';
import { computed, ref, toRefs, watch } from 'vue';

import {
  BackButtonDefaultProps,
  BackButtonEmits,
  BackButtonProps,
} from './BackButton.props';

const props = withDefaults(
  defineProps<BackButtonProps>(),
  BackButtonDefaultProps
);

const emit = defineEmits<BackButtonEmits>();

const { show, type } = toRefs(props);

const sdk = useTelegramSdk();

const tgBackButton = sdk.BackButton;
const trigger = ref(NaN);

const showWebButton = computed(() => {
  if (!show.value) {
    return false;
  }

  trigger.value;

  return type.value === 'web' || !tgBackButton.isVisible;
});

const onClick = () => {
  emit('onClick');
};

watch(
  [show, type],
  ([_show, _type], [_, prevType], onCleanup) => {
    onCleanup(() => {
      tgBackButton.offClick(onClick);
    });

    if (prevType === 'telegram' && prevType !== _type) {
      tgBackButton.hide();
    }

    if (_type !== 'telegram') {
      return;
    }

    if (_show) {
      tgBackButton.show();
      tgBackButton.onClick(onClick);
    } else {
      tgBackButton.hide();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.button {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
