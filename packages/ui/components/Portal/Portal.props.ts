import { VNode } from 'vue';

export type PortalProps = {
  appendTo?: '#tok-popups-host' | '#tok-alerts-host' | string;
};

export type PortalSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const PortalDefaultProps = {
  appendTo: 'body',
} as const;
