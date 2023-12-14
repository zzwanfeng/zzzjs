/**
 * 获取选中的文本
 * @returns
 */
var getSelection = function getSelection() {
  return window.getSelection().toString();
};
export default getSelection;