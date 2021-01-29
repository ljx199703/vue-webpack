/**
 * -----读取用户输入行对象(全局)-----
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = {
  readline
}