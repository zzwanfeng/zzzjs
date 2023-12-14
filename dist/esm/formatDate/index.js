import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
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