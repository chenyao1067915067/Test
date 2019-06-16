/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * credential: 跨域
 *
 */

const dev = {
    routerMode: 'history', // hash

    /* beta */
    // baseUrl: "https://api.douban.com",
    baseUrl:"localhost:8080",
    credential: true,
    
    proxyTable: {        
        '/api': {
            target: 'http://localhost:8088/api/',
            changeOrigin: true,
            pathRewrite: {                
                '^/api': ''
            }
        }
    }

};

const prod = {
    ...dev,
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
