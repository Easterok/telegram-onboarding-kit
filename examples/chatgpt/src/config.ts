import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/yoda_thinking.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'ChatGPT (GPT-4) now in Telegram!',
          description: "Most advanced AI powered by <a href='https://openai.com' target='_blank'>OpenAI</a>",
          button: 'Next',
        },

        // video 1
        {
          media: {
            type: 'video',
            src: import('./assets/videos/chatgpt_1.mp4'),
            poster: import('./assets/img/chatgpt_1_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Ask any questions',
          description: "Get instant smart answers",
          button: 'Next',
        },

        // video 2
        {
          media: {
            type: 'video',
            src: import('./assets/videos/chatgpt_2.mp4'),
            poster: import('./assets/img/chatgpt_2_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Send Voice Messages',
          description: "90+ languages are supported",
          button: {
            content: 'Next',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/yoda_heart.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Unlock PRO features',
      list: [
        '<b>100,000</b> tokens/day (50+ A4-pages for ChatGPT)',
        'Access to <b>GPT-4</b>',
        'Unlock PRO chat modes and voice messages',
      ],
      products: [
        {
          id: '1_week_subscription',
          title: '1 week subscription',
          description: '2.49$/week',
          discount: '',
          price: 2.49,
        },
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '1.35$/week',
          discount: '45% discount',
          price: 5.99,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '0.96$/week',
          discount: '60% discount (best offer)',
          price: 49.99,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {  // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
