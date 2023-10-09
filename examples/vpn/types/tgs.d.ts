declare type TelegramStickerJson = {
  tgs: number;
  v: string;
  fr: number;
};

declare module '*.tgs' {
  export default TelegramStickerJson;
}
