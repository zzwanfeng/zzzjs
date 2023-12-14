import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
/**
 * 计算指定字符在字符串中出现的次数
 */
var designateRepeat = function designateRepeat(data, ch) {
  return _toConsumableArray(data).filter(function (item) {
    return item === ch;
  }).length;
};
export default designateRepeat;