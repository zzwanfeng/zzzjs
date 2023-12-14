import isObjEqual from "../isObjEqual";
var objConst = '[object Object]';

/**
 * 计算数组中重复元素以及重复元素的次数
 * @param data
 */
var arrayRepeat = function arrayRepeat(data) {
  var res = {};
  var flag = true;
  data.forEach(function (ele) {
    var type = Object.prototype.toString.call(ele);
    var element = ele;
    if (type === '[object String]') {
      element = JSON.stringify(ele);
    } else if (type === objConst) {
      for (var key in res) {
        var resKey = JSON.parse(key);
        var resType = Object.prototype.toString.call(resKey);
        if (resType === objConst) {
          element = isObjEqual(ele, resKey) ? key : JSON.stringify(ele);
          flag = false;
        }
      }
      if (flag) {
        element = JSON.stringify(ele);
      }
    }
    var count = res[element];
    if (count === undefined || count === null) {
      res[element] = 1;
    } else {
      res[element] = count + 1;
    }
  });
  return res;
};
export default arrayRepeat;