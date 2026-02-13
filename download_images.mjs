
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1YJu6AaCP8NCekbl9WClp3IHWFD3E3NIs",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1pVIi3_m496Ig-4SvVT5GmBptUAqJ-4wC",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=12-TVuCg7wvpERgo6MfZ9KLGJFl8pSHGH",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1Wn1XRAIjy3M5sMqIfVE_Cd7NmMDrCIVv",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1YJu6AaCP8NCekbl9WClp3IHWFD3E3NIs",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1c3iSWZRxb-eYrdQMXvjxzoGMo554BKsH",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1V49WH1cUseDrTHMkW78KaUxDCQAD37mJ",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=18K66WcUfU6kHJDGZwCRCzR1b1-6c60Ew",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ioPfA1MvVrCm6Cq5993fmQgIKOxPKwR7",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1CrHmDzUrVaHSmSue47tF_K9OnczH4gqa",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1z9SlHyCcYxVM6qzIkVVK2etf9n8nAMmP",
    "https://wsrv.nl/?url=https://drive.google.com/uc?id=1S2Y1baQdPPtij0k1pEuLhKM8bO9l2cUC",
];

const downloadDir = path.join(process.cwd(), 'public', 'testimonials');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const download = (url, dest, index) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image ${index}: Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded image ${index} to ${dest}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const processImages = async () => {
    console.log("Starting download...");
    const failedIndices = [];
    for (let i = 0; i < images.length; i++) {
        try {
            await download(images[i], path.join(downloadDir, `img-${i}.jpg`), i);
        } catch (e) {
            console.error(e.message);
            failedIndices.push(i + 1); // 1-based index for user
        }
    }

    if (failedIndices.length > 0) {
        console.log("FAILED_IMAGES: " + failedIndices.join(", "));
    } else {
        console.log("All images downloaded successfully.");
    }
};

processImages();
