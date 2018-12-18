module.exports = (isDev) => {
    return {
        compilerOptons:{
          preserveWhitespace: true
        }
        // preserveWhitepace: true,
        // extractCSS: !isDev,
        // cssModules: {
        //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        //     camelCase: true
        // }
    }
}
