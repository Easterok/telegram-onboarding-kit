# PaywallPopup

> [!NOTE]
> This component is only intended for use with [bootstrap.ts](../../bootstrap.ts).

1. This component extends the [Slide.preset](../../presets/slide/README.md) component.
2. It overrides the default behavior of the MainButton inside the [Slide.preset](../../presets/slide/README.md) component.
3. It manages the MainButton with its own logic, including:
   - Translating the mainButtonText.
   - Replacing {price} inside the mainButtonText.
   - Displaying a popup with the payment method.
   - Tracking the selected product.
   - If a product isn't selected, the MainButton won't be displayed
4. It renders [Link](../../../ui/components/Link/README.md).
5. It sends data to the bot when the payment method is selected.

## Props

All available props see in [PrimitivePaywall.props.ts](./PrimitivePaywall.props.ts)
