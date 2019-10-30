//app.js
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
App({
  onLaunch: function () {
    plugin.configPlugin({
      fetchFunc: fetchWechat.fetchFunc(),
      tf,canvas: wx.createOffscreenCanvas()
    });
    tf.tensor([1,2,3,4]).print()
  }
})