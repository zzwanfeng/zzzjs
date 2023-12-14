/**
 *
 * @param arr 求和数组
 * @returns 求和的结果
 */
function sum(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
export default sum;