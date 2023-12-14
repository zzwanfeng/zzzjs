/**
 *
 * @param text 下载文本
 * @param fileName 文件名
 */
function downloadFileWithText(text) {
  var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : text.slice(0, 5);
  var eleLink = document.createElement('a');
  eleLink.download = fileName;
  var blob = new Blob([text]);
  var blobUrl = URL.createObjectURL(blob);
  eleLink.href = blobUrl;
  eleLink.click();
  eleLink.remove();
  URL.revokeObjectURL(blobUrl);
}
export default downloadFileWithText;