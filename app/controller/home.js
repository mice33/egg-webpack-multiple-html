'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let ip = {
        province: '',
        city: ''
    };
    // this.ctx.body = 'hi, egg';
    try {
        const ipData = await ctx.curl('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json', {
          dataType: 'json'
        });
        ip = ipData.data;
    } catch (err) {
        this.logger.error(err);
    }

    const data = { name: 'egg', ip };

    console.log(data);

    // render a template, path relate to `app/view`
    await ctx.render('index', data);
  }
}

module.exports = HomeController;
