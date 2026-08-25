class TreeMap {
  constructor() {
    this.root = null;
  }

  insert(key, val) {
    const newNode = { key, val, left: null, right: null };
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let cur = this.root;
    while (true) {
      if (key < cur.key) {
        if (!cur.left) { cur.left = newNode; return; }
        cur = cur.left;
      } else if (key > cur.key) {
        if (!cur.right) { cur.right = newNode; return; }
        cur = cur.right;
      } else {
        cur.val = val; // update existing key
        return;
      }
    }
  }

  get(key) {
    let cur = this.root;
    while (cur) {
      if (key === cur.key) return cur.val;
      cur = key < cur.key ? cur.left : cur.right;
    }
    return -1;
  }

  getMin() {
    if (!this.root) return -1;
    let cur = this.root;
    while (cur.left) cur = cur.left;
    return cur.val;
  }

  getMax() {
    if (!this.root) return -1;
    let cur = this.root;
    while (cur.right) cur = cur.right;
    return cur.val;
  }

  remove(key) {
    this.root = this._removeNode(this.root, key);
  }

  _removeNode(node, key) {
    if (!node) return null;
    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.key = successor.key;
      node.val = successor.val;
      node.right = this._removeNode(node.right, successor.key);
    }
    return node;
  }

  getInorderKeys() {
    const result = [];
    const inorder = (node) => {
      if (!node) return;
      inorder(node.left);
      result.push(node.key);
      inorder(node.right);
    };
    inorder(this.root);
    return result;
  }
}