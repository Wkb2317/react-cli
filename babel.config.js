module.exports = {
  presets: [
    'react-app'
    // [
    //     '@babel/preset-env',
    //     // 按需加载
    //     { useBuiltIns: 'usage'},
    // ],
  ]
  // 提供公共方法，减少babel-loader在解析js时往文件中添加的函数，减小文件体积和提高打包速度
  // plugins: ['@babel/plugin-transform-runtime']
}
