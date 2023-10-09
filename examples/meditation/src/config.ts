import { defineConfig } from '@tok/generation';

export default defineConfig({
  locale: {
    fallback: 'en',
    ru: import('./locales/ru.json'),
    en: import('./locales/en.json'),
  },
  pages: [
    {
      slides: [
        {
          media: {
            type: 'image',
            src: import('./assets/img/1.webp'),
            style: 'max-height: min(650px, 70vh);',
          },
          textAlign: 'center',
          title: '_s1.title',
          description: '_s1.description',
          button: '_s1.button',
        },
        {
          extends: 'form',
          media: {
            type: 'image',
            src: import('./assets/img/2.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s2.title',
          description: '_s2.description',
          form: [
            {
              id: 'name',
              placeholder: '_s2.namePlaceholder',
              type: 'text',
            },
            {
              id: 'age',
              placeholder: '_s2.agePlaceholder',
              type: 'number',
            },
          ],
          button: '_s1.button',
        },
        {
          extends: 'form',
          media: {
            type: 'image',
            src: import('./assets/img/3.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s3.title',
          form: [
            {
              id: 'guided',
              placeholder: '_s3.guided',
              type: 'checkbox',
            },
            {
              id: 'mindfulness',
              placeholder: '_s3.mind',
              type: 'checkbox',
            },
            {
              id: 'transcendental',
              placeholder: '_s3.trans',
              type: 'checkbox',
            },
            {
              id: 'yoga',
              placeholder: '_s3.yoga',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: '_s3.other',
              type: 'checkbox',
            },
          ],
          button: '_s1.button',
        },
        {
          media: {
            type: 'image',
            src: import('./assets/img/4.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s4.title',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 40,
              },
              text: '_s4.list1',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/language.svg'),
                size: 40,
              },
              text: '_s4.list2',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 40,
              },
              text: '_s4.list3',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/night.svg'),
                size: 40,
              },
              text: '_s4.list4',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 40,
              },
              text: '_s4.list5',
            },
          ],
          button: {
            content: '_s4.button',
            to: '/paywall',
          },
        },
      ],
    },
    {
      extends: 'paywall_single',
      path: '/paywall',
      media: {
        type: 'image',
        src: import('./assets/img/5.webp'),
        style: 'max-height: min(340px, 50vh);',
      },
      textAlign: 'center',
      title: '_paywall.title',
      description: '_paywall.description',
      mainButtonText: '_paywall.main',
      product: {
        id: 'productId',
        media: {
          type: 'icon',
          src: import('./assets/icons/star.svg'),
          size: 40,
        },
        title: '_paywall.product.title',
        price: 99,
        description: '_paywall.product.description',
      },
      popup: {
        title: '_paywall.popup.title',
        buttons: [
          {
            id: 'telegram_payments',
            text: '_paywall.popup.telegram_payments',
            type: 'default',
          },
          {
            id: 'wallet_pay',
            text: '_paywall.popup.wallet_pay',
            type: 'default',
          },
        ],
      },
      links: [
        {
          text: '_paywall.policy',
          href: '_paywall.policy_href',
        },
        {
          text: '_paywall.terms',
          href: '_paywall.terms_href',
        },
      ],
    },
  ],
});
