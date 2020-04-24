class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    //with this (if) we are checking the stack overflow.
    if (this.stackControl.length >= this.MAX_SIZE) {
      return false;
    } else {
      return true; // is true is "stack overflow"
    }
  }

  display() {
    return this.stackControl; // This have all the object! and we can use it in stack-dom!.
  }

  isEmpty() {
    // with this if statement we are checking the stack underflow.
    if (this.stackControl.length === 0) {
      return true; // is true is "Underflow".
    } else {
      return false; // is not Empty!
    }
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
