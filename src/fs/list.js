import fs from 'fs/promises';
import {fileURLToPath} from 'url'
import {dirname} from 'path'
const list = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    try {
        const files = await fs.readdir(__dirname + '/files')
        files.forEach(async (file) => {
            console.log(file);
        })
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
};

await list();
