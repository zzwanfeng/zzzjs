function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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