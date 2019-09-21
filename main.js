Vue.config.devtools = true
let myTools = new Vue({
  el: '#font-end-nav',
  data() {
    return {
      tools: [
        {
          label: '基础',
          alias: 'jichu',
          tools: [
            {
              name: 'html',
              discription: '用来构建网站页面的超文本标记语言。',
              imageUrl: './icon/html.jpg',
              link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML'
            },
            {
              name: 'css',
              discription: '用来美化修饰html的层叠样式表。',
              imageUrl: './icon/css.jpg',
              link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS'
            },
            {
              name: 'javascript',
              discription: '一个可以运行在浏览器端的解释型脚本语言。',
              imageUrl: './icon/js.jpg',
              link: 'https://www.javascript.com/'
            },
            {
              name: 'nginx',
              discription: '高性能的 HTTP 和反向代理服务器。',
              imageUrl: './icon/nginx.jpg',
              link: 'http://nginx.org/'
            },
            {
              name: 'filezilla',
              discription: '开源强大跨平台的FTP客户端。',
              imageUrl: './icon/filezilla.jpg',
              link: 'https://www.filezilla.cn/'
            }
          ]
        },
        {
          label: '进阶',
          alias: 'jinjie',
          tools: [
            {
              name: 'stylus',
              discription: '一个诞生于node社区且易用强大的css预处理器。',
              imageUrl: './icon/stylus.jpg',
              link: 'https://stylus.bootcss.com/'
            },
            {
              name: 'webpack',
              discription: '功能强大的前端资源模块打包器。',
              imageUrl: './icon/webpack.jpg',
              link: 'https://www.webpackjs.com/'
            },
            {
              name: 'yarn',
              discription: '比npm更加快速、安全、易学习的依赖管理工具',
              imageUrl: './icon/yarn.png',
              link: 'https://yarnpkg.com/zh-Hans/'
            },
            {
              name: 'vuejs',
              discription: '简单易学强大的 MVVM 框架',
              imageUrl: './icon/vuejs.jpg',
              link: 'https://cn.vuejs.org/'
            },
            {
              name: 'reactjs',
              discription: '构建用户界面的 JavaScript 库',
              imageUrl: './icon/reactjs.jpg',
              link: 'https://doc.react-china.org/'
            },
            {
              name: 'nodejs',
              discription: '基于 chrome v8 引擎的 javascript 运行时环境',
              imageUrl: './icon/nodejs.jpg',
              link: 'http://nodejs.cn/'
            },
            {
              name: 'koa2',
              discription: '基于 Node.js 平台的下一代 web 开发框架',
              imageUrl: './icon/koa2.jpg',
              link: 'http://koajs.com/'
            }
          ]
        },
        {
          label: '工具',
          alias: 'gongju',
          tools: [
            {
              name: 'chrome',
              discription: '用 chrome 做一个有追求的开发者。',
              imageUrl: './icon/chrome.jpg',
              link: 'https://www.google.com/chrome/'
            },
            {
              name: 'vscode',
              discription: '大厂免费易用的前端开发神器。',
              imageUrl: './icon/vscode.png',
              link: 'https://code.visualstudio.com/'
            },
            {
              name: 'photoshop',
              discription: '技多不压身，切图不求人。',
              imageUrl: './icon/ps.jpg',
              link: 'https://www.adobe.com/cn/products/photoshop.html'
            },
            {
              name: 'jsrun',
              discription: '功能强大的在线的片段编辑器',
              imageUrl: './icon/jsrun.jpg',
              link: 'http://jsrun.net/'
            },
            {
              name: 'gogs',
              discription: '简单易用的代码托管服务',
              imageUrl: './icon/gogs.png',
              link: 'http://172.18.238.204/gogs/'
            }
          ]
        }
      ]
    }
  }
})
