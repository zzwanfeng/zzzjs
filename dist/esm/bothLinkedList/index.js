function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */
var Node = /*#__PURE__*/_createClass(function Node(data) {
  _classCallCheck(this, Node);
  _defineProperty(this, "data", void 0);
  _defineProperty(this, "next", void 0);
  _defineProperty(this, "prev", void 0);
  this.data = data;
});
var BothLinkedList = /*#__PURE__*/function () {
  function BothLinkedList() {
    _classCallCheck(this, BothLinkedList);
    _defineProperty(this, "head", void 0);
    _defineProperty(this, "tail", void 0);
    _defineProperty(this, "size", 0);
  }
  _createClass(BothLinkedList, [{
    key: "insertHead",
    value:
    /**
     * 插入元素 采用尾插法
     * @param data
     */
    function insertHead(data) {
      var node = new Node(data);
      if (this.size === 0) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }

    /**
     * 根据索引插入元素
     * @param data
     * @param index
     */
  }, {
    key: "insertIndex",
    value: function insertIndex(data, index) {
      if (index < 0 || index > this.size) {
        throw new Error('要插入的索引已经超过了链表的最大长度');
      }
      var node = new Node(data);
      /**
       * 如果链表为空，直接插入
       */
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      }
      /**
       * 如果 index === 0 则插入的位置是头
       * 如果 index === this.size 则插入的位置是尾
       */
      if (index === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else if (index === this.size) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        var current = this.head;
        for (var i = 0; i < index - 1; i++) {
          current = current.next;
        }
        node.prev = current;
        node.next = current.next;
        current.next.prev = node;
        current.next = node;
      }
      this.size++;
    }

    /**
     * 删除元素(根据元素值进行删除)
     */
  }, {
    key: "deleteData",
    value: function deleteData(data) {
      if (this.size === 0) {
        throw Error('双向链表为空，不能删除');
      }
      var current = this.head;
      while (current) {
        if (current.data === data) {
          if (this.size === 1) {
            this.head = undefined;
            this.tail = undefined;
          } else if (current === this.head) {
            this.head = this.head.next;
            this.head.prev = undefined;
          } else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = undefined;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.size--;
          return;
        }
        current = current.next;
      }
    }

    /**
     * 根据元素索引删除
     * @param index
     */
  }, {
    key: "deleteFrom",
    value: function deleteFrom(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('双向链表越界');
      }
      if (this.size === 1) {
        this.head = undefined;
        this.tail = undefined;
      } else if (index === 0) {
        this.head = this.head.next;
        this.head.prev = undefined;
      } else if (index === this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = undefined;
      } else {
        var current = this.head;
        for (var i = 0; i < index; i++) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.size--;
    }

    /**
     * 正向遍历
     */
  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }

    /**
     * 反向遍历
     */
  }, {
    key: "getTail",
    value: function getTail() {
      return this.tail;
    }

    /**
     * 获取链表长度
     */
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }

    /**
     * 更具索引，获取元素值
     * @param index
     */
  }, {
    key: "getData",
    value: function getData(index) {
      if (index < 0 || index >= this.size) {
        throw Error('要查找的索引已经超过了链表的最大长度');
      }
      var current = this.head;
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    }
  }]);
  return BothLinkedList;
}();
export default BothLinkedList;