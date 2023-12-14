import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
/**
 * @param startPos 左上顶点坐标
 * @param w 矩形的宽
 * @param h 矩形的高
 * @returns 返回矩形内的任意坐标
 */
function coordinatesInRect(startPos, w, h) {
  if (startPos && Array.isArray(startPos) && startPos.length === 2 && typeof w === 'number' && typeof h === 'number') {
    var _startPos = _slicedToArray(startPos, 2),
      x0 = _startPos[0],
      y0 = _startPos[1];
    // 生成大于等于 x0，小于等于 x0 + w 的 x 坐标
    var pointX = Math.floor(Math.random() * (w + 1)) + x0;
    // 生成大于等于 y0，小于等于 y0 + h 的 y 坐标
    var pointY = Math.floor(Math.random() * (h + 1)) + y0;
    return [pointX, pointY];
  } else {
    throw new Error('Please enter correct parameters.');
  }
}
export default coordinatesInRect;