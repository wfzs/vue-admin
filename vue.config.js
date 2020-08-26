const path = require("path");
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "./",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  //   compiler: false,
  //   runtimeCompiler: true, //关键点在这
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {},
  configureWebpack: config => {
    // config.resolve = {
    //   extensions: [".js", ".vue", ".json"], //文件优先解析后缀名顺序
    //   alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //     "@c": path.resolve(__dirname, "./src/components"),
    //     "@v": path.resolve(__dirname, "./src/views"),
    //     "@u": path.resolve(__dirname, "./src/utils"),
    //     "@s": path.resolve(__dirname, "./src/service")
    //   } // 别名配置
    // }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true, //注释css热更新生效
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";` //@指向src目录
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
    requireModuleExtension:true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    // host: "192.168.0.137",
    host: "0.0.0.0", //局域网和本地访问
    //host: "192.168.1.137",
    port: 8080,
    https: false,
    hot: true,
    hotOnly: false,
    /* 使用代理 */
    proxy: null,
    overlay: {
      //全局模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
};
