/**
 *
 * @param inputLoader
 * @returns {(string|*)[]}
 */
function  presetCssLoader(inputLoader = ''){
    return ['style-loader', 'css-loader', 'postcss-loader', inputLoader].filter((item) => item !== '')
}

module.exports = {
    presetCssLoader
}



