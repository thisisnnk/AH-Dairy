
import https from 'node:https';

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

console.log("Checking images...");

images.forEach((url, index) => {
    https.get(url, (res) => {
        if (res.statusCode !== 200) {
            console.log(`Image ${index + 1} FAILED: Status ${res.statusCode} - URL: ${url}`);
        } else {
            // wsrv.nl might return 200 even for errors, but with specific content-type or size
            // However, usually a 404 from upstream results in 404 from wsrv.nl or a generated error image.
            // Let's assume 200 is OK for now, but print content-length if small.
            const len = res.headers['content-length'];
            if (len && parseInt(len) < 1000) {
                console.log(`Image ${index + 1} SUSPICIOUS (Small size ${len} bytes) - URL: ${url}`);
            } else {
                console.log(`Image ${index + 1} OK`);
            }
        }
    }).on('error', (e) => {
        console.error(`Image ${index + 1} ERROR: ${e.message}`);
    });
});
