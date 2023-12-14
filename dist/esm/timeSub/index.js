/**
 * 计算两个时间的差
 * @param start：开始时间
 * @param end：结束时间
 */
var timeSub = function timeSub(start, end) {
  var startDate = new Date(start);
  var endDate = new Date(end);
  var date = endDate.getTime() - startDate.getTime();
  var misSecond = Math.floor(date);
  return misSecond;
};
export default timeSub;