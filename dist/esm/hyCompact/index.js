/**
 * 紧凑型驼峰命名转横线命名
 * @param str
 * @returns
 */
function hyCompact(str) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  var temp = str.replace(/[A-Z]{1,2}/g, function (match) {
    return flag + match.toLowerCase();
  });
  if (temp.slice(0, 1) === flag) {
    //如果首字母是大写，执行replace时会多一个-，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}
export default hyCompact;