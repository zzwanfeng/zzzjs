/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */

var arrayToListNode = function arrayToListNode(arr) {
  var len = arr.length;
  if (!len) {
    return undefined;
  }
  var node = {
    data: arr[len - 1]
  };
  for (var i = len - 2; i >= 0; i--) {
    node = {
      data: arr[i],
      next: node
    };
  }
  return node;
};
export default arrayToListNode;