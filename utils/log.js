function j(obj) {
  console.log('json: '+JSON.stringify(obj))
}

function getParameterNames(fn) {
  if (typeof fn !== 'function') return [];
  var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  var code = fn.toString().replace(COMMENTS, '');
  var result = code.slice(code.indexOf('(') + 1, code.indexOf(')'))
    .match(/([^\s,]+)/g);
  return result === null
    ? []
    : result;
}

module.exports = {
  j: j
}