export type StickerProps = {
  json: TelegramStickerJson;

  autoplay?: boolean;

  loop?: boolean;

  speed?: number;

  playOnClick?: boolean;
};

export const StickerDefaultProps = {
  autoplay: true,
  loop: true,
  speed: 1,
  playOnClick: true,
} as const;
