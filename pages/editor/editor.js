// pages/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'index': 0,
    'value': ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index = options.index;
    var value = options.value === false ? '' : options.value;
    this.setData({
      index: index,
      value: value,
    })
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

  onBlur: function (e) {
    this.setData({
      value: e.detail.value
    })
  },

  backAndSave: function () {
    var self = this;
    setTimeout(function () {
      var index = parseInt(self.data.index);
      var value = self.data.value;
      var arr = getCurrentPages();
      console.log('index: ' + index)
      console.log('value: ' + value)
      console.log(arr.length)
      console.log('arr: ' + arr[arr.length - 2].__route__)
      if (arr[arr.length - 2].__route__ == "pages/exam/exam") {
        wx.navigateBack({
          delta: 1,
          success: res => {
            arr[arr.length - 2].setData({
              currentIndex: index,
              itemUserAnswer: value,
            })
            arr[arr.length - 2].updateSingleOption(value);
          }
        })
      }
    }, 100)
  }
})