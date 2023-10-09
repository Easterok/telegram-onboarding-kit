<template>
  <root>
    <router-view />

    <template #overContent>
      <back-button :show="showBackButton" @on-click="onBackButton" />

      <slot name="overContent" />
    </template>
  </root>
</template>

<script setup lang="ts">
import { THEME_TOKEN, WAS_INTERACTION_TOKEN } from '@tok/generation/tokens';
import { useI18n } from '@tok/i18n';
import { BackButton } from '@tok/telegram-ui/components/BackButton';
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { useTheme } from '@tok/telegram-ui/use/theme';
import { Root } from '@tok/ui/components/Root';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

const themeParam = inject(THEME_TOKEN, 'auto');

const theme = useTheme(themeParam);
const tg = useTelegramSdk();
const router = useRouter();
const i18n = useI18n();

const wasInteraction = ref(false);

provide(WAS_INTERACTION_TOKEN, wasInteraction);

const isSupportedLocale = (locale: string) => {
  return i18n.available.includes(locale);
};

const tgLocale = tg.initDataUnsafe.user?.language_code;

if (tgLocale && isSupportedLocale(tgLocale)) {
  i18n.locale.value = tgLocale;
}

watch(router.currentRoute, (value) => {
  const queryLanguageCode = value.query.language_code;
  const strLang =
    typeof queryLanguageCode === 'string' ? queryLanguageCode : undefined;
  const supported = strLang && isSupportedLocale(strLang) ? strLang : undefined;

  if (!tgLocale && supported) {
    i18n.locale.value = supported;
  }
});

const onSetInteraction = () => {
  wasInteraction.value = true;
};

onMounted(() => {
  tg.expand();

  window.addEventListener('mousedown', onSetInteraction);
  window.addEventListener('touchstart', onSetInteraction);
  window.addEventListener('touchend', onSetInteraction);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', onSetInteraction);
  window.removeEventListener('touchstart', onSetInteraction);
  window.removeEventListener('touchend', onSetInteraction);
});

let ready = false;

const onLoadMessages = (locale: string) => {
  if (i18n.available.length === 0) {
    tg.ready();

    ready = true;

    return;
  }

  i18n
    .load(locale)
    .then((messages) => {
      i18n.setMessages(locale, messages);
    })
    .finally(() => {
      if (!ready) {
        tg.ready();
        ready = true;
      }
    });
};

watch(i18n.locale, onLoadMessages, { immediate: true });

const onBackButton = () => {
  const hasHistory = window.history.length > 2;

  if (hasHistory) {
    router.back();
  } else {
    router.replace('/');
  }
};

const showBackButton = computed(() => {
  const value = router.currentRoute.value;

  if (value.path === '/') {
    return !!value.query.page;
  }

  return true;
});

const setThemeAttribute = (theme: 'dark' | 'light') => {
  document.documentElement.setAttribute('data-theme', theme);
};

watch(theme, setThemeAttribute, { immediate: true });
</script>
