module.exports = {
    publicPath: '/',

    devServer: {
        port: 8080,
        host: 'localhost',
        open: true,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}