/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// use a stack to find out number of fleets
// the stack will keep track of the slowest cars leading a fleet
// first combine the cars positions and speeds together into an array
// then sort by biggest to smallest position
// this way we find which slow cars nearest the target will slow down others and form a fleet

// initialize the stack with the first car, then go through all other cars
// if current car is faster than the slowest car on top of the stack:
// calculate at what position they will meet
// if they meet after target, push current onto the stack (current starts it's own fleet)
// otherwise no need to change anything (current becomes part of the fleet with stack top)

// O(n*log(n) + O(n)) time complexity for sorting the cars and then going through each of them
// So overall time complexity is O(n*log(n)) 
// O(2*n) => O(n) extra space used for making a new cars array, and a stack for fleets

var carFleet = function(target, position, speed) {
    if (position.length <= 1) return position.length;

    const cars = position.map((pos, i) => [pos, speed[i]])
                         .sort((a, b) => b[0] - a[0]);
    const stack = [cars[0]];

    for (let i = 1; i < cars.length; i++) {
        const last = stack[stack.length-1];
        if (cars[i][1] > last[1]) {
            const crossTime = (last[0] - cars[i][0]) / (cars[i][1] - last[1]);
            const crossPosition = last[0] + (last[1] * crossTime);
            if (crossPosition > target) stack.push(cars[i]);
        } else {
            stack.push(cars[i]);
        }
    }

    return stack.length;
};
