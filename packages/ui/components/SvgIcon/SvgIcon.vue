<template>
  <span :class="[$style.icon, rotate && $style.icon_rotate]" :style="style">
    <slot>
      <component
        :is="icon"
        tabindex="-1"
        focusable="false"
        aria-hidden="true"
        width="100%"
        height="100%"
      />
    </slot>
  </span>
</template>

<script setup lang="ts">
import { CUSTOM_ICONS_TOKEN } from '@tok/ui/tokens';
import { computed, defineAsyncComponent, inject, toRefs } from 'vue';

import { SvgIconProps } from './SvgIcon.props';

const props = defineProps<SvgIconProps>();

const { name, size } = toRefs(props);

const customIcons = inject(CUSTOM_ICONS_TOKEN, {});

const icon = computed(() => {
  const value = name.value;

  if (!value) {
    return;
  }

  const custom = customIcons[value];

  return custom ?? defineAsyncComponent(() => import(`./icons/${value}.svg`));
});

const px = (value: number): string => {
  return `${value}px`;
};

const style = computed(() => {
  const value = size?.value;

  const [width, height] = !value
    ? ['1.5em', '1.5em']
    : typeof value === 'number'
    ? [px(value), px(value)]
    : [px(value[0]), px(value[1])];

  return {
    '--tok-svg-icon-width': width,
    '--tok-svg-icon-height': height,
  };
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.icon {
  @include size(
    var(--tok-svg-icon-width, 1rem),
    var(--tok-svg-icon-height, 1rem)
  );
  @include transition(transform);

  display: inline-flex;
  align-items: center;

  &_rotate {
    transform: rotate(180deg);
  }
}
</style>
