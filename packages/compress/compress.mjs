import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'input';
const outputDir = 'output';

const SUPPORTED_EXTENSIONS = ['.jpeg', '.jpg', '.png'];

const getImagesInMergeRequest = () => {
  const files = fs.readdirSync(inputDir).map((fileName) => {
    return path.join(inputDir, fileName);
  });

  const onlySupportedForCompress = files.filter((fileName) => {
    const supported = SUPPORTED_EXTENSIONS.some((extension) =>
      fileName.endsWith(extension)
    );

    if (!supported) {
      console.info(`${fileName} doesn't support and won't be compress`);
    }

    return supported;
  });

  return onlySupportedForCompress;
};

const compressImage = async (inputPath, outputPath, quality, format) => {
  try {
    const image = sharp(inputPath);
    const { size: originalSize } = fs.statSync(inputPath);

    if (format === 'webp') {
      outputPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      image.webp({ quality: quality });
    } else if (format === 'avif') {
      outputPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.avif');
      image.avif({ quality: quality });
    } else {
      const ext = path.extname(outputPath).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        image.jpeg({ quality: quality });
      } else if (ext === '.png') {
        image.png({ quality: quality });
      }
    }

    await image.toFile(outputPath);

    const { size: compressedSize } = fs.statSync(outputPath);
    const compressionRatio = (originalSize - compressedSize) / originalSize;

    const content = `
      File ${path.relative(inputDir, inputPath)} (${format.toUpperCase()}):
      Original size: ${originalSize}
      Compressed size: ${compressedSize}
      Decrease by: ${(compressionRatio * 100).toFixed(2)}%
    `;

    console.info(content);
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error.message);
  }
};

const start = async () => {
  let counter = 0;
  const qualities = [40, 60, 80, 100];
  const images = getImagesInMergeRequest();

  for (const inputFile of images) {
    counter++;

    for (const quality of qualities) {
      const outputPath = path.join(
        outputDir,
        `quality_${quality}`,
        path.relative(inputDir, inputFile)
      );
      const outputDirPath = path.dirname(outputPath);

      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      console.info(
        `\n----- Compressing image-${counter} quality ${quality} -----`
      );
      await compressImage(inputFile, outputPath, quality, 'original');
      await compressImage(inputFile, outputPath, quality, 'webp');
      // await compressImage(inputFile, outputPath, quality, 'avif');
      console.info(`----- END Compressing image-${counter} -----\n`);
    }
  }
};

start();
