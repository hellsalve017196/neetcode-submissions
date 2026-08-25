class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.arr = arr.slice();
    if (this.n > 0) this.build(0, 0, this.n - 1);
  }

  build(node, lo, hi) {
    if (lo === hi) {
      this.tree[node] = this.arr[lo];
      return;
    }
    const mid = Math.floor((lo + hi) / 2);
    this.build(2 * node + 1, lo, mid);
    this.build(2 * node + 2, mid + 1, hi);
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  query(l, r) {
    return this.queryHelper(0, 0, this.n - 1, l, r);
  }

  queryHelper(node, lo, hi, l, r) {
    if (r < lo || hi < l) return 0;
    if (l <= lo && hi <= r) return this.tree[node];
    const mid = Math.floor((lo + hi) / 2);
    return this.queryHelper(2 * node + 1, lo, mid, l, r) +
           this.queryHelper(2 * node + 2, mid + 1, hi, l, r);
  }

  update(index, val) {
    this.updateNode(0, 0, this.n - 1, index, val);
  }

  updateNode(node, lo, hi, index, val) {
    if (lo === hi) {
      this.tree[node] = val;
      this.arr[index] = val;
      return;
    }
    const mid = Math.floor((lo + hi) / 2);
    if (index <= mid) {
      this.updateNode(2 * node + 1, lo, mid, index, val);
    } else {
      this.updateNode(2 * node + 2, mid + 1, hi, index, val);
    }
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }
}