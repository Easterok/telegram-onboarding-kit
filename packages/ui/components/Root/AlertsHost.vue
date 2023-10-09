<template>
  <div id="tok-alerts-host">
    <div :class="`root root_${position}`">
      <transition-group
        tag="ul"
        class="container"
        enter-from-class="alert-enter-from"
        enter-active-class="alert-enter-active"
        leave-active-class="alert-leave-active"
        leave-to-class="alert-leave-to"
      >
        <alert
          v-for="item in alerts"
          :key="item.id"
          class="alert"
          :type="item.type"
          :content="item.content"
          :data="item.data"
          :closable="item.closable"
          @close="close(item.id, item.onClose)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@tok/ui/components/Alert';
import { ALERTS_HOST_TOKEN } from '@tok/ui/tokens';
import { computed, inject } from 'vue';

defineOptions({
  name: 'AlertsHost',
});

const instance = inject(ALERTS_HOST_TOKEN, null);
const position = 'top';

const alerts = computed(() => instance?.alerts.value || []);

const close = (id: string, onClose?: () => void) => {
  instance?.close(id);
  onClose?.();
};
</script>

<style lang="scss" scoped>
@import '@tok/ui/styles/local.scss';

.root {
  @include transition(transform);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;

  &_top {
    & > .container {
      margin-top: 0.75rem;
    }
  }
}

.alert {
  margin-bottom: 1em;
}

.container {
  position: relative;
  display: block;
  width: 100%;
  max-width: calc(100vw - 1.5rem);
  margin: 0 auto;

  & > * {
    pointer-events: auto;
  }
}

// animation
.alert-enter-active,
.alert-leave-active {
  @include transition(all);
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translate(0, -2rem);
}

.alert-enter-active {
  position: absolute;
}
</style>
