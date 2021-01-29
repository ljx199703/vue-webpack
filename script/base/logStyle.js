/**
 * -----自定义打印样式-----
 */
const chalk = require('chalk')

console.success = function (printString) {
  console.log(chalk.green(printString))
}
console.info = function (printString) {
  console.log(chalk.yellow(printString))
}
console.error = function (printString) {
  console.log(chalk.red(printString))
}