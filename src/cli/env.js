export const parseEnv = () => {
    const env = process.env;
    for(const key in env){
        if(key.slice(0,4) === 'RSS_'){
            console.log(key + '=' + env[key]);
        }
    }
};

parseEnv()
