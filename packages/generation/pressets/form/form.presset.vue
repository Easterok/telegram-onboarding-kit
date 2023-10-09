<template>
  <slide-presset v-bind="props">
    <form @submit.prevent>
      <div v-for="control in form" :key="control.id" :class="$style.control">
        <checkbox-block
          v-if="control.type === 'checkbox'"
          v-bind="control"
          :model-value="!!generatedForm[control.id]"
          @update:model-value="onUpdate(control.id, $event)"
        />

        <input-text
          v-else-if="control.type === 'number'"
          v-bind="control"
          type="number"
          inputmode="decimal"
          :model-value="generatedForm[control.id]"
          @update:model-value="onUpdate(control.id, $event)"
        />

        <input-text
          v-else
          v-bind="control"
          :model-value="generatedForm[control.id]"
          @update:model-value="onUpdate(control.id, $event)"
        />
      </div>
    </form>
  </slide-presset>
</template>

<script setup lang="ts">
import { _GenerationFormControlConfig } from '@tok/generation/defineConfig';
import { SlidePresset } from '@tok/generation/pressets/slide';
import { FORM_STATE_TOKEN } from '@tok/generation/tokens';
import { CheckboxBlock } from '@tok/ui/components/CheckboxBlock';
import { InputText } from '@tok/ui/components/InputText';
import { inject, reactive, toRefs } from 'vue';

import {
  FormPressetDefaultProps,
  FormPressetProps,
} from './form.presset.props';

const props = withDefaults(
  defineProps<FormPressetProps>(),
  FormPressetDefaultProps
);

const { form } = toRefs(props);

const formState = inject(FORM_STATE_TOKEN, null);

const stateValue = formState?.state;

const getInitValue = (control: _GenerationFormControlConfig) => {
  if (control.type === 'checkbox') {
    return stateValue?.value[control.id] ?? false;
  }

  return stateValue?.value[control.id] ?? null;
};

const reactiveValue = form.value.reduce((acc, control) => {
  const initValue = getInitValue(control);

  acc[control.id] = initValue;

  return acc;
}, {} as Record<string, unknown>);

formState?.update(reactiveValue);

const generatedForm = reactive<Record<string, unknown>>(reactiveValue);

const onUpdate = (id: string, value: unknown) => {
  generatedForm[id] = value;

  formState?.update({ [id]: value });
};
</script>

<style lang="scss" module>
.control:not(:first-child) {
  margin-top: 1.25rem;
}
</style>
