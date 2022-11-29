import { Transform } from 'stream';

const transform = async () => {
    const {stdout, stdin} = process;
    const transformStream = new Transform({
        transform: (chunk, _, cb) => {
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');
            console.log("Reverse input:");
            cb(null, reversedChunk + "\n\n");
        },
    });
    console.log("Start input:");
    stdin.pipe(transformStream).pipe(stdout);
};

await transform();
