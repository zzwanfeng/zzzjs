import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
/**
 * 定义二叉树的结构
 */
var TreeNode = /*#__PURE__*/_createClass(function TreeNode(data, left, right) {
  _classCallCheck(this, TreeNode);
  _defineProperty(this, "data", void 0);
  _defineProperty(this, "left", void 0);
  _defineProperty(this, "right", void 0);
  _defineProperty(this, "count", 0);
  _defineProperty(this, "preOrder", []);
  _defineProperty(this, "centerOrder", []);
  _defineProperty(this, "postOrder", []);
  this.data = data;
  this.left = left;
  this.right = right;
});
/**
 * 定义二叉树的操作
 */
var BinaryTree = /*#__PURE__*/function () {
  function BinaryTree() {
    _classCallCheck(this, BinaryTree);
    _defineProperty(this, "root", void 0);
    this.root = undefined;
  }
  _createClass(BinaryTree, [{
    key: "insert",
    value: function insert(data) {
      var newTreeNode = new TreeNode(data, undefined, undefined);
      if (this.root === undefined) {
        this.root = newTreeNode;
        this.root.count++;
      } else {
        var curNode = this.root;
        var parentNode = undefined;
        while (true) {
          parentNode = curNode;
          if (curNode.data > data) {
            curNode = curNode.left;
            if (!curNode) {
              parentNode.left = newTreeNode;
              this.root.count++;
              break;
            }
          } else if (curNode.data < data) {
            curNode = curNode.right;
            if (!curNode) {
              parentNode.right = newTreeNode;
              this.root.count++;
              break;
            }
          } else if (newTreeNode.data === curNode.data) {
            // 如果给定的数据再次出现，就更新计数值
            curNode.count++;
            break;
          }
        }
      }
    }

    /**
     * 根据元素值 寻找 节点
     * @param data
     */
  }, {
    key: "find",
    value: function find(data) {
      var currNode = this.root;
      while (currNode) {
        if (currNode.data == data) {
          return currNode;
        } else if (data < currNode.data) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }
      return undefined;
    }

    /**
     * 获取根节点
     */
  }, {
    key: "getRoot",
    value: function getRoot() {
      return this.root;
    }

    /**
     * 删除节点
     */
  }, {
    key: "removeNode",
    value: function removeNode(data) {
      this._removeNode(this.root, data);
    }
  }, {
    key: "_removeNode",
    value: function _removeNode(curNode, data) {
      if (curNode === undefined) {
        return undefined;
      }
      if (curNode.data === data) {
        /**
         * 左子树和右子树都为空，说明是叶子节点，可以直接删除
         */
        if (curNode.left === undefined && curNode.right === undefined) {
          return undefined;
        }
        if (curNode.left === undefined) {
          return curNode.right;
        }
        if (curNode.right === undefined) {
          return curNode.left;
        }
        /**
         * 如果两个节点都存在，则需要寻找右子树上的最小值，因为二叉树从左子树到根节点再到右子树，是从小到大排序
         */
        var tmpNode = this.getMinNode(curNode.right);
        curNode.data = tmpNode.data;
        curNode.right = this._removeNode(curNode.right, tmpNode.data);
        this.root.count--;
        return curNode;
      } else if (curNode.data > data) {
        /**
         * 如果当前节点值 > 需要寻找的 data，则需要在左子树继续寻找
         */
        curNode.left = this._removeNode(curNode.left, data);
        this.root.count--;
        return curNode;
      } else if (curNode.data < data) {
        /**
         * 如果当前节点值 < 需要寻找的 data，则需要在右子树继续寻找
         */
        curNode.right = this._removeNode(curNode.right, data);
        this.root.count--;
        return curNode;
      }
    }

    /**
     * 获取最大节点
     * @param curNode
     */
  }, {
    key: "getMaxNode",
    value: function getMaxNode() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var curNode = node;
      while (curNode.right) {
        curNode = curNode.right;
      }
      return curNode;
    }

    /**
     * 获取最小节点
     * @param curNode
     */
  }, {
    key: "getMinNode",
    value: function getMinNode() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var curNode = node;
      while (curNode.left) {
        curNode = curNode.left;
      }
      return curNode;
    }

    /**
     * 先序遍历，遍历结束之后，可以通过 bt.getRoot().preOrder 获取遍历以后的元素数组
     * @param root
     */
  }, {
    key: "preOrderTraversal",
    value: function preOrderTraversal(root) {
      if (root === undefined) {
        return undefined;
      }
      this.preOrderTraversal(root.left);
      this.root.preOrder.push(root.data);
      this.preOrderTraversal(root.right);
    }

    /**
     * 中序遍历，遍历结束之后，可以通过 bt.getRoot().centerOrder 获取遍历以后的元素数组
     * @param root
     */
  }, {
    key: "centerOrderTraversal",
    value: function centerOrderTraversal(root) {
      if (root === undefined) {
        return undefined;
      }
      this.root.centerOrder.push(root.data);
      this.centerOrderTraversal(root.left);
      this.centerOrderTraversal(root.right);
    }

    /**
     * 后序遍序遍历，遍历结束之后，可以通过 bt.getRoot().postOrder 获取遍历以后的元素数组
     * @param root
     */
  }, {
    key: "postOrderTraversal",
    value: function postOrderTraversal(root) {
      if (root === undefined) {
        return undefined;
      }
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      this.root.postOrder.push(root.data);
    }
  }]);
  return BinaryTree;
}();
export default new BinaryTree();