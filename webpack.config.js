const fs = require('fs-extra');

module.exports = {
  egg: true,
  framework: 'html',
  entry: {
    include: ['app/web/page'],
    template: 'view/layout.html'
  },
  prefix: 'public',
  buildPath: 'app/view',
  publicPath: '/',
  loaders: {
    nunjucks: false
  },
  plugins: {},
  // proxy: {
  //   host:  'http://localhost:8888',
  //   match: /\/debug/
  // },
  port: 9008,
  done() {
    fs.move('app/view/public', 'app/public', { overwrite: true }, function(err) {
      if (err) return console.error(err);

      console.log('mv success.');
    });
  }
};