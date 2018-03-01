//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loading: false,
    selectCompleteState: 0,
    examList: [],
  },
  onLoad: function() {
    var self = this
    this.loadExamList()
  },
  selectorTap: function(e) {
    var state = e.currentTarget.dataset.state;
    if (!app.util.isEmptyObject(state)) {
      this.setData({
        selectCompleteState: state,
        examList: []
      })
      this.loadExamList()
    }
  },
  onReachBottom: function() {
    this.loadExamList()
  },
  loadExamList: function() {
    var loading = this.data.loading;
    if(loading == true) {
      return
    }
    var self = this;
    var list = this.data.examList;
    self.setData({
      loading: true
    })
    app.service.mockExamList(this.data.selectCompleteState, (res) => {
      var datas = res.data
      // 由于wxml中不能引用js方法，要在这里将时间戳转成日期
      for(var i = 0; i < datas.length; i++) {
        var start = app.util.time2Date(datas[i].start);
        var end = app.util.time2Date(datas[i].end);
        datas[i]['startDate'] = start;
        datas[i]['endDate'] = end;
      }
      self.setData({
        examList: list.concat(datas),
        loading: false
      })
      console.log(self.data.examList)
    })
  }
})
