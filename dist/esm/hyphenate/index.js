/**
 * 驼峰命名转横线命名
 * @param str
 * @returns
 */
function hyphenate(str) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  var hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, "".concat(flag, "$1")).toLowerCase();
}
export default hyphenate;