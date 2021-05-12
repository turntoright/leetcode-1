/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    this.matrix = matrix;    
    dp = Array.from({length: m + 1}, x => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            dp[i + 1][j + 1] = matrix[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
        }
    this.dp = dp
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */