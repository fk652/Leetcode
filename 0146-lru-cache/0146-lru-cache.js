// take advantage of JavaScript Map class
// for O(1) insertions, deletions, and lookups

// Map also keeps track of items in insertion order, 
// so the LRU item is the first key if we need to remove it

// and for pushing items to the front in O(1) time, 
// we can simply delete and reinsert the key/value pair again
// note that updating a key won't push it the front, so we have to delete and reinsert

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    } else if (this.capacity === this.cache.size) {
        const lruKey = this.cache.keys().next().value;
        this.cache.delete(lruKey);
    }

    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */