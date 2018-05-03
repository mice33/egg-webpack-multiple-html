'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524884112483_6347';

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public')
  };

  config.view = {
    mapping: {
      '.js': 'assets',
      '.html': 'art',
      defaultViewEngine: 'art',
      defaultExtension: '.html',
    }
  };

  config.art = {
    extname: '.html'
  };

  config.middleware = ['cacheControl'];

  config.cacheControl = {
    noCache: true,
    noStore: true
  };

  config.assets = {
    devServer: {
      command: 'easywebpack server dev',
      port: 9008,
    },
  };

  // config.webpack = {
  //   port: 9008,
  //   proxy: {
  //     host: 'http://127.0.0.1:9008', // target host that matched path will be proxy to
  //     match: /^\/public\//, // path pattern.
  //   },
  //   webpackConfigList: [],
  //   browser: false
  // };

  return config;
};
