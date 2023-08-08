/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskCount = {};
    let max = 0;
    let maxRepeats = 0;
    
    for (const task of tasks) {
        task in taskCount ? taskCount[task]++ : taskCount[task] = 1;
        
        if (taskCount[task] > max) {
            max = taskCount[task];
            maxRepeats = 1;
        } else if (taskCount[task] === max) {
            maxRepeats++;
        }
    }
    
    return Math.max(tasks.length, (max - 1) * (n + 1) + maxRepeats);
};