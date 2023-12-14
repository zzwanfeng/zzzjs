import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
/**
 * @param center 表示圆心的 x, y 坐标
 * @param r 表示圆的半径
 * @returns 返回圆内的任意坐标
 */

function coordinatesInCircle(center) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (center && Array.isArray(center) && center.length === 2) {
    var _center = _slicedToArray(center, 2),
      xAxis = _center[0],
      yAxis = _center[1],
      xValueRange = [xAxis - r, xAxis + r],
      yValueRange = [yAxis - r, yAxis + r];
    var pointX, pointY;
    while (true) {
      // 生成大于等于 xValueRange[0]，小于等于 xValueRange[1] 的 x 坐标
      pointX = Math.floor(Math.random() * (xValueRange[1] - xValueRange[0] + 1)) + xValueRange[0];
      // 生成大于等于 yValueRange[0]，小于等于 yValueRange[1] 的 y 坐标
      pointY = Math.floor(Math.random() * (yValueRange[1] - yValueRange[0] + 1)) + yValueRange[0];

      // 距离圆心的长度
      var sumOfSquares = Math.pow(pointX - xAxis, 2) + Math.pow(pointY - yAxis, 2);
      var distanceToCircle = Math.sqrt(sumOfSquares);
      if (distanceToCircle <= r) {
        return [pointX, pointY];
      }
    }
  } else {
    throw new Error('Please enter correct parameters.');
  }
}
export default coordinatesInCircle;