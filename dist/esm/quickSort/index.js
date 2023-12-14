import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import isArray from "../isArray";
/**
 * 对象数组、普通数组快速排序
 * @param arr
 * @param arrKey
 * @returns
 */
function quickSort(arr, key) {
  if (isArray(arr)) {
    var result = arr;
    if (result.length <= 1) {
      return result;
    }
    var pivotIndex = Math.floor(result.length / 2);
    var pivot = result[pivotIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < result.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if ((key ? result[i][key] : result[i]) <= (key ? pivot[key] : pivot)) {
        left.push(result[i]);
      } else {
        right.push(result[i]);
      }
    }
    var resultArr = [].concat(_toConsumableArray(quickSort(left, key)), [pivot], _toConsumableArray(quickSort(right, key)));
    return resultArr;
  } else throw Error('数据格式错误');
}
export default quickSort;