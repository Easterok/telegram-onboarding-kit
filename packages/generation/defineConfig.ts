import type { MediaPresetProps } from '@tok/generation/components/Media';
import type { ThemeConfigParam } from '@tok/generation/tokens';
import type { FlatButtonProps } from '@tok/ui/components/FlatButton';
import type { CurrencyOptions } from '@tok/ui/tokens';
import type { PopupButton } from '@twa-dev/types';
import type { CSSProperties } from 'vue';

export type PaywalPopupPresetButtons = (PopupButton & {
  media?: MediaPresetProps;
})[];

export type _GenerationSlideConfig = {
  extends?: 'slide';

  media?: MediaPresetProps;

  title: string;

  description?: string;

  pagination?: 'count';

  shape?: 'rounded' | 'square' | 'stacked';

  textAlign?: 'left' | 'center' | 'right';

  background?: string;

  list?: _GenerationListOptionsConfig;

  button: string | (Pick<FlatButtonProps, 'to'> & { content: string }) | null;
};

export type _GenerationFormControlConfig = {
  id: string;
  placeholder: string;
  type?: 'checkbox' | 'number' | 'text' | string;
  style?: string | CSSProperties;
};

export type _GenerationFormConfig = Omit<_GenerationSlideConfig, 'extends'> & {
  extends: 'form';

  form: _GenerationFormControlConfig[];
};

export type _GenerationListOptionsConfig = (
  | {
      media?: MediaPresetProps;
      text: string;
    }
  | string
)[];

export type _GenerationPaywallPopup = {
  // telegram by default
  type?: 'web' | 'telegram';
  title?: string;
  message?: string;
  buttons?: PaywalPopupPresetButtons;
};

export type _GenerationPrimitivePaywallConfig = Omit<
  _GenerationSlideConfig,
  'button' | 'extends'
> & {
  // can be shown with price "Something {price} subscribe"
  mainButtonText?: string;

  links: { text: string; href: string }[];

  popup?: _GenerationPaywallPopup;
};

export type _GenerationPrimitivePaywallProduct = {
  id: string;
  price: number | string;
  title: string;
  description: string;
};

export type _GenerationPaywallProduct = _GenerationPrimitivePaywallProduct & {
  discount?: string;
};

export type _GenerationPaywallConfig = _GenerationPrimitivePaywallConfig & {
  extends: 'paywall';

  products: _GenerationPaywallProduct[];
};

export type _GenerationPaywallSingleConfig =
  _GenerationPrimitivePaywallConfig & {
    extends: 'paywall_single';

    product: _GenerationPrimitivePaywallProduct & {
      media?: MediaPresetProps;
    };
  };

export type _GenerationPaywallRowProductConfig =
  _GenerationPrimitivePaywallProduct & {
    bestText?: string;
  };

export type _GenerationPaywallRowConfig = _GenerationPrimitivePaywallConfig & {
  extends: 'paywall_row';

  products: _GenerationPaywallRowProductConfig[];
};

export type _GenerationCarouselConfig<T extends Record<string, unknown>> = {
  extends?: 'base';
  slides: (
    | _GenerationPaywallConfig
    | _GenerationPaywallSingleConfig
    | _GenerationPaywallRowConfig
    | _GenerationSlideConfig
    | _GenerationFormConfig
    | { extends: keyof T; [key: string]: any }
  )[];
};

type BootstrapPage<TCustom extends Record<string, unknown>> = {
  path?: string;
} & (
  | _GenerationCarouselConfig<TCustom>
  | _GenerationPaywallConfig
  | _GenerationPaywallSingleConfig
  | _GenerationPaywallRowConfig
  | _GenerationSlideConfig
  | _GenerationFormConfig
  | { extends: keyof TCustom }
);

export type DefinedPresetsKeys<T = BootstrapPage<{}>> = T extends {
  extends: infer E;
}
  ? E
  : T extends { extends?: string }
  ? 'base' | 'slide'
  : never;

export type BootstrapConfig<TDefined extends Record<string, unknown>> = {
  theme?: ThemeConfigParam;
  locale?: {
    fallback: string;
  } & Record<string, any>;
  currencyConfig?: CurrencyOptions;
  definePresets?: TDefined;
  pages: BootstrapPage<TDefined>[];
};

export function defineConfig<TDefined extends Record<string, unknown>>(
  config: BootstrapConfig<TDefined>
) {
  return config;
}
