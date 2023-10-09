import { InjectionKey, Ref } from 'vue';

type State = {
  state: Ref<Record<string, unknown>>;
  update(value: Record<string, unknown>): void;
};

export const FORM_STATE_TOKEN = Symbol() as InjectionKey<State>;
