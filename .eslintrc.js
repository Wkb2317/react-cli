module.exports = {
  extends: [
    'react-app', // 继承 react 官方规则
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    babelOptions: {
      presets: [
        ['babel-preset-react-app', false],
        'babel-preset-react-app/prod'
      ]
    }
  }
}
