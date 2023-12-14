import { repeat } from "../index";
var dataDesensitizationMap = {
  idCard: function idCard(data) {
    return data.replace(/(\d{2})\d{14}(\w{2})/, '$1' + repeat('*', 14) + '$2');
  },
  phone: function phone(data) {
    return data.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  },
  bankCard: function bankCard(data) {
    return data.replace(/(\d{4})\d{10}(\w{4})/, '$1' + repeat('*', 10) + '$2');
  },
  address: function address(data) {
    return data.replace(/(\S{2})\S*/, '$1' + repeat('*', data.length - 2));
  },
  custom: function custom(data, begin, desensitization) {
    var end = data.length - begin - desensitization;
    var regexp = RegExp("(\\d{" + begin + "})\\d{" + desensitization + "}(\\w{" + end + "})");
    return data.replace(regexp, '$1' + repeat('*', desensitization) + '$2');
  },
  fixPhone: function fixPhone(data) {
    return data.replace(/(\w{3}-)\w*/, '$1' + repeat('*', data.length - 4));
  },
  email: function email(data) {
    return data.replace(/(\w?)(\w+)(\w)(@\w+\.[a-z]+(\.[a-z]+)?)/, '$1****$3$4');
  },
  username: function username(data) {
    return data.replace(/(\S)(\S*)/, '$1' + repeat('*', data.length - 1));
  }
};
var dataDesensitization = function dataDesensitization(des, data) {
  var begin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var desensitization = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (des === 'custom') {
    return dataDesensitizationMap['custom'](data, begin, desensitization);
  } else if (dataDesensitizationMap[des]) {
    return dataDesensitizationMap[des](data);
  } else {
    throw Error('请输入正确的脱敏类型');
  }
};
export default dataDesensitization;