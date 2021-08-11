module.exports={
    env:{
        API_BASE_URL:process.env.APP_ENV=='prod' ? 'https://nextjsgraphdemo-api.herokuapp.com/graphql' : 'http://localhost:4000/graphql',
    },
    webpack:(config,{isServer})=>{
        if(!isServer){
            config.node={
                fs:'empty'
            }
        }
        return config;
    }
}