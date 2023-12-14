/**
 *  支持过期时间的localStorage库
 */
var store = {
  preId: 'zzz-',
  timeSign: '|-door-|',
  status: {
    SUCCESS: 0,
    FAILURE: 1,
    OVERFLOW: 2,
    TIMEOUT: 3
  },
  storage: localStorage || window.localStorage,
  getKey: function getKey(key) {
    return this.preId + key;
  },
  set: function set(key, value, time, cb) {
    var _status = this.status.SUCCESS,
      _time;
    var _key = this.getKey(key);
    // 设置失效时间，未设置时间默认为一个月
    try {
      _time = time ? new Date(time).getTime() || time.getTime() : new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    } catch (e) {
      _time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    }
    try {
      this.storage.setItem(_key, _time + this.timeSign + value);
    } catch (e) {
      _status = this.status.OVERFLOW;
    }
    cb && cb.call(this, _status, _key, value);
  },
  get: function get(key, cb) {
    var _key = this.getKey(key),
      timeSignLen = this.timeSign.length,
      that = this;
    var status = this.status.SUCCESS,
      value = null,
      index,
      time,
      result;
    try {
      value = that.storage.getItem(_key);
    } catch (e) {
      result = {
        status: that.status.FAILURE,
        value: null
      };
      cb && cb.call(this, result.status, result.value);
      return result;
    }
    if (value) {
      index = value.indexOf(that.timeSign);
      time = +value.slice(0, index);
      if (time > new Date().getTime() || time == 0) {
        value = value.slice(index + timeSignLen);
      } else {
        value = null, status = that.status.TIMEOUT;
        that.remove(key);
      }
    } else {
      status = that.status.FAILURE;
    }
    result = {
      status: status,
      value: value
    };
    cb && cb.call(this, result.status, result.value);
    return result;
  },
  // 删除storage，如果删除成功，返回删除的内容
  remove: function remove(key, cb) {
    var _key = this.getKey(key);
    var status = this.status.FAILURE,
      value;
    try {
      value = this.storage.getItem(_key);
    } catch (e) {
      // dosomething
    }
    if (value) {
      try {
        this.storage.removeItem(_key);
        status = this.status.SUCCESS;
      } catch (e) {
        // dosomething
      }
    }
    cb && cb.call(this, status, status > 0 ? null : value ? value.slice(value.indexOf(this.timeSign) + this.timeSign.length) : null);
  }
};
export default store;