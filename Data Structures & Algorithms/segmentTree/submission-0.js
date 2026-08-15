class SegmentTree {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n).fill(0);
    if (this.n > 0) this.build(nums, 1, 0, this.n - 1);
  }

  build(nums, node, lo, hi) {
    if (lo === hi) {
      this.tree[node] = nums[lo];
      return;
    }
    const mid = Math.floor((lo + hi) / 2);
    this.build(nums, 2 * node, lo, mid);
    this.build(nums, 2 * node + 1, mid + 1, hi);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  update(index, val) {
    this.updateNode(1, 0, this.n - 1, index, val);
  }

  updateNode(node, lo, hi, index, val) {
    if (lo === hi) {
      this.tree[node] = val;
      return;
    }
    const mid = Math.floor((lo + hi) / 2);
    if (index <= mid) {
      this.updateNode(2 * node, lo, mid, index, val);
    } else {
      this.updateNode(2 * node + 1, mid + 1, hi, index, val);
    }
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  /**
   * @param {number} l
   * @param {number} r
   * @return {number}
   */
  query(l, r) {
    return this.queryNode(1, 0, this.n - 1, l, r);
  }

  queryNode(node, lo, hi, l, r) {
    if (r < lo || l > hi) return 0;
    if (l <= lo && hi <= r) return this.tree[node];
    const mid = Math.floor((lo + hi) / 2);
    return (
      this.queryNode(2 * node, lo, mid, l, r) +
      this.queryNode(2 * node + 1, mid + 1, hi, l, r)
    );
  }
}