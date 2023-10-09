# @tok/ui styles

- [Global styles](#global.scss)
  - [Basic palette](#basic-palette)
  - [Typography](#typography)
  - [Primary colors](#primary-colors)
  - [Theme](#theme)
  - [Sizes](#sizes)
  - [Static colors](#static-colors)
  - [Other](#other)
- [Local styles](#local.scss)

## [global.scss](./global.scss)

Definition of --tok CSS variables and some global styles to make your life easier

Every CSS variable begins with the `--tok` prefix, and you can access them in your styles as shown in the following example:

```
color: var(--tok-text-color);
background: var(--tok-background-color);
...
```

### Basic palette

Primary background color: `--tok-background-color`

Primary text color: `--tok-text-color`

To customize your own `background-color` and `text-color`, you only need to override two variables:

```scss
// styles.scss
:root {
  --tok-background-color-base: 200, 200, 200;
  --tok-text-color-base: 14, 14, 14;

  /* 
  This is the only available method that I know of
  to avoid overriding all color shades.
  
  If you have a color in hex format, convert it to RGB format
  and extract the R, G, and B parameters from there;
  this will be your *-base parameter.

  For example:
  1. hex color: #c8c8c8
  2. rgb: rgb(200, 200, 200)
  3. base: 200, 200, 200
  4. --tok-background-color-base: 200, 200, 200; 
  */
}

// don't forget to override them in dark theme also
html[data-theme='dark'] {
  --tok-background-color-base: 14, 14, 14;
  --tok-text-color-base: 200, 200, 200;
}
```

All variables in the base palette have their own shades.
You can access them in your styles:

```scss
// background-color-base with opacity 1
background: var(--tok-background-color);

// background-color-base with opacity 0.8
background: var(--tok-background-color-80);

// background-color-base with opacity 0.64
background: var(--tok-background-color-64);

// background-color-base with opacity 0.48
background: var(--tok-background-color-48);

// background-color-base with opacity 0.32
background: var(--tok-background-color-32);

// background-color-base with opacity 0.24
background: var(--tok-background-color-24);

// background-color-base with opacity 0.16
background: var(--tok-background-color-16);

// background-color-base with opacity 0.08
background: var(--tok-background-color-08);

// Text

// text-color-base with opacity 1
color: var(--tok-text-color);

// text-color-base with opacity 0.8
color: var(--tok-text-color-80);

// text-color-base with opacity 0.64
color: var(--tok-text-color-64);

// text-color-base with opacity 0.48
color: var(--tok-text-color-48);

// text-color-base with opacity 0.32
color: var(--tok-text-color-32);

// text-color-base with opacity 0.24
color: var(--tok-text-color-24);

// text-color-base with opacity 0.16
color: var(--tok-text-color-16);

// text-color-base with opacity 0.08
color: var(--tok-text-color-08);
```

### Typography

The primary parameter that sets the `font-family` for headings is: `--tok-font-heading`

For text, it is: `--tok-font-text`

If you want to override font-family with your own, there is the example for that:

```scss
:root {
  // for headings
  --tok-font-heading: 'Ubuntu';

  // for text
  --tok-font-text: 'Futura';
}
```

> [!IMPORTANT]
> Don't forget to include the font links in your index.html file
> We have indicated the location where you should place them with the placeholder:
> `<!-- Replace this with your font -->`

Available fonts for heading:

```scss
.div {
  font: var(--tok-font-h1);
  font: var(--tok-font-h2);
  font: var(--tok-font-h3);
  font: var(--tok-font-h4);
}
```

Available fonts for text:

```scss
.div {
  font: var(--tok-font-l);
  font: var(--tok-font-m);
  font: var(--tok-font-s);
  font: var(--tok-font-xs);
}
```

As always, you can override them with your font styles

```scss
:root {
  --tok-font-l: 700 2rem/2.25rem var(--tok-font-text);
}
```

> [!IMPORTANT]
> By default, we have defined the tags **h1**, **h2**, **h3**, and **h4** with **--tok-font-h1...h4**, so you don't need to specify them manually

### Primary colors

> By default, primary colors will inherit the Telegram primary color.

You can access them in your styles.scss file

```scss
div {
  color: var(--tok-primary-text);
  background: var(--tok-primary);
}
```

Customizing Primary Colors:

```scss
:root {
  --tok-primary: #00ff00;
  --tok-primary-text: #fff;
}

// don't forget to override them in dark theme also
html[data-theme='dark'] {
  --tok-primary: #00ff00;
  --tok-primary-text: #fff;
}
```

### Theme

To setup your theme you can use data-attribute on html

> Keep in mind that the dark theme works automatically only when you are using the `@tok/generation` package to set up your app

```scss
html[data-theme='dark'] {
  --tok-primary: #fff;
  // ... and so on
}
```

### Sizes

Our components are built around these size variables:

```scss
:root {
  --tok-radius-l: 1rem;
  --tok-radius-m: 0.75rem;
  --tok-radius-s: 0.5rem;
  --tok-radius-xs: 0.25rem;

  --tok-height-l: 3.5rem;
  --tok-height-m: 2.75rem;
  --tok-height-s: 2rem;
  --tok-height-xs: 1.5rem;

  --tok-padding-l: 1rem;
  --tok-padding-m: 0.75rem;
  --tok-padding-s: 0.5rem;
  --tok-padding-xs: 0.25rem;

  --tok-disabled-opacity: 0.56;

  --tok-hover-opacity: 0.8;
}
```

If you are using [FlatButton](../components/FlatButton/README.md), [InputText](../components/InputText/README.md), and so on with `size: s`, it means that they will inherit `--tok-radius-s`, `--tok-height-s`, and `--tok-padding-s`.

By adjusting these variables, you can achieve your needs.

### Static colors

These variables are static and will not change based on the theme:

```scss
:root {
  // But you can override them if you want
  --tok-white: #fff;
  --tok-dark: #111;
  --tok-dark-80: #111111cc;
}
```

### Other

Here are some other color variables you can use:

```scss
:root {
  // For alerts with the 'telegram' type,
  // popup buttons, and products within the paywall
  --tok-stinger: #f6f6f9;

  // for "<a href="...">...</a>"
  --tok-link: var(--tg-theme-link-color, var(--tok-text-color-80));

  // for alerts with type 'error'
  // and popup buttons with destructive type
  --tok-error-bg: #ce372d1f;
  --tok-error-fill: #ce372d;

  // for alerts with type 'success'
  --tok-success-bg: #4ac99b1f;
  --tok-success-fill: #4ac99b;
}
```

## [local.scss](./local.scss)

Provides you access to mixins used within UI components

### Usage

```vue
<template>
  <button class="button">Click</button>

  <input class="input" />

  <div class="square" />

  <div class="scroll" />

  <div class="transition" />
</template>

<style lang="scss" scoped>
@import '@tok/ui/styles/local.scss';

.button {
  // this will reset all button styles
  @include clearbutton;
}

.input {
  // this will reset all input styles
  @include clearinput;
}

.square {
  // sets width and height for div
  @include size(20px, 20px);
}

.scroll {
  // clears scroll appearance
  @include hidescroll;

  overflow: scroll;
}

.transition {
  // adds transition style with predefined parameters
  @include transition(opacity);
  // or specify yours
  @include transition(opacity, 1s);
  @include transition(opacity, 1s, linear);

  opacity: 1;

  &:hover {
    opacity: 0;
  }
}
</style>
```
