/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    const rows = {};
    for (let i = 0; i < numRows; i++) {
        rows[i] = '';
    }
    
    
    let rowNum = -1;
    let zigzag = false;
    
    for (let i = 0; i < s.length; i++) {
        if (rowNum === 0) {
            zigzag = false
        } else if (rowNum === numRows - 1) {
            zigzag = true;
        }
        
        zigzag ? rowNum-- : rowNum++;
        
        rows[rowNum] += s[i];
    }
    console.log(rows)
    return Object.values(rows).join('');
};