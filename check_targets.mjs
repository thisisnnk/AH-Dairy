
import https from 'node:https';

const targets = [
    { index: 5, id: "1c3iSWZRxb-eYrdQMXvjxzoGMo554BKsH" },
    { index: 6, id: "1V49WH1cUseDrTHMkW78KaUxDCQAD37mJ" },
    { index: 7, id: "18K66WcUfU6kHJDGZwCRCzR1b1-6c60Ew" }
];

console.log("Checking suspected broken images...");

targets.forEach((t) => {
    const url = `https://wsrv.nl/?url=https://drive.google.com/uc?id=${t.id}`;
    https.get(url, (res) => {
        const len = res.headers['content-length'];
        const type = res.headers['content-type'];
        console.log(`Image (Index ${t.index}): ${t.id}`);
        console.log(`Status: ${res.statusCode}`);
        console.log(`Size: ${len}`);
        console.log(`Type: ${type}`);
        console.log('---');
    }).on('error', (e) => {
        console.error(`Image (Index ${t.index}) ERROR: ${e.message}`);
    });
});
