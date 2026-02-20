import Jimp from 'jimp';

async function enlargeFavicon() {
    try {
        const imagePath = 'public/brand/website-favicon.png';
        const image = await Jimp.read(imagePath);

        // Autocrop removes borders of the same color (transparent or solid)
        image.autocrop();

        // Favicons should ideally be square. Maximize the logo size within a square.
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const size = Math.max(width, height);

        // Create a new transparent square image
        const square = new Jimp(size, size, 0x00000000);

        // Center the cropped logo on the transparent square
        const x = Math.floor((size - width) / 2);
        const y = Math.floor((size - height) / 2);
        square.composite(image, x, y);

        await square.writeAsync(imagePath);
        console.log('Successfully enlarged and squared favicon.png');
    } catch (err) {
        console.error('Error enlarging favicon:', err);
    }
}

enlargeFavicon();
