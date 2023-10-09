# @tok/ui utility

## [1. getElementId](./getElementId.ts)

Returns a unique element ID for your entire application

## [2. noop](./noop.ts)

Do nothing

## [3. tryOnBeforeUnmount](./tryOnBeforeUnmount.ts)

Checks if we are within the Vue scope. If so, it will trigger onBeforeUnmount; if not, it does nothing

## [4. clamp](./clamp.ts)

Helper function to clamp numbers between min and max value

## [5. formatNumber](./formatNumber.ts)

formats a numeric value with specified decimalSeparator and thousandSeparator, improving readability

> Used in:
>
> 1. [Money](../components/Money/README.md)
