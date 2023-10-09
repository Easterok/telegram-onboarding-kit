import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useTheme(value: 'light' | 'dark' | 'auto' = 'auto') {
  const sdk = useTelegramSdk();

  const init = value === 'auto' ? sdk.colorScheme : value;

  const theme = ref(init);

  const onThemeChange = () => {
    theme.value = sdk.colorScheme;
  };

  onMounted(() => {
    if (value === 'auto') {
      sdk.onEvent('themeChanged', onThemeChange);
    }
  });

  onBeforeUnmount(() => {
    sdk.offEvent('themeChanged', onThemeChange);
  });

  return theme;
}
