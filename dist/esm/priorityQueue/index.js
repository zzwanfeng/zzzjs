function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Larger = /*#__PURE__*/function (Larger) {
  Larger[Larger["FALSE"] = 0] = "FALSE";
  Larger[Larger["TRUE"] = 1] = "TRUE";
  return Larger;
}(Larger || {});
var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue(fn) {
    _classCallCheck(this, PriorityQueue);
    _defineProperty(this, "pq", void 0);
    _defineProperty(this, "_size", void 0);
    _defineProperty(this, "compare", void 0);
    this.pq = [-1];
    this._size = 0;
    this.compare = fn || this.larger;
  }
  _createClass(PriorityQueue, [{
    key: "parent",
    value: function parent(cur) {
      return cur >> 1;
    }
  }, {
    key: "left",
    value: function left(cur) {
      return cur * 2;
    }
  }, {
    key: "right",
    value: function right(cur) {
      return cur * 2 + 1;
    }
  }, {
    key: "larger",
    value: function larger(a, b) {
      return a > b ? Larger.TRUE : Larger.FALSE;
    }
  }, {
    key: "swim",
    value: function swim(i) {
      var parentIndex = this.parent(i);
      while (i > 1 && this.compare(this.pq[parentIndex], this.pq[i]) > 0) {
        // 与父元素交换
        var _ref = [this.pq[i], this.pq[parentIndex]];
        this.pq[parentIndex] = _ref[0];
        this.pq[i] = _ref[1];
        i = parentIndex;
        parentIndex = this.parent(i);
      }
    }
  }, {
    key: "sink",
    value: function sink(i) {
      while (this.left(i) <= this._size) {
        var bestIndex = this.left(i);

        // 右边的子元素比左边的子元素小或者大
        if (this.right(i) <= this._size && this.compare(this.pq[bestIndex], this.pq[this.right(i)]) > 0) {
          bestIndex = this.right(i);
        }
        if (this.compare(this.pq[bestIndex], this.pq[i]) > 0) break;
        var _ref2 = [this.pq[i], this.pq[bestIndex]];
        this.pq[bestIndex] = _ref2[0];
        this.pq[i] = _ref2[1];
        i = bestIndex;
      }
    }
  }, {
    key: "enqueue",
    value: function enqueue(ele) {
      this.pq[++this._size] = ele;
      this.swim(this._size);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this._size === 0) {
        return null;
      }
      var bestVal = this.pq[1];
      var _ref3 = [this.pq[this._size], this.pq[1]];
      this.pq[1] = _ref3[0];
      this.pq[this._size] = _ref3[1];
      this.pq.pop();
      this._size--;
      this.sink(1);
      return bestVal;
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this._size > 0 ? this.pq[1] : null;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);
  return PriorityQueue;
}();
export { PriorityQueue as default };