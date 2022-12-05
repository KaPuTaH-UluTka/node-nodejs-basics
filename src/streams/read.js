import fs from 'fs';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
    const stream = fs.createReadStream(__dirname + '/files/fileToRead.txt');
    stream.on('open', () => { stream.pipe(process.stdout); });
};

await read();
