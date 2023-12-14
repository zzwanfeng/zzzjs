/**
 * 计算数组平均值
 * @returns
 */
var average = function average(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }) / arr.length;
};
export default average;