// 判断是否是有效的数字
var judgeIsNumber = function judgeIsNumber(value) {
  return typeof value === 'number' && !isNaN(value) && Math.abs(value) !== Infinity;
};

/**
 * 将值转换为百分数
 * @param value 任何值
 * @param precision 小数位
 */
function formatPercent(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var result = '0';
  if (judgeIsNumber(value) && value !== 0) {
    result = value % 1 === 0 ? "".concat(value * 100) : (value * 100).toFixed(precision);
  }
  return "".concat(result, "%");
}
export default formatPercent;