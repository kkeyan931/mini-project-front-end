const { defineConfig } = require("@vue/cli-service");
module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "https://www.mini-project.learnlinuxfree.tech/api",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api/": "/api/" },
      },
    },
  },
};
