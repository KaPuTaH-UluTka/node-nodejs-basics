import {fileURLToPath} from 'url'
import {dirname} from 'path'
import fs from "fs";
import {createGunzip} from "zlib";
import {pipeline} from "stream/promises";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const decompress = async () => {
    const readStream = fs.createReadStream(__dirname + '/files/archive.gz');
    const writeStream = fs.createWriteStream(__dirname + '/files/fileToCompress.txt');
    const unzip = createGunzip();
    return pipeline(readStream, unzip, writeStream)
        .then(() => {
            console.log(`Ok`);
        })
        .catch((error) => {
            console.log(Error(error.message));
        });
};
await decompress()
