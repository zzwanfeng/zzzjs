import { parse } from 'qs';
function url2obj() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '?a=1&b=2&c=3';
  if (params.indexOf('?') > -1) {
    params = params.slice(1);
  }
  return parse(params);
}
export default url2obj;