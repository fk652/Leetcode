// like a regular stack, but also keeps track of running min
// elements in the MinStack are [current min, value]

// update the min as needed when pushing a new value in
// or when pushing the first value, also use it as initial min

// the other operations can use standard array operations
// but return either the min or actual value

var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.stack.push([val, val]);
    } else { 
        const prevMin = this.stack[this.stack.length - 1][0];
        this.stack.push([Math.min(prevMin, val), val]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop()[1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */