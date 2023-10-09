import {
  DEFINED_PRESETS_TOKEN,
  predefinedPresets,
} from '@tok/generation/tokens';
import { Plugin } from 'vue';

export const DefinePresetsPlugin: Plugin<{}> = {
  install(app, options) {
    app.provide(DEFINED_PRESETS_TOKEN, {
      ...predefinedPresets,
      ...options,
    });
  },
};
