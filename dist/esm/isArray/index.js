/**
 *
 * @param any
 * @returns
 */
var isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};
export default isArray;