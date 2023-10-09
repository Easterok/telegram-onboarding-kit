import { Component, VNode } from 'vue';

export type AlertProps<T = unknown> = {
  type?: 'success' | 'error' | 'telegram' | string;

  // The "content" property can be a string or another component, and it will receive the "context" prop.
  content?: string | Component;

  // The "closable" property determines whether the alert can be closed or not.
  closable?: boolean;

  // You can pass data to the "content" as a component through the "data" property.
  data?: T;
};

// helper type to get correct context inside your component in alert
/*
 Usage:
 CustomAlert.vue:

 <template>
  {{ context.data.sayHello ? 'Hello' : 'Bye' }}

  <button @click="context.close">close</button>
 </template>

 type Data = {
  sayHello?: boolean;
 };

 defineProps<AlertContextProps<Date>>();
*/
export type AlertContextProps<T = unknown> = {
  context: {
    close: () => void;
    data: T;
  };
};

export type AlertSlots = {
  default?: (props: {}) => ReadonlyArray<VNode>;
};

export type AlertEmits = {
  (e: 'close'): void;
};

export const AlertDefaultProps = {
  type: 'success',
} as const;
