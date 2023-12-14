import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
/**
 * @param circle 描述圆形信息的对象，包含 center 属性和 r 属性，center 表示圆心的坐标，r 表示圆的半径。
 * @param x 该点的 x 轴坐标
 * @param y 该点的 y 轴坐标
 * @returns 如果该点在圆内，返回 true，否则返回 false。
 */
function judgePointInCircle(circle, x, y) {
  if (circle && circle.center && circle.center.length === 2 && typeof circle.r === 'number' && typeof x === 'number' && typeof y === 'number') {
    var center = circle.center,
      r = circle.r;
    var _center = _slicedToArray(center, 2),
      centerX = _center[0],
      centerY = _center[1];
    var sumOfSquares = Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2);
    var distanceToCircle = Math.sqrt(sumOfSquares);
    return distanceToCircle <= r;
  } else {
    throw new Error('Please enter correct parameters.');
  }
}
export default judgePointInCircle;