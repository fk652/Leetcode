/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// count up each number using a count hash
// sort the nums by their counts in decreasing order
// and return the first k nums
// worst time is O(n*log(n)) if amount of unique numbers === size of nums n
// since we sort counts
// var topKFrequent = function(nums, k) {
//     const counts = {};
//     for (const num of nums) {
//         num in counts ? counts[num]++ : counts[num] = 1;
//     }
//
//     return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, k);
// };

// instead of sorting counts, can use a frequency bucket array
// initialize frequency array with size n since 0 < count <= n
// where n is the size of nums
// mapping counts to a bucket of numbers with the same count
// then go through highest to lowest frequency and fill up k numbers
// O(n) complexity since we go through n numbers and n frequencies
var topKFrequent = function(nums, k) {
    const counts = {};
    for (const num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }

    const freq = new Array(nums.length).fill().map(el => []);
    for (const [num, count] of Object.entries(counts)) {
        freq[count-1].push(num);
    } 
    
    const kFreq = [];
    for (let i = freq.length-1; i >= 0; i--) {
        kFreq.push(...freq[i]);
        if (kFreq.length > k) return kFreq.slice(0, k);
    }
    return kFreq;
};