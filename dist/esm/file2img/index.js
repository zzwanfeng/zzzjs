// 压缩前将file转换成img对象
function readImg(file) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    var reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(file);
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      reject(e);
    };
  });
}
export default readImg;