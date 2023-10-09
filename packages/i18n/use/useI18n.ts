import { TOK_I18N_TOKEN } from '@tok/i18n/plugins';
import { computed, ComputedRef, inject, MaybeRefOrGetter, ref } from 'vue';

const resolve = <T>(r: T) => {
  return typeof r === 'function' ? computed<T>(r as any) : ref(r);
};

const tokTranslate = <T = string>(
  messages: Record<string, unknown>,
  key: string
): T | undefined => {
  const [_key, ..._rest] = key.split('.');

  if (_key in messages && _rest.length === 0) {
    return messages[_key] as T;
  }

  if (_key in messages) {
    return tokTranslate((messages as any)[_key], _rest.join('.'));
  }

  return undefined;
};

export function useI18n() {
  const instance = inject(TOK_I18N_TOKEN)!;

  const availableFromAsync = Object.keys(instance.loaders || {});
  const availableStatic = Object.keys(instance.messages.value || {});

  const available = new Set([...availableFromAsync, ...availableStatic]);

  const load = (locale: string) => {
    if (!instance) {
      return Promise.reject('Not found i18n instance');
    }

    const loader = instance.loaders[locale];

    if (!loader) {
      return Promise.reject('Not found locale');
    }

    return loader.then((m) => m.default);
  };

  const setMessages = (locale: string, messages: Record<string, unknown>) => {
    if (!instance) {
      return;
    }

    const _messages = instance.messages.value;

    instance.messages.value = {
      ..._messages,
      [locale]: messages,
    };
  };

  const localed = computed(() => {
    const _locale = instance?.locale?.value;

    if (!_locale) {
      return {};
    }

    const messages = instance?.messages.value?.[_locale];

    return messages || {};
  });

  const translate = <T = string>(key: T, fallback?: T): T => {
    if (typeof key !== 'string') {
      return key as T;
    }

    if (!key) {
      return fallback ?? key;
    }

    const _locale = instance?.locale?.value;
    const _localed =
      (instance?.messages.value?.[_locale] as Record<string, unknown>) || {};

    const firstTry = tokTranslate(_localed, `${key}`);

    if (firstTry) {
      return firstTry as T;
    }

    const fallbackLocaled =
      instance!.messages.value?.[instance!.fallbackLocale] || {};

    const secondTry = tokTranslate(fallbackLocaled as {}, `${key}`) as T;

    return secondTry ?? fallback ?? key;
  };

  const useTranslated = <T = string>(
    key: MaybeRefOrGetter<T>,
    fallback?: T
  ): ComputedRef<T | string> => {
    const keyRef = resolve(key);

    return computed(() => {
      localed.value;
      instance.messages.value;

      const _value = keyRef.value;

      if (typeof _value !== 'string') {
        return _value as T;
      }

      return translate<T>(_value as T, fallback);
    });
  };

  return {
    fallbackLocale: instance.fallbackLocale || 'en',
    available: Array.from(available),
    load,
    setMessages,
    locale: instance.locale,
    messages: instance.messages,
    useTranslated,
    translate,
  };
}
