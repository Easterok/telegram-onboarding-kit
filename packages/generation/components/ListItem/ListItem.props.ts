import { MediaPressetProps } from '@tok/generation/components/Media';

export type ListItemProps = {
  text: string;
  media?: MediaPressetProps;
};

export const ListItemDefaultProps = {
  text: '',
} as const;
