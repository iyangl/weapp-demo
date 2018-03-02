// pages/detail/detail.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    examInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      examInfo: JSON.parse(options.info)
    })
  },
  navigateToNextPage: function(e) {
    
  }
})