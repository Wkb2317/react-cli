/**
 *
 * @param inputLoader
 * @returns {(string|*)[]}
 */
export function  presetCssLoader(inputLoader = ''){
    return ['style-loader', 'css-loader', 'postcss-loader', inputLoader].filter((item) => item !== '')
}

