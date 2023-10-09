import { defineAsyncComponent, InjectionKey } from 'vue';

export const CUSTOM_ICONS_TOKEN = Symbol() as InjectionKey<
  Record<string, ReturnType<typeof defineAsyncComponent>>
>;
