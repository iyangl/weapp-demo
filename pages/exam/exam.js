var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'qIndexs': [],
    'state': false,
    'hidden': false,
    'isfull': false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var indexs = Array.apply(null, Array(65)).map(function (item, i) {
      return i + 1;
    });
    this.setData({
      qIndexs: indexs
    })
  },

  indexLocation:function() {
    var state = !this.data.state
    console.log(state)
    this.setData({
      state: state,
      hidden: false
    })
  },
  hidebg: function() {
    var state = !this.data.state
    this.setData({
      state: state
    })
  }
})