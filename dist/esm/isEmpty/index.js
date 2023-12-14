/**
 *
 * @param obj
 * @returns
 */
var isEmpty = function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
};
export default isEmpty;