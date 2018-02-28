//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    selectCompleteState: 0,
    examList: ['', '', '', '', '', '', '', '', '', '', '',],
  },
  selectorTap: function(e) {
    var state = e.currentTarget.dataset.state;
    if(!util.isEmptyObject(state)) {
      this.setData({
        selectCompleteState: state
      })
    }
  },
})
