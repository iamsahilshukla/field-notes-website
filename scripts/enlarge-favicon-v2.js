import Jimp from 'jimp';

async function enlargeFavicon() {
    try {
        const imagePath = 'public/brand/website-favicon.png';
        const image = await Jimp.read(imagePath);

        // Find bounding box manually by ignoring pixels with alpha = 0 or near 0
        let minX = image.bitmap.width;
        let minY = image.bitmap.height;
        let maxX = 0;
        let maxY = 0;

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
            const alpha = image.bitmap.data[idx + 3];
            // If pixel is not fully transparent
            if (alpha > 5) {
                if (x < minX) minX = x;
                if (y < minY) minY = y;
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
            }
        });

        const cropWidth = maxX - minX + 1;
        const cropHeight = maxY - minY + 1;

        console.log(`Cropping to ${cropWidth}x${cropHeight} at ${minX},${minY}`);
        image.crop(minX, minY, cropWidth, cropHeight);

        // Make it square
        const size = Math.max(cropWidth, cropHeight);
        const square = new Jimp(size, size, 0x00000000);

        const destX = Math.floor((size - cropWidth) / 2);
        const destY = Math.floor((size - cropHeight) / 2);
        square.composite(image, destX, destY);

        await square.writeAsync(imagePath);
        console.log('Successfully tightly cropped and squared favicon.png');
    } catch (err) {
        console.error('Error enlarging favicon:', err);
    }
}

enlargeFavicon();
