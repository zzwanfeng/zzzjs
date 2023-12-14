/**
 * 对象转url参数
 * @param {*} data
 * @param {*} isPrefix
 */

export var obj2url = function obj2url(data, isPrefix) {
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      return 1; // continue
    }
    if (value.constructor === Array) {
      value.forEach(function (_value) {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value));
      });
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };
  for (var key in data) {
    if (_loop(key)) continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
};
export default obj2url;