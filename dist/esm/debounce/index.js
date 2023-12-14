/**
 *
 * @param fn 回调函数
 * @param wait 延迟时间
 * @returns
 */
function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = null;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}
export default debounce;