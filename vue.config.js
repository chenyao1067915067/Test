module.exports = {
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'',
    indexPath:'index.html',
    filenameHashing:true,
    parallel: require('os').cpus().length > 1,
    chainWebpack: () => {},
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }

        // Object.assign(config, {
        //     // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@': path.resolve(__dirname, './src'),
        //             '@c': path.resolve(__dirname, './src/components')
        //         }
        //     }
        // });
    },
    lintOnSave:process.env.NODE_ENV !== 'production',
    productionSourceMap:true,
    crossorigin:'',
    css:{
       // 是否使用css分离插件 ExtractTextPlugin
       extract: true,
       // 开启 CSS source maps?
       sourceMap: false,
       // css预设器配置项
       loaderOptions: {},
       // 启用 CSS modules for all css / pre-processor files.
       modules: false
    },
    devServer:{
        //设置代理
        proxy:{
            'api/': {
                target: 'http://localhost:8088/', //真实请求的目标地址
                changeOrigin: true,
                pathRewrite: {
                    '^api/': ''
                }
            }
        }
    }
}