module.exports = {
  sourceType: 'unambiguous', // 自动推断编译的模块类型
  ignore: [/@babel[/\\]runtime/],
  presets: [
    ['@babel/preset-env', {"modules": false, "useBuiltIns": "usage", "corejs": 3}]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
  ],
  cacheDirectory: true
}