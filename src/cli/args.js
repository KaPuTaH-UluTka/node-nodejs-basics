export const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((arg, i)=> {if((i+1) % 2 !== 0){
        console.log(arg.slice(2) + ' is ' + args[i+1]);
    }})
};

parseArgs();
