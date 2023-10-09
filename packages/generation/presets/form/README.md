# Form.preset

> [!NOTE]
> This component is only intended for use with [bootstrap.ts](../../bootstrap.ts).

1. This component is built upon the [Slide.preset](../slide/README.md) component.
2. It can render controls based on its configuration:
   - InputText (type="text")
   - InputText (type="number")
   - CheckboxBlock (type="checkbox")
3. It supports various types of inputs that can be configured within [defineConfig](../../defineConfig.ts), such as type="date."
4. It handles all controls and sets their values to the formState via [FORM_STATE_TOKEN](../../tokens/README.md).
5. It supports restoring values from the formState even when a control has been destroyed.

## Props

All available props see in [form.preset.props.ts](./form.preset.props.ts)
