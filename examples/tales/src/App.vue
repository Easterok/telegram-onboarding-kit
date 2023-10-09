<template>
  <root>
    <template #overContent>
      <div class="wt-link-button">
        <flat-button size="xs" appearance="ghost" target="_blank" :href="href">
          {{ button }}
        </flat-button>
      </div>
    </template>
  </root>

  <picture>
    <source type="image/webp" srcset="./assets/img/background.webp" />

    <img
      alt="main"
      role="presentation"
      decoding="async"
      fetchpriority="high"
      rel="preload"
      class="wt-background"
      src="./assets/img/background.png"
      srcset="./assets/img/background.png"
    />
  </picture>

  <div class="wt-shadow" />
</template>

<script setup lang="ts">
import './styles.scss';

import { Root } from '@tok/generation';
import { useI18n } from '@tok/i18n';
import { FlatButton } from '@tok/ui/components/FlatButton';

const i18n = useI18n();

const button = i18n.useTranslated('_wtHrefText');
const href = i18n.useTranslated('_wtHref');
</script>
