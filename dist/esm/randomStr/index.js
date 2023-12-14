/**
 * 生成指定个数的随机字符串
 * @param n
 * @param str
 * @returns
 */
function randomStr(n) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'abcdefghigklmnopqrstuvexyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-+%$';
  var res = '';
  var len = str.length;
  for (var i = 0; i < n; i++) {
    res += str[Math.floor(Math.random() * len)];
  }
  return res;
}
export default randomStr;