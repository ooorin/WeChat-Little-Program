const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/swiper3.jpg',
      '../../image/swiper4.jpg',
      '../../image/swiper5.jpg',
      '../../image/swiper1.jpg',
      '../../image/swiper2.jpg',
    ],

    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    userName: '',
    nameInputComplete: false,
    inputComplete: false,
  },

  imageLoad: function (e) {
    var res = wx.getSystemInfoSync();
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight;
    this.setData({
      swiperHeight: res.windowWidth / ratio
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorageSync()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /** 
   * 获取用户姓名
  */

  getUserName: function(e){ 
    try{  
      app.globalData.testName = e.detail.value;
    this.setData({
      userName: e.detail.value,
    })
    this.setData({
      nameInputComplete: true
    })
    var fini = this.data.nameInputComplete
    if (fini) {
      if (this.data.userName != null) {
        this.setData({
          inputComplete: true
        })
      }
      else{
        this.setData({
          inputComplete: false
        })
      }
      wx.clearStorageSync()
      wx.setStorageSync("FLAG", this.data.InputComplete)
    }
    }catch(e){
      this.setData({
        userName: '',
        nameInputComplete: false,
        inputComplete: false,
      })
    }
  },
 
  testClick: function(e) {
    wx.navigateTo({
      url: '../../pages/test/test',
    })
  },

})