class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.matrix = matrix
        m, n = len(matrix), len(matrix[0])
        dp = [[0 for x in range(n + 1)] for y in range(m + 1)]
        for i in range(m):
            for j in range(n):
                dp[i + 1][j + 1] = matrix[i][j] + dp[i + 1][j] + dp[i][j + 1] - dp[i][j]
        self.dp = dp
        
        
    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.dp[row2 + 1][col2 + 1] - self.dp[row1][col2 + 1] - self.dp[row2 + 1][col1] + self.dp[row1][col1]


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)