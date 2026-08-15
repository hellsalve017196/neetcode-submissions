class DynamicArray {
  constructor(capacity) {
    this.arr = new Array(capacity);
    this.capacity = capacity;
    this.length = 0;
  }

  get(i) {
    return this.arr[i];
  }

  set(i, n) {
    this.arr[i] = n;
  }

  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.arr[this.length] = n;
    this.length++;
  }

  popback() {
    this.length--;
    return this.arr[this.length];
  }

  resize() {
    this.capacity *= 2;
    const newArr = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  getSize() {
    return this.length;
  }

  getCapacity() {
    return this.capacity;
  }
}