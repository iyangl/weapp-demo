var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'qIndexs': [],
    'state': true,
    'hidden': false,
    'isfull': false,
    'canRichText': wx.canIUse('rich-text'),
    'paper': {},
    'currentIndex': 0,
    'q_type': '',
    'q_item': {},
    'pre': '<上一题',
    'next': '下一题>',
    'totalCount': '',
    'downCount': '',
    'itemUserAnswer': '',
    'answerList': [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    app.service.mockExamPaper(res => {
      console.log(res)
      var indexs = Array.apply(null, Array(res.topics.length)).map(function (item, i) {
        return i + 1;
      });
      self.setData({
        paper: res,
        q_type: self.getStringByType(res.topics[0].topic_type),
        q_item: res.topics[0],
        totalCount: res.topics.length,
        downCount: 0,
        qIndexs: indexs
      })
    })
  },
  // 显示/隐藏序号列表
  indexLocation: function () {
    var state = !this.data.state
    console.log(state)
    this.setData({
      state: state,
      hidden: false
    })
  },
  // 点击灰色蒙板隐藏序号列表(未完成)
  hidebg: function () {
    var state = !this.data.state
    this.setData({
      state: state
    })
  },
  // 返回类型说明
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
  },
  // 上一题
  pre: function (e) {
    var index = this.data.currentIndex - 1;
    this.update(index)
  },
  // 下一题 
  next: function (e) {
    var index = this.data.currentIndex + 1;
    this.update(index)
  },
  // 点击序列号列表选题
  indexToLocation: function (e) {
    var index = e.currentTarget.dataset.index;
    this.update(index)
  },
  // 根据需要显示的index，更新题目信息
  update(index) {
    var total = this.data.totalCount;
    if (index >= total) {
      return;
    }
    if (index < 0) {
      return;
    }
    var paper = this.data.paper;
    var next = index === total - 1 ? '提交' : '下一题>';
    // 单选判断条件
    var answerList = this.data.answerList;
    var itemUserAnswer = app.util.isEmptyObject(answerList[index]) ? '' : answerList[index];
    this.setData({
      currentIndex: index,
      q_item: paper.topics[index],
      q_type: this.getStringByType(paper.topics[index].topic_type),
      next: next,
      itemUserAnswer: itemUserAnswer,
    })
  },
  // (废弃，想不出好的办法实现多选)选中题目答案
  onSingleOptionClick: function (e) {
    var index = this.data.currentIndex;
    var answerList = this.data.answerList;
    var itemUserAnswer = e.currentTarget.dataset.itemAnswer;
    answerList[index] = itemUserAnswer
    console.log(answerList)
    this.setData({
      itemUserAnswer: itemUserAnswer,
      answerList: answerList,
    })
  },

  // 选中题目答案(可以多选，里面大量数据操作，等一个更好的实现方案)
  onMultiOptionClick:function(e) {
    var currentIndex = this.data.currentIndex;
    var itemIndex = e.currentTarget.dataset.itemIndex;
    var itemChecked = e.currentTarget.dataset.itemChecked;
    var paper = this.data.paper;
    paper.topics[currentIndex].topic_options[itemIndex].checked = itemChecked;
    this.setData({
      paper: paper,
    })
    // 不调用update方法会导致js内值改变，但页面绑定的值未改变，因为页面没有直接引用到paper变量
    this.update(currentIndex)
  }
})