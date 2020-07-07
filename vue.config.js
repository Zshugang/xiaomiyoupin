module.exports = {
    publicPath:'./',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        host: "localhost",
        port: 3000, // 端口号
        proxy:{
            '/':{
                target: "http://127.0.0.1:9999",
                changeOrigin: true,
            }
        }

    }
}