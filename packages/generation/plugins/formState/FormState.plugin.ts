import { FORM_STATE_TOKEN } from '@tok/generation/tokens';
import { App, Plugin, ref } from 'vue';

export const FormStatePlugin: Plugin = {
  install(app: App) {
    const state = ref<Record<string, unknown>>({});

    const update = (value: Record<string, unknown>) => {
      state.value = {
        ...state.value,
        ...value,
      };
    };

    app.provide(FORM_STATE_TOKEN, { state, update });
  },
};
