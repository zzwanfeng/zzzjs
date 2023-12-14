/**
 * 将扁平数组转换成树结构
 * @param list 扁平数组
 * @param options 树解析map
 * @returns
 */
function transformTree() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    keyField: 'id',
    childField: 'children',
    parentField: 'pid'
  };
  var keyField = options.keyField,
    childField = options.childField,
    parentField = options.parentField;
  var tree = [];
  var record = {};
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i];
    var id = item[keyField];
    if (!id) {
      continue;
    }
    if (record[id]) {
      item[childField] = record[id];
    } else {
      item[childField] = record[id] = [];
    }
    if (item[parentField]) {
      var parentId = item[parentField];
      if (!record[parentId]) {
        record[parentId] = [];
      }
      record[parentId].push(item);
    } else {
      tree.push(item);
    }
  }
  return tree;
}
export default transformTree;