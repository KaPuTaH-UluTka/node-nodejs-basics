import fs from 'fs/promises';
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {createHash} from 'crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const file = await fs.readFile(__dirname + '/files/fileToCalculateHashFor.txt');
    hash.update(file);
    return hash.digest('hex');
};

console.log(await calculateHash());
