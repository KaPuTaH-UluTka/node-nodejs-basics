import fs from "fs/promises";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    try {
        await fs.access(__dirname + '/files/wrongFilename.txt')
        await fs.rename(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.md')
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
};

await rename();
