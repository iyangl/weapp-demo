var Mock = require('./mock.js')
var wxRequest = require('./wxApi.js')


function mockExamList(type, fun) {
  var min, max, cur
  setTimeout(()=>{
    var res = Mock.mock({
      // 属性 data 的值是一个数组，其中含有 1 到 10 个元素
      'data|4-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'status': type,
        'title': '@ctitle(8,20)',
        'start|+1345312': '@_randomTime()',
        'end|+465856': '@_randomTime()',
        'score': '@int(0,10)',
        'passLine': '@int(50,100)',
        'canCheckAnswer': 'bool(min, max, cur)',
        'duration': '30分钟'
      }]
    });
    fun(res);
  },1000)
}


function mockExamPaper(fun) {
  setTimeout(() => {
    var res = Mock.mock({
      'title': '@ctitle(8,20)',
      'duration': '不限时',
      'score': '@int(0,10)',
      'passLine': '@int(50,100)',
      'topics|20-30': [{
        'topic_type': '@q_type()',
        'topic_title': '@ctitle(14,30)',
        'topic_score': '@int(1,10)',
        'topic_user_answer':'',
        'topic_options|40-50': [{
          'option': '@ctitle(14,30)',
          'itemId': '@string(undefined,20,20)',
        }]
      }],
    });
    fun(res);
  }, 1000)
}

module.exports = {
  mockExamList: mockExamList,
  mockExamPaper: mockExamPaper
}