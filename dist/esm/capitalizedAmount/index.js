var capitalizedAmount = function capitalizedAmount(amount) {
  try {
    if (typeof amount === 'string') {
      amount = parseFloat(amount.replaceAll(',', ''));
    }
    if (amount == null || isNaN(amount)) throw new Error('不是有效的金额！');
    var result = '';
    if (amount < 0) {
      result = '欠';
      amount = Math.abs(amount);
    }

    // 金额不能超过千亿以上
    if (amount >= 10e11) throw new Error('计算金额过大！');
    amount = String(amount.toFixed(2));
    var digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var units = ['', '拾', '佰', '仟'];
    var bigUnits = ['', '万', '亿'];
    var decimalUnits = ['角', '分'];
    var amountArray = amount.split('.');
    var integerPart = amountArray[0];
    var decimalPart = amountArray[1];

    // 整数部分
    if (integerPart !== '0') {
      integerPart = integerPart.split('').map(Number);
      var levels = integerPart.reverse().reduce(function (prev, item, index) {
        var _prev$;
        var level = (prev === null || prev === void 0 || (_prev$ = prev[0]) === null || _prev$ === void 0 ? void 0 : _prev$.length) < 4 ? prev[0] : [];
        var value = !item ? digits[item] : digits[item] + units[index % 4];
        level.unshift(value);
        if (level.length === 1) {
          prev.unshift(level);
        } else {
          prev[0] = level;
        }
        return prev;
      }, []);
      result += levels.reduce(function (prev, item, index) {
        var _level = bigUnits[levels.length - index - 1];
        var _item = item.join('').replace(/(零)\1+/g, '$1');
        if (_item === '零') {
          _level = '';
          _item = '';
        } else if (_item.endsWith('零')) {
          _item = _item.slice(0, _item.length - 1);
        }
        return prev + _item + _level;
      }, '');
    } else {
      result += '零';
    }
    result += '元';

    // 小数部分
    if (decimalPart !== '00') {
      if (result === '零元') result = '';
      for (var i = 0; i < decimalPart.length; i++) {
        var digit = parseInt(decimalPart[i]);
        if (digit !== 0) {
          result += digits[digit] + decimalUnits[i];
        }
      }
    } else {
      result += '整';
    }
    return result;
  } catch (error) {
    return error.message;
  }
};
export default capitalizedAmount;