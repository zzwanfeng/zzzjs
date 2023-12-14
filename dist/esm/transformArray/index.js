import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
/**
 * @param tree 树结构
 * @param childField 每个节点中子树的字段名
 * @returns 扁平数组
 */

function transformArray() {
  var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var childField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  // 层序遍历
  var treeNodes = [];
  var res = [];
  var _iterator = _createForOfIteratorHelper(tree),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rootNode = _step.value;
      treeNodes.push(rootNode);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  while (treeNodes.length > 0) {
    var node = treeNodes.shift();
    if (node[childField] && node[childField].length > 0) {
      var _iterator2 = _createForOfIteratorHelper(node[childField]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var childNode = _step2.value;
          treeNodes.push(childNode);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    delete node[childField];
    res.push(node);
  }
  return res;
}
export default transformArray;