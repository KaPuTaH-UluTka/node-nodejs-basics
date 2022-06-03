import {fileURLToPath} from 'url'
import {dirname} from 'path'
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const compress = async () => {
    const writeStream = fs.createWriteStream(__dirname + '/files/archive.gz');
    const readStream = fs.createReadStream(__dirname + '/files/fileToCompress.txt');
    const gzip = createGzip();
    return pipeline(readStream, gzip, writeStream)
        .then(() => {
            console.log(`Ok`);
        })
        .catch((error) => {
            console.log(Error(error.message));
        });
};
await compress();
