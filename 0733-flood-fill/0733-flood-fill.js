/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    fillHelper(image, sr, sc, image[sr][sc], color);
    return image;
};

var fillHelper = function(image, sr, sc, findColor, fillColor) {
    if (
        sr < 0 || sr >= image.length || 
        sc < 0 || sc >= image[0].length || 
        image[sr][sc] !== findColor || 
        image[sr][sc] === fillColor
    ) return;
    
    image[sr][sc] = fillColor;
    fillHelper(image, sr+1, sc, findColor, fillColor);
    fillHelper(image, sr-1, sc, findColor, fillColor);
    fillHelper(image, sr, sc+1, findColor, fillColor);
    fillHelper(image, sr, sc-1, findColor, fillColor);
}