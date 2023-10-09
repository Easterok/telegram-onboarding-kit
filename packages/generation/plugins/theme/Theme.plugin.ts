import { THEME_TOKEN, ThemeConfigParam } from '@tok/generation/tokens';
import { App, Plugin } from 'vue';

export const ThemePlugin: Plugin<ThemeConfigParam> = {
  install(app: App, themeValue: ThemeConfigParam) {
    app.provide(THEME_TOKEN, themeValue);
  },
};
