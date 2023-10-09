import { DefinedPressetsKeys } from '@tok/generation/defineConfig';
import { BasePresset } from '@tok/generation/pressets/base';
import { SlidePresset } from '@tok/generation/pressets/slide';
import { defineAsyncComponent, InjectionKey } from 'vue';

export type DefinePressets = Record<
  DefinedPressetsKeys,
  ReturnType<typeof defineAsyncComponent>
>;

export const predefinedPressets: DefinePressets = {
  base: BasePresset,
  slide: SlidePresset,
  paywall: defineAsyncComponent(() =>
    import('@tok/generation/pressets/paywall').then((m) => m.PaywallPresset)
  ),
  form: defineAsyncComponent(() =>
    import('@tok/generation/pressets/form').then((m) => m.FormPresset)
  ),
  paywall_single: defineAsyncComponent(() =>
    import('@tok/generation/pressets/paywall_single').then(
      (m) => m.PaywallSinglePresset
    )
  ),
  paywall_row: defineAsyncComponent(() =>
    import('@tok/generation/pressets/paywall_row').then(
      (m) => m.PaywallRowPresset
    )
  ),
};

export const DEFINED_PRESSETS_TOKEN = Symbol() as InjectionKey<
  Record<string, unknown>
>;
