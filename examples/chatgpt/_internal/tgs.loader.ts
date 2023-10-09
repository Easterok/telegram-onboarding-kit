import fs from 'fs';
import { ungzip } from 'pako';
import type { Plugin } from 'vite';

// find the way to import it as a component
const tgsRegexp = /\.tgs$/;

export function telegramStickerLoader(): Plugin {
  return {
    name: 'telegram-sticker-loader',
    enforce: 'pre',
    load(id: string) {
      if (!id.match(tgsRegexp)) {
        return;
      }

      const [path, importType = 'json'] = id.split('?', 2) as [string, 'json'];

      let decodedTgs;

      try {
        const fileBuffer = fs.readFileSync(path);

        decodedTgs = new TextDecoder('utf-8').decode(ungzip(fileBuffer));
      } catch (e) {
        console.error(`\n${id} couldn't be loaded by telegramStickerLoader \n`);

        return;
      }

      if (importType === 'json') {
        // https://v8.dev/blog/cost-of-javascript-2019#json
        return `export default JSON.parse(${JSON.stringify(decodedTgs)})`;
      }
    },
  };
}
