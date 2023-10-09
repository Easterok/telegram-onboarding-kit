<template>
  <div
    id="tok-popups-host"
    :class="[$style.host, isShown && $style.host_overlay]"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const openedPopups = ref<string[]>([]);

const isShown = computed(() => {
  return openedPopups.value.length > 0;
});

const setOpened = (id: string, opened: boolean) => {
  if (opened) {
    add(id);
  } else {
    remove(id);
  }
};

const add = (id: string) => {
  const value = openedPopups.value;

  openedPopups.value = [...value, id];
};

const remove = (id: string) => {
  const value = openedPopups.value;

  openedPopups.value = value.filter((item) => item !== id);
};

defineExpose({
  isShown,
  setOpened,
  remove,
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.host {
  position: fixed;
  left: 0;
  bottom: 0;

  & > section:last-of-type {
    z-index: 1;
  }

  &_overlay {
    &:before {
      @include transition(opacity);

      content: '';
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background-color: var(--tok-dark-80);
      overflow: auto;
      overflow: overlay;

      pointer-events: none;
      touch-action: none;

      animation: tokPopupOverlay 0.2s ease-in-out;
    }
  }
}

@keyframes tokPopupOverlay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
