<template>
  <div class="tok-alert" :data-type="type">
    <svg-icon v-if="iconName" class="tok-alert-icon" :name="iconName" />

    <span v-if="typeof content === 'string'" class="tok-alert-text">
      {{ content }}
    </span>

    <component v-else :is="content" :context="context" />

    <button
      v-if="closable"
      aria-label="close alert"
      title="close alert"
      class="tok-alert-close"
      @click="onClose"
    >
      <svg-icon name="close" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { SvgIcon } from '@tok/ui/components/SvgIcon';
import { computed, toRefs } from 'vue';

import {
  AlertDefaultProps,
  AlertEmits,
  AlertProps,
  AlertSlots,
} from './Alert.props';

defineOptions({
  name: 'Alert',
});

const props = withDefaults(defineProps<AlertProps>(), AlertDefaultProps);

const emit = defineEmits<AlertEmits>();

defineSlots<AlertSlots>();

const { type } = toRefs(props);

const iconName = computed(() => {
  const value = type.value;

  return value === 'success'
    ? 'checkmark-fill'
    : value === 'error'
    ? 'warning-fill'
    : null;
});

const onClose = () => {
  emit('close');
};

const context = {
  data: props.data,
  close: onClose,
};
</script>

<style lang="scss" scoped>
@import '@tok/ui/styles/local.scss';

.tok-alert {
  position: relative;

  display: inline-flex;
  align-items: center;

  width: 100%;

  padding: 1rem 2rem;
  padding-left: 1rem;
  border-radius: 0.75rem;
  color: var(--tok-alert-color);
  background: var(--tok-alert-background);

  &[data-type='success'] {
    color: var(--tok-text-color);
    background: linear-gradient(var(--tok-success-bg), var(--tok-success-bg)),
      var(--tok-background-color);
  }

  &[data-type='error'] {
    color: var(--tok-text-color);
    background: linear-gradient(var(--tok-error-bg), var(--tok-error-bg)),
      var(--tok-background-color);
  }

  &[data-type='telegram'] {
    color: var(--tok-text-color);
    background: var(--tok-stinger);
  }
}

.tok-alert-icon {
  align-self: flex-start;

  color: var(--tok-alert-icon-color);
  margin-right: 0.5em;

  .tok-alert[data-type='success'] & {
    color: var(--tok-success-fill);
  }

  .tok-alert[data-type='error'] & {
    color: var(--tok-error-fill);
  }
}

.tok-alert-close {
  @include clearbutton;
  @include size(2rem, 2rem);
  @include transition(color);

  position: absolute;
  right: 0;
  top: 0;

  padding: 0.25rem;
  border-radius: 0.75rem;

  cursor: pointer;

  color: var(--tok-text-color-32);

  &:hover {
    opacity: 0.8;
  }
}

.tok-alert-text {
  font: var(--tok-font-m);
  word-wrap: break-word;
  white-space: pre-line;
}
</style>
