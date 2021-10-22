module.exports = {
    devServer:{
        proxy:{
            '^/api':{//using instead of 
                target: "http://localhost:5000",
                changeOrigin: true,//proxy will transform request to the target server
                logLevel: 'debug',
                pathRewrite : {'^/api':'/'}//remove base pass
            }
        }
    }//an api proxies sits between application and server
}

//different types of logLevel:'debug'log everything,
//silent suppress prevent all logging