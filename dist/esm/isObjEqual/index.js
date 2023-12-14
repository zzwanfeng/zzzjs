function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * 判断两个对象是否相等
 */
var isObjEqual = function isObjEqual(obj1, obj2) {
  /**
   * 判断类型是否相同
   */
  if (_typeof(obj1) !== _typeof(obj2)) {
    return false;
  }

  /**
   * 如果是基本类型或者 null，直接判断值是否相等
   */
  if (!obj1 || !obj2 || _typeof(obj1) !== 'object') {
    return obj1 === obj2;
  }

  /**
   * 遍历 obj1 的所有属性
   */
  for (var key in obj1) {
    if (!isObjEqual(obj1[key], obj2[key])) {
      return false;
    }

    /**
     * 如果 obj2 没有 obj1 的这个属性
     */
    if (!Reflect.has(obj2, key)) {
      return false;
    }
  }

  /**
   * 遍历 obj2 的所有属性
   */
  for (var _key in obj2) {
    /**
     * 如果 obj1 没有 obj2 的这个属性
     */
    if (!(_key in obj1)) {
      return false;
    }
  }

  /**
   * 所有属性都相等，则两个对象相等
   */
  return true;
};
export default isObjEqual;