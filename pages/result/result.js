// pages/canvas/canvas.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    CanShow: false,
    userInfo: {},
    hasUserInfo: false,
    hidInfo: false,
    iconUrl: null,    
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgSetC: [
      '../../image/1.png',
      '../../image/2.png',
      '../../image/3.png',
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
      '../../image/21.png',
    ],
    sentences: [
      '不小心在科创空间滑倒压死了一只蟑螂',
      '收了光华楼的妖风',
      '破解了五角场的五芒星法阵',
      '带室友一起上了王者',
      '减肥成功后失去了超能力',
      '成功感化了一只沙雕',
      '使用超能力抢到了张建国老师的数分课',
      '没有什么故事，除了绩点4.0',
      '开学第一天就要到了男/女神的微信',
      '你叫破喉咙ta也不会来救你',
      '和复旦喵星人一见钟情',
      '热心的为南区外卖小哥指错了路',
      '在南食拯救了菜里的小青虫',
      '先导考试之后飞到光华楼顶层吹风',
      '只花了5秒就从宿舍抵达澡堂战场',
      'debug了五个小时终于做出来了程设',
      '开了挂体育喜得A，下学期免锻',
      '是宿舍里唯一的全家尊享版会员',
      'ta的肌肉就是吃南食长出来的',
      '在表白墙上被@了多次，表示很无奈',
      '今天早上喂食了一只可爱的复旦喵',
      'ta出手拯救了对面宿舍的单身狗',
      '经常上课找不到小黄所以步行',
    ],
    nameSet: [
      '钢铁侠',
      '尼克弗瑞',
      '星爵',
      '火箭浣熊',
      '美国队长',
      '灭霸',
      '格鲁特',
      '毁灭者',
      '绯红女巫',
      '黑寡妇',
      '洛基',
      '鹰眼',
      '绿巨人',
      '幻视',
      '蜘蛛侠',
      '死侍',
      '黑豹',
      '蚁人',
      '奇异博士',
      '雷神',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let thisPage = this;
    /*
    let promise1 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: '../../image/background.png',
        success: function (res) {
          console.log(res)
          resolve(res);
        }
      })
    });

    let promise2 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: thisPage.data.imgSetC[app.globalData.imgId],
        success: function (res) {
          console.log(res)
          resolve(res);
        }
      })
    });
    */
    Promise.all([
      //promise1, promise2
    ]).then(res => {

      const ctx = wx.createCanvasContext('shareImg')

      //主要就是计算好各个图文的位置
      ctx.drawImage('../../image/background.png', 0, 0, 525, 669)
      //ctx.drawImage('../../' + res[1].path, 0, 0, 612, 780.5)
      //ctx.drawImage(thisPage.data.userInfo.avatarUrl, 0, 80.5, 150, 150)
      //ctx.drawImage(thisPage.data.imgSetC[app.globalData.imgId], (525 - app.globalData.imgWidth) / 2 - 30, 10, 400 / app.globalData.imgHeight * app.globalData.imgWidth, 400)
      //console.log(app.globalData.imgWidth)
      //console.log(app.globalData.imgHeight)
      ctx.drawImage(thisPage.data.imgSetC[app.globalData.imgId], 100, 10, 300, 400)

      //ctx.arc(100, 700, 60, 0, Math.PI * 2, false)
      //ctx.clip()
      
      ctx.setFillStyle('gray')

      ctx.setFontSize(40)
      ctx.fillText('"' + app.globalData.testName.toString() + '"', 30, 500)
      ctx.fillText('化身为', 130, 550)
      ctx.setFontSize(50)
      ctx.fillText(thisPage.data.nameSet[app.globalData.imgId], 270, 550)
      ctx.setFontSize(28)
      ctx.fillText(thisPage.data.sentences[Math.floor(Math.random() * 22)], 15, 620)
  
      ctx.stroke()
      ctx.draw()
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      try {

        var bmi = wx.getStorageSync("USERBMI")
        var flag = wx.getStorageSync("FLAG")
        if (flag != true) flag = false;
        this.setData({
          motto: bmi,
          CanShow: flag
        })
        // wx.clearStorageSync()
      } catch (e) {

      }
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    /*
    wx.downloadFile({
      url: 'http://wx.qlogo.cn',
      success: res => {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode == 200) {
          this.setData({
            iconUrl: res.tempFilePath//将下载下来的地址给data中的变量变量
          });
        }
      }, fail: res => {
        console.log(res);
      }
    })
    */
  },


  /**
   * 生成分享图
  */
  share: function () {
    var that = this
    wx.showLoading({
      title: '努力生成中...',
      x: 10,
      y: 10,
    })
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 545,
      height: 771,
      destWidth: 545,
      destHeight: 771,
      canvasId: 'shareImg',
      success: function (res) {
        console.log(res.tempFilePath);
        that.setData({
          prurl: res.tempFilePath,
          hidden: false,
          hidInfo: true,
        })
        wx.hideLoading()
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 保存到相册
  */
  save: function () {
    var that = this
    //生产环境时 记得这里要加入获取相册授权的代码
    wx.saveImageToPhotosAlbum({
      filePath: that.data.prurl,
      success: function (res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好哒',
          confirmColor: '#72B9C3',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              that.setData({
                hidden: true
              })
            }
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })

  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
