declare type TelegramStickerJson = {
  tgs: number;
  v: string;
  fr: number;
};

// TODO: Find a way to set this type once
// instead of copying and pasting it from project to project.
declare module '*.tgs' {
  export default TelegramStickerJson;
}
