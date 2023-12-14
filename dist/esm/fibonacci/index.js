/**
 *
 * @param n
 * @returns 返回第n个斐波那契数
 */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  var n2 = 0,
    n1 = 1,
    res = 0;
  for (var i = 2; i <= n; i++) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
  }
  return res;
}
export default fibonacci;