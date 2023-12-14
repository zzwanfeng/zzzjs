function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 时间格式化
 * @param time
 * @param format
 * @returns
 */
function formatDate(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YY-MM-DD hh:mm:ss';
  var date = new Date(time);
  var year = date.getFullYear(),
    month = date.getMonth() + 1,
    //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var preArr = _toConsumableArray(Array(10)).map(function (elem, index) {
    return '0' + index;
  });
  var newTime = format.replace(/YY/g, String(year)).replace(/MM/g, String(preArr[month] || month)).replace(/DD/g, String(preArr[day] || day)).replace(/hh/g, String(preArr[hour] || hour)).replace(/mm/g, String(preArr[min] || min)).replace(/ss/g, String(preArr[sec] || sec));
  return newTime;
}
export default formatDate;