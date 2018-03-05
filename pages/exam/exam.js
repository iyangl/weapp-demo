var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'qIndexs': [],
    'state': false,
    'hidden': false,
    'isfull': false,
    'canRichText': wx.canIUse('rich-text'),
    'paper': {},
    'currentIndex': 0,
    'q_type': '',
    'q_title': '',
    'q_score': 0,
    'q_options':[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    var indexs = Array.apply(null, Array(55)).map(function (item, i) {
      return i + 1;
    });
    this.setData({
      qIndexs: indexs
    })
    app.service.mockExamPaper(res => {
      console.log(res)
      self.setData({
        paper: res,
        q_type: self.getStringByType(res.topics[0].topic_type),
        q_title: res.topics[0].topic_title,
        q_score: res.topics[0].topic_score,
        q_options: res.topics[0].topic_options
      })
    })
  },

  indexLocation: function () {
    var state = !this.data.state
    console.log(state)
    this.setData({
      state: state,
      hidden: false
    })
  },

  hidebg: function () {
    var state = !this.data.state
    this.setData({
      state: state
    })
  },

  getStringByType: function (type) {
    var str;
    switch (type) {
      case 'SINGLE':
        str = '单选';
        break;
      case 'MULTIPLE':
        str = '多选';
        break;
      case 'JUDGEMENT':
        str = '判断';
        break;
      case 'ASCERTAIN':
        str = '改错';
        break;
      case 'FILL':
        str = '填空';
        break;
      case 'QUESTIONS':
        str = '问答';
        break;
      default:
        str = 'err'
    }
    return str;
  }
})