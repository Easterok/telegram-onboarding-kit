import { MediaPresetProps } from '@tok/generation/components/Media';

export type ListItemProps = {
  text: string;
  media?: MediaPresetProps;
};

export const ListItemDefaultProps = {
  text: '',
} as const;
