/**
 * -----命令行关闭提示-----
 */
const { closeTerminal } = require('./keyWords')
require('./logStyle')

console.info(`提示: 如果您想退出该命令行, 请输入${closeTerminal}并按回车!\n`)