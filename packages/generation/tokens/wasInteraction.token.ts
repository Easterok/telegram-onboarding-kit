import { InjectionKey, Ref } from 'vue';

export const WAS_INTERACTION_TOKEN = Symbol() as InjectionKey<Ref<boolean>>;
