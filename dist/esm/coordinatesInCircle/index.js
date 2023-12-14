function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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