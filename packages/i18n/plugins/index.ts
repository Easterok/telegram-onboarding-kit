import { InjectionKey, Plugin, Ref, ref } from 'vue';

type Loader<T = Record<string, unknown>> = Promise<{ default: T }>;

type Options = {
  default: string;
  asyncLocales: Record<string, Loader>;
  messages?: Record<string, unknown>;
};

export const TOK_I18N_TOKEN = Symbol() as InjectionKey<{
  fallbackLocale: string;
  locale: Ref<string>;
  loaders: Record<string, Loader>;
  messages: Ref<Record<string, unknown>>;
}>;

export const TokI18nPlugin: Plugin<Options> = {
  install(app, options) {
    const locale = ref(options.default);
    const _messages = ref(options.messages || {});

    app.provide(TOK_I18N_TOKEN, {
      fallbackLocale: options.default,
      locale,
      loaders: options.asyncLocales,
      messages: _messages,
    });
  },
};
