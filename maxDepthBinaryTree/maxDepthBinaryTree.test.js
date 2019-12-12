const maxDepth = require("./maxDepthBinaryTree.js");

describe("maxDepth", () => {
  it("Should return the max depth of a binary tree", () => {
    const Node = function(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    };

    let tree = new Node(3);
    tree.left = new Node(9);
    tree.right = new Node(20);
    tree.right.left = new Node(15);
    tree.right.right = new Node(7);

    expect(maxDepth(tree)).toBe(3);
  });
});
