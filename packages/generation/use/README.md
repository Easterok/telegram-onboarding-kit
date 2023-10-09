# Use

1. [useCarouse](./carousel/index.ts)

Provides you with access to [Carousel](../../ui/components/Carousel/README.md) inside [Base.preset.ts](../presets/README.md) for managing or reading `activeIndex`, `length` (for pagination), and safly setting `activeIndex` via `MainButton` or `BackButton`.

## Usage

> [!IMPORTANT]
> Ensure that you call this function within one of the 'children' of the Base.preset component or the component that defines the accessor for the `CAROUSEL_ACCESSOR_TOKEN`. Otherwise, the function will return `null`

```vue
<script setup lang="ts">
import { useCarousel } from '@tok/generation/use/carousel';

const carousel = useCarousel();

carousel.next();
carousel.back();
carousel.set(1);

const length = carousel.length.value;
const index = carousel.index.value;
</script>
```
