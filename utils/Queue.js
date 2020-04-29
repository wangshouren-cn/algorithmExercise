module.exports = class Queue {
  constructor() {
    this.stack = []
  }
  //返回队列头元素并删除
  poll() {
    return this.stack.shift()
  }
  //入队列
  add(x) {
    this.stack.push(x)
    return this
  }
  //返回队列头元素
  peek() {
    return this.stack[0]
  }
  size() {
    return this.stack.length
  }
  isEmpty() {
    return this.stack.length < 1
  }
}
