import { MaybeComputedRef, resolveRef } from '@tok/ui/types';
import { computed, ref, watch } from 'vue';

import { _MediaLoader } from './Media.preset.props';

export function useLoadedImage(
  src: MaybeComputedRef<_MediaLoader<any> | string | undefined> = ''
) {
  const srcRef = resolveRef(src);

  const onlySrcLoader = computed(() => {
    const value = srcRef.value;

    return value && typeof value === 'object' && 'then' in value ? value : null;
  });

  const loadedImage = ref<string | undefined>();

  const loadImage = (value: _MediaLoader<any>) => {
    value.then((m) => {
      loadedImage.value = m.default;
    });
  };

  watch(
    onlySrcLoader,
    (value) => {
      if (value) {
        loadImage(value);
      }
    },
    { immediate: true }
  );

  return loadedImage;
}
