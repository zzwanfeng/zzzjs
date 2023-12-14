import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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