import fs from 'fs/promises';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const list = async () => {
    try {
        const files = await fs.readdir(__dirname + '/files')
        for(const file of files){
            console.log(file);
        }
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
};
await list();
