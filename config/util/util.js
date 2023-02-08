const MiniCssExtractPlugin = require("mini-css-extract-plugin");    // 把css提取出一个单独的文件

/**
 *
 * @param inputLoader
 * @returns {(string|*)[]}
 */
function  presetCssLoader(inputLoader = ''){
    return [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', inputLoader].filter((item) => item !== '')
}

module.exports = {
    presetCssLoader
}



