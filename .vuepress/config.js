const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
  // 基础路径
  base: '/',
  // 端口
  port: 2000,
  head: [],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'informal essay',
      description: 'record every bit of daily work and study'
    },
    '/': {
      lang: 'zh-CN',
      title: '随笔',
      description: '记录平时工作和学习的点点滴滴'
    }
  },
  themeConfig: {
    // git地址
    repo: 'liuyuanquan/note',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        // nav: require('./nav/en'),
        sidebar: {}
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // nav: require('./nav/zh'),
        sidebar: {}
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    '@vuepress/nprogress',
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-128189152-1'
    // }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
  ],
  cache: false,
  // markdown
  markdown: {
    // 显示行号
    lineNumbers: true,
  },
}