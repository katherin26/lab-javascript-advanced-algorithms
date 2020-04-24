class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    //with this (if) we are checking the Queue overflow.
    if (this.queueControl.length >= this.MAX_SIZE) {
      return false;
    } else {
      return true; //is true is QueueOverflow!!
    }
  }

  isEmpty() {
    // with this if statement we are checking the stack underflow.
    if (this.queueControl.length === 0) {
      //array length
      return true; //is true is Queue Underflow!
    } else {
      return false;
    }
  }

  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop();
    }
  }
}
