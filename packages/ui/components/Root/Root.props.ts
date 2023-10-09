import { VNode } from 'vue';

export type RootSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;

  overContent?: (props: {}) => ReadonlyArray<VNode>;

  overPopups?: (props: {}) => ReadonlyArray<VNode>;

  overAlerts?: (props: {}) => ReadonlyArray<VNode>;
};
