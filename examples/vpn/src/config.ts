import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/fish_hello.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'MyVPN – the best VPN in Telegram',
          description: "Get access to all the content you love, no matter where you are",
          button: 'Next',
        },

        // form
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/fish_love.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Why use a VPN?',
          description: '',
          form: [
            {
              id: 'privacy',
              placeholder: 'Protect your privacy',
              type: 'checkbox',
            },
            {
              id: 'access_blocked_content',
              placeholder: 'Access blocked content',
              type: 'checkbox',
            },
            {
              id: 'find_better_deals',
              placeholder: 'Find better deals in online shopping',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: 'Other',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/hands_up.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          textAlign: 'center',
          title: "Many people trust us",
          description: "We have more than <b>1 million</b> users",
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
        src: import('./assets/stickers/lock.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Unlock access to all features',
      list: [
        'Unlimited traffic',
        'Any number of devices',
        'No ads',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
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
