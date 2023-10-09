import { ALERTS_HOST_TOKEN, createAlertsConnector } from '@tok/ui/tokens';
import { App, Plugin } from 'vue';

const install = (app: App) => {
  const connector = createAlertsConnector();

  app.provide(ALERTS_HOST_TOKEN, connector);
};

export const AlertsPlugin: Plugin = {
  install,
};
