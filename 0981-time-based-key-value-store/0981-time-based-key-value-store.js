
// can use a simple JavaScript object/hash for the key-value store
// the value is an array of [timestamp, value] pairs

// assume values are set in timestamp order (sorted by timestamp ascending)

// so we can use binary search when looking for a value by timestamp
// typical b-search searching for the target timestamp, or the highest timestamp < target
// go until low > high, where high is the highest possible timestamp
// return the mid value during search, if exact timestamp was found
// if final high is out of bounds, meaning no such timestamp exists, then return ""
// otherwise return the value at that high index

var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    key in this.store ? this.store[key].push([timestamp, value])
                      : this.store[key] = [[timestamp, value]];
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(key in this.store)) return "";

    const values = this.store[key];
    let low = 0;
    let high = values.length - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const [midTime, midValue] = values[mid];

        if (timestamp === midTime) {
            return midValue;
        } else if (timestamp > midTime) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return values[high] ?  values[high][1] : "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */