/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const stack = [0];
    const visited = new Set([0]);
    
    while (stack.length) {
        const i = stack.pop();
        
        for (const neighbor of rooms[i]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
    
    return visited.size === rooms.length;
};