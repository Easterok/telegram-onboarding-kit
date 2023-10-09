export type LinkProps = {
  text: string;

  href: string;

  target?: string;
};

export const LinkDefaultProps = {
  text: '',
  target: '_blank',
} as const;
