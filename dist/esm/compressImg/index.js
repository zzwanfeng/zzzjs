/**
 * 压缩图片
 * @param img 被压缩的img对象
 * @param type 压缩后转换的文件类型
 * @param mx 触发压缩的图片最大宽度限制
 * @param mh 触发压缩的图片最大高度限制
 * @param quality 图片质量
 */
function compressImg(img, type, mx, mh) {
  var quality = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  return new Promise(function (resolve) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var originWidth = img.width,
      originHeight = img.height;
    // 最大尺寸限制
    var maxWidth = mx;
    var maxHeight = mh;
    // 目标尺寸
    var targetWidth = originWidth;
    var targetHeight = originHeight;
    if (originWidth > maxWidth || originHeight > maxHeight) {
      if (originWidth / originHeight > 1) {
        // 宽图片
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
      } else {
        // 高图片
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
      }
    }
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    context === null || context === void 0 || context.clearRect(0, 0, targetWidth, targetHeight);
    // 图片绘制
    context === null || context === void 0 || context.drawImage(img, 0, 0, targetWidth, targetHeight);
    canvas.toBlob(function (blob) {
      resolve(blob);
    }, type || 'image/png', quality);
  });
}
export default compressImg;