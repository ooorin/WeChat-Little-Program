const app = getApp();
let timer;
let cnt = Math.floor(Math.random() * 19);
let num = 0;
Page({
  data: {
    imgSetC: [
      '../../image/1.png',
      '../../image/2.png',
      '../../image/3.png',
      '../../image/4.png',
      '../../image/5.png',
      '../../image/6.png',
      '../../image/7.png',
      '../../image/8.png',
      '../../image/9.png',
      '../../image/10.png',
      '../../image/11.png',
      '../../image/12.png',
      '../../image/13.png',
      '../../image/14.png',
      '../../image/15.png',
      '../../image/16.png',
      '../../image/17.png',
      '../../image/18.png',
      '../../image/19.png',
      '../../image/20.png',
    ],
    imgSrc: '',
    imgWidth: '',
    imgHeight: '',
  },

  onLoad: function (options) {
    num = 0;
    this.imgLoad();
    this.imgSize();
  },

  imgLoad: function() {
    let thisPage = this;
    timer = setInterval(function () {
      //console.log(num)
      console.log(app.globalData.imgId)
      console.log(cnt)
      wx.showLoading({
        title: '腾小飞获取中...'
      })
      if (num >= 20) {
        wx.hideLoading();
        clearInterval(timer);
        wx.redirectTo({
          url: '../../pages/result/result',
        })
      }
      if (cnt >= 20) cnt = 0;
      thisPage.setData({
        imgSrc: thisPage.data.imgSetC[cnt],
      })
      cnt ++;
      num ++;
      app.globalData.imgId = cnt;
    }, 100)
  },

  imgDraw: function() {
    console.log('ha')
  },

  imgSize: function (e) {
    wx.getImageInfo({
      src: this.data.imgSetC[cnt],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
        app.globalData.imgWidth = res.width
        app.globalData.imgHeight = res.height
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },

})