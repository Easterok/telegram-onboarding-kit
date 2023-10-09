import { defineConfig } from '@tok/generation';

import Story from './story/StoryExample.vue';

export default defineConfig({
  theme: 'dark',
  locale: {
    fallback: 'en',
    ru: import('./locales/ru.json'),
    en: import('./locales/en.json'),
  },
  definePresets: {
    story: Story,
  },
  currencyConfig: {
    currency: '_currency.value',
    align: '_currency.align',
  },
  pages: [
    {
      slides: [
        {
          media: {
            type: 'image',
            src: import('./assets/img/main.png'),
            webp: import('./assets/img/main.webp'),
            style:
              'width: min(60vw, 420px); height: min(66.5vw, 465px); margin: 0 auto',
          },
          title: '_s1.title',
          description: '_s1.description',
          button: '_s1.button',
        },
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/shpooky_love.tgs'),
          },
          title: '_s2.title',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/smile.svg'),
              },
              text: '_s2.list1',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/learn.svg'),
              },
              text: '_s2.list2',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/play.svg'),
              },
              text: '_s2.list3',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/book.svg'),
              },
              text: '_s2.list4',
            },
          ],
          button: '_s2.button',
        },
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/shpooky_easy.tgs'),
          },
          title: '_s3.title',
          description: '_s3.description',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/count_1.svg'),
              },
              text: '_s3.list1',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/count_2.svg'),
              },
              text: '_s3.list2',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/count_3.svg'),
              },
              text: '_s3.list3',
            },
          ],
          button: '_s3.button',
        },
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/shpooky_speed.tgs'),
          },
          title: '_s4.title',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
              },
              text: '_s4.list1',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/play.svg'),
              },
              text: '_s4.list2',
            },
          ],
          button: '_s4.button',
        },
        {
          media: {
            type: 'image',
            src: import('./assets/img/colorful.png'),
            webp: import('./assets/img/colorful.webp'),
            style: 'aspect-ratio: 375/250',
          },
          title: '_s5.title',
          description: '_s5.description',
          button: '_s5.button',
        },
        {
          media: {
            type: 'image',
            src: import('./assets/img/unicorn.png'),
            webp: import('./assets/img/unicorn.webp'),
            style: 'aspect-ratio: 375/209',
          },
          title: '_s6.title',
          description: '_s6.description',
          button: {
            content: '_s6.button',
            to: '/story',
          },
        },
        {
          extends: 'paywall',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/shpooky_party.tgs'),
          },
          title: '_paywall.title',
          mainButtonText: '_paywall.main',
          list: ['_paywall.feature1', '_paywall.feature2', '_paywall.feature3'],
          products: [
            {
              id: 'monthly',
              title: '_paywall.product1',
              description: '_paywall.price1Text',
              price: '_paywall.product1Price',
            },
            {
              id: 'yearly',
              title: '_paywall.product2',
              description: '_paywall.price2Text',
              price: '_paywall.product2Price',
              discount: '_paywall.discount',
            },
          ],
          popup: {
            type: 'web',
            title: '_paywall.popup.title',
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
    },
    {
      extends: 'story',
      path: '/story',
    },
  ],
});
