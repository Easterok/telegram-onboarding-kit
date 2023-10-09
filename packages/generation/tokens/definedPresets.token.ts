import { DefinedPresetsKeys } from '@tok/generation/defineConfig';
import { BasePreset } from '@tok/generation/presets/base';
import { SlidePreset } from '@tok/generation/presets/slide';
import { defineAsyncComponent, InjectionKey } from 'vue';

export type DefinePresets = Record<
  DefinedPresetsKeys,
  ReturnType<typeof defineAsyncComponent>
>;

export const predefinedPresets: DefinePresets = {
  base: BasePreset,
  slide: SlidePreset,
  paywall: defineAsyncComponent(() =>
    import('@tok/generation/presets/paywall').then((m) => m.PaywallPreset)
  ),
  form: defineAsyncComponent(() =>
    import('@tok/generation/presets/form').then((m) => m.FormPreset)
  ),
  paywall_single: defineAsyncComponent(() =>
    import('@tok/generation/presets/paywall_single').then(
      (m) => m.PaywallSinglePreset
    )
  ),
  paywall_row: defineAsyncComponent(() =>
    import('@tok/generation/presets/paywall_row').then(
      (m) => m.PaywallRowPreset
    )
  ),
};

export const DEFINED_PRESETS_TOKEN = Symbol() as InjectionKey<
  Record<string, unknown>
>;
