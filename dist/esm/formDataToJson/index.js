/**
 * 将 FormData 转换成 JSON
 * @param data: 为 FormData
 */
var formDataToJson = function formDataToJson(data) {
  var json = {};
  // 将表单数据转换为 JSON
  data.forEach(function (val, key) {
    json[key] = val;
  });
  return JSON.stringify(json);
};
export default formDataToJson;