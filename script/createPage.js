/**
 * -----创建页面-----
 */
const fs = require('fs')
const path = require('path')
const { closeTerminal } = require('./base/keyWords')
require('./base/logStyle')
require('./base/exitTip')
const { readline } = require('./base/readline')

const pageTemplatePath = path.resolve(__dirname, '../src/pages/pageTemplate/pageTemplate.vue')
const pageNameRegExp = /__PAGE_NAME__/g
const pagesDirectoryPath = path.resolve(__dirname, '../src/pages')

function createPage () {
  readline.question('请输入想要创建的页面名称: ', function (pageName) {
    if (pageName.toLowerCase() === closeTerminal.toLowerCase()) process.exit(0)
    if (!pageName) {
      console.error('页面名称不允许为空!\n')
      createPage()
      return
    }
    const pageDirectoryToCreatePath = path.resolve(pagesDirectoryPath, `./${pageName}`)
    const pageAlreadyExists = fs.existsSync(pageDirectoryToCreatePath)
    if (pageAlreadyExists) console.error('该页面已经存在!\n')
    else {
      let pageTemplateContent = fs.readFileSync(pageTemplatePath, 'utf-8')
      pageTemplateContent = pageTemplateContent.replace(pageNameRegExp, pageName)
      fs.mkdirSync(pageDirectoryToCreatePath)
      fs.writeFileSync(path.resolve(pageDirectoryToCreatePath, `./${pageName}.vue`), pageTemplateContent)
      console.success('页面创建成功!\n')
    }
    createPage()
  })
}

createPage()