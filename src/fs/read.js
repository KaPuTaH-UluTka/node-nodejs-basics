import fs from 'fs/promises';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
    try {
        const innerInfo = await fs.readFile(__dirname + '/files/fileToRead.txt', 'utf8')
        console.log(innerInfo);
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
};
await read();
