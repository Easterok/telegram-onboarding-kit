import { InjectionKey } from 'vue';

export type ThemeConfigParam = 'light' | 'dark' | 'auto';

export const THEME_TOKEN = Symbol() as InjectionKey<ThemeConfigParam>;
