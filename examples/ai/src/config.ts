import { defineConfig } from '@tok/generation';

import ActionSlide from './custom/ActionSlide.vue';

const imageStyle =
  'left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: initial';

export default defineConfig({
  theme: 'dark',
  definePresets: {
    action_slide: ActionSlide,
  },
  currencyConfig: {
    align: 'right',
  },
  pages: [
    {
      slides: [
        {
          extends: 'action_slide',
          title: 'Re-dress photos with AI',
          description: 'Tap the button below to try',
          actionButton: ['Re-dress', 'Applied'],
          nextButton: 'Next',
          media: [
            {
              type: 'image',
              src: import('./assets/img/1_init.webp'),
              style: imageStyle,
            },
            {
              type: 'image',
              src: import('./assets/img/1_res.webp'),
              style: imageStyle,
            },
          ],
        },
        {
          extends: 'action_slide',
          title: 'Ready for an important meeting?',
          description: 'Find perfect business suit',
          actionButton: ['Re-dress', 'Applied'],
          nextButton: 'Next',
          media: [
            {
              type: 'image',
              src: import('./assets/img/2_init.webp'),
              style: imageStyle,
            },
            {
              type: 'image',
              src: import('./assets/img/2_res.webp'),
              style: imageStyle,
            },
          ],
        },
        {
          extends: 'action_slide',
          title: "Let's go to rave party!",
          description: 'Your friends will be impressed',
          actionButton: ['Re-dress', 'Applied'],
          nextButton: {
            to: '/paywall',
            content: 'Next',
          },
          media: [
            {
              type: 'image',
              src: import('./assets/img/3_init.webp'),
              style: imageStyle,
            },
            {
              type: 'image',
              src: import('./assets/img/3_res.webp'),
              style: imageStyle,
            },
          ],
        },
      ],
    },
    {
      extends: 'paywall_row',
      path: '/paywall',
      media: {
        type: 'image',
        src: import('./assets/img/paywall.png'),
        style: 'aspect-ratio: 390/251',
      },
      title: 'Purchase credits to re-dress your photos',
      description: '1 credit = 1 photo re-dress',
      mainButtonText: 'Buy credits for {price}',
      products: [
        {
          id: '4_credits',
          price: 4.99,
          title: '4<br />credits',
          description: 'Perfect to<br />start with',
        },
        {
          id: '20_credits',
          price: 8.99,
          title: '20<br />credits',
          description: 'Best value<br />offer',
          bestText: 'Best&nbsp;Choice',
        },
        {
          id: '100 credits',
          price: 19.99,
          title: '100<br />credits',
          description: 'For true<br />enthusiasts',
        },
      ],
      links: [
        {
          text: 'Privacy policy',
          href: 'http://google.com',
        },
        {
          text: 'Terms of use',
          href: 'http://google.com',
        },
      ],
    },
  ],
});
