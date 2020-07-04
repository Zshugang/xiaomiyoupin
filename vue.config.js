module.exports = {
    publicPath:'./',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/': {
                target: 'http://127.0.0.1:9999',
                changeOrigin: true
            }
        }

    }
}