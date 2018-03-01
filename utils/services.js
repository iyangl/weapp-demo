var Mock = require('./mock.js')
var wxRequest = require('./wxApi.js')


function mockExamList(type, fun) {
  setTimeout(()=>{
    var res = Mock.mock({
      // 属性 data 的值是一个数组，其中含有 1 到 10 个元素
      'data|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'status': type,
        'title': '时间很长的考试',
        'start|+1345312': 1519882942000,
        'end|+465856': 1599882942000,
      }]
    });
    fun(res);
  },1000)
}

module.exports = {
  mockExamList: mockExamList
}