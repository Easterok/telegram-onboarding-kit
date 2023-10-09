# Presets

1. [base](./base/README.md)
2. [form](./form/README.md)
3. [paywall](./paywall/README.md)
4. [paywall_row](./paywall_row/README.md)
5. [paywall_single](./paywall_single/README.md)
6. [slide](./slide/README.md)
7. [Route](./Route.vue)

## Base

```ts
defineConfig({
  pages: [
    {
      // extends: '', <- empty extends
      slides: [
        // ...
      ],
      // ...
    },
  ],
});
```

or

```ts
defineConfig({
  pages: [
    {
      extends: 'base',
      slides: [
        // ...
      ],
      // ...
    },
  ],
});
```

## Slide

```ts
defineConfig({
  pages: [
    {
      // extends: '', <- empty extends
      slides: [
        {
          // extends: '',
          title: 'hello',
          //   ...
        },
      ],
      // ...
    },
  ],
});
```

or

```ts
defineConfig({
  pages: [
    {
      extends: 'base',
      slides: [
        {
          extends: 'slide',
          title: 'Hello',
          // ...
        },
        {
          // extends: '', <- empty extend
          title: 'Hello',
          // ...
        },
      ],
      // ...
    },
  ],
});
```

## Form

```ts
defineConfig({
  pages: [
    {
      extends: 'form',
      form: [
        {
          id: 'id',
          type: 'text',
          placeholder: 'text',
        },
      ],
      // ...
    },
  ],
});
```

## Paywall

```ts
defineConfig({
  pages: [
    {
      extends: 'paywall',
      products: [
        // ...
      ],
      // ...
    },
  ],
});
```

## Paywall Row

```ts
defineConfig({
  pages: [
    {
      extends: 'paywall_row',
      products: [
        // ...
      ],
      // ...
    },
  ],
});
```

## Paywall Signle

```ts
defineConfig({
  pages: [
    {
      extends: 'paywall_single',
      products: [
        // ...
      ],
      // ...
    },
  ],
});
```

## Route.vue

The component will extract the configuration from the route's meta parameter to render the next preset and bind all configuration properties to this component
